import React, { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathTextProps {
  text: string;
  className?: string;
}

interface Segment {
  type: "text" | "inline-math" | "display-math";
  content: string;
}

/**
 * Automatically converts bracketed matrix notations like [[1, 2], [3, 4]]
 * into clean LaTeX bmatrix notation $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$
 * while leaving Python code blocks untouched.
 */
export function convertBracketMatrices(text: string): string {
  if (!text) return "";
  
  // Do not transform python code block text
  if (text.trim().startsWith("```") || text.includes("np.array")) {
    return text;
  }

  // Regex matching matrix patterns like [[a, b], [c, d]] or [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const matrixRegex = /\[\s*(\[\s*[^\[\]]+?\s*\](?:\s*,\s*\[\s*[^\[\]]+?\s*\])+)\s*\]/g;

  return text.replace(matrixRegex, (fullMatch, innerContent) => {
    const rowMatches = innerContent.match(/\[\s*([^\[\]]+?)\s*\]/g);
    if (!rowMatches) return fullMatch;

    const rows = rowMatches.map((rowStr: string) => {
      const inner = rowStr.replace(/^\[\s*/, "").replace(/\s*\]$/, "");
      const elements = inner.split(/\s*,\s*/);
      return elements.join(" & ");
    });

    const latexMatrix = `\\begin{bmatrix} ${rows.join(" \\\\ ")} \\end{bmatrix}`;
    return `$${latexMatrix}$`;
  });
}

/**
 * Parses text into plain text segments and LaTeX math segments.
 */
function parseMathSegments(rawText: string): Segment[] {
  if (!rawText) return [];

  // Preprocess bracket matrix notation into LaTeX bmatrix
  const text = convertBracketMatrices(rawText);

  const segments: Segment[] = [];
  // Regex matching $$...$$, $...$, \[...\], \(...\)
  const regex = /(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const matchedStr = match[0];
    const matchIndex = match.index;

    // Push preceding text segment if any
    if (matchIndex > lastIndex) {
      segments.push({
        type: "text",
        content: text.slice(lastIndex, matchIndex),
      });
    }

    // Determine math type and strip delimiters
    if (matchedStr.startsWith("$$") && matchedStr.endsWith("$$")) {
      segments.push({
        type: "display-math",
        content: matchedStr.slice(2, -2).trim(),
      });
    } else if (matchedStr.startsWith("\\[") && matchedStr.endsWith("\\]")) {
      segments.push({
        type: "display-math",
        content: matchedStr.slice(2, -2).trim(),
      });
    } else if (matchedStr.startsWith("\\(") && matchedStr.endsWith("\\)")) {
      segments.push({
        type: "inline-math",
        content: matchedStr.slice(2, -2).trim(),
      });
    } else if (matchedStr.startsWith("$") && matchedStr.endsWith("$")) {
      segments.push({
        type: "inline-math",
        content: matchedStr.slice(1, -1).trim(),
      });
    }

    lastIndex = regex.lastIndex;
  }

  // Push remaining text
  if (lastIndex < text.length) {
    const remaining = text.slice(lastIndex);
    // Auto-detect standalone LaTeX math command without $ delimiters
    if (
      /\\(begin|mathbb|mathbbm|mathcal|mathbf|frac|sqrt|sum|prod|int|matrix|bmatrix|pmatrix|vmatrix|lambda|theta|sigma|alpha|beta|gamma|delta|epsilon|omega|phi|pi)/.test(
        remaining
      )
    ) {
      segments.push({
        type: "inline-math",
        content: remaining.trim(),
      });
    } else {
      segments.push({
        type: "text",
        content: remaining,
      });
    }
  }

  return segments;
}

export const MathText: React.FC<MathTextProps> = ({ text, className = "" }) => {
  const segments = useMemo(() => parseMathSegments(text), [text]);

  return (
    <span className={`inline-wrap ${className}`}>
      {segments.map((seg, idx) => {
        if (seg.type === "text") {
          return <React.Fragment key={idx}>{seg.content}</React.Fragment>;
        }

        try {
          const html = katex.renderToString(seg.content, {
            displayMode: seg.type === "display-math",
            throwOnError: false,
          });

          return (
            <span
              key={idx}
              className={
                seg.type === "display-math"
                  ? "block my-2 text-center overflow-x-auto"
                  : "inline-block px-1 align-middle"
              }
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch (e) {
          console.error("KaTeX rendering error:", e);
          return (
            <span key={idx} className="font-mono text-xs text-amber-600">
              {seg.content}
            </span>
          );
        }
      })}
    </span>
  );
};
