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
 * Parses text into plain text segments and LaTeX math segments.
 * Supports:
 * - Display math: $$...$$ or \[...\]
 * - Inline math: $...$ or \(...\)
 * - Auto-detects standalone LaTeX math strings containing \begin, \mathbb, \frac, \lambda, etc.
 */
function parseMathSegments(text: string): Segment[] {
  if (!text) return [];

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
    // Auto-detect if raw LaTeX command is present without $ delimiters
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
              className={seg.type === "display-math" ? "block my-2 text-center overflow-x-auto" : "inline-block px-0.5"}
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
