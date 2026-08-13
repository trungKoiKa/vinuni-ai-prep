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
 */
export function convertBracketMatrices(text: string): string {
  if (!text) return "";
  
  if (text.trim().startsWith("```") || text.includes("np.array")) {
    return text;
  }

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
 * Automatically converts systems of equations like { x + y = 7, x - y = 1 }
 * into clean 2D LaTeX cases notation $\begin{cases} x + y = 7 \\ x - y = 1 \end{cases}$
 */
export function convertSystemsOfEquations(text: string): string {
  if (!text) return "";
  if (text.trim().startsWith("```") || text.includes("np.array")) return text;

  const systemRegex = /\{\s*([^\{\}]+?=[^\{\}]+?,\s*[^\{\}]+?=[^\{\}]+?)\s*\}/g;

  return text.replace(systemRegex, (fullMatch, inner) => {
    const equations = inner.split(/\s*,\s*/).map((eq: string) => eq.trim());
    if (equations.length < 2) return fullMatch;

    const latexCases = `\\begin{cases} ${equations.join(" \\\\ ")} \\end{cases}`;
    return `$${latexCases}$`;
  });
}

/**
 * Automatically converts slash division fractions like 1/(ad - bc), TP/(TP + FN), (x-min)/(max-min)
 * into clean 2D vertical LaTeX fraction notation \frac{numerator}{denominator}
 */
export function convertSlashFractions(text: string): string {
  if (!text) return "";
  if (text.trim().startsWith("```") || text.includes("np.array") || text.includes("def ")) return text;

  let res = text;

  // 1. (expr1) / (expr2) -> \frac{expr1}{expr2}
  res = res.replace(/\(\s*([^\(\)]+?)\s*\)\s*\/\s*\(\s*([^\(\)]+?)\s*\)/g, (_m, g1, g2) => `$\\frac{${g1}}{${g2}}$`);

  // 2. N / (expr2) -> \frac{N}{expr2}
  res = res.replace(/\b(\d+)\s*\/\s*\(\s*([^\(\)]+?)\s*\)/g, (_m, g1, g2) => `$\\frac{${g1}}{${g2}}$`);

  // 3. 1 / det(A) -> \frac{1}{\det(A)}
  res = res.replace(/1\s*\/\s*det\(([A-Z])\)/g, (_m, g1) => `$\\frac{1}{\\det(${g1})}$`);

  // 4. TP / (TP + FN) or TP / (TP + FP)
  res = res.replace(/\b([A-Z]{2,})\s*\/\s*\(\s*([^\(\)]+?)\s*\)/g, (_m, g1, g2) => `$\\frac{${g1}}{${g2}}$`);

  return res;
}

/**
 * Parses text into plain text segments and LaTeX math segments.
 */
function parseMathSegments(rawText: string): Segment[] {
  if (!rawText) return [];

  // Preprocess matrices, systems of equations, and slash fractions
  let text = convertBracketMatrices(rawText);
  text = convertSystemsOfEquations(text);
  text = convertSlashFractions(text);

  const segments: Segment[] = [];
  const regex = /(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const matchedStr = match[0];
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      segments.push({
        type: "text",
        content: text.slice(lastIndex, matchIndex),
      });
    }

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

  if (lastIndex < text.length) {
    const remaining = text.slice(lastIndex);
    if (
      /\\(begin|mathbb|mathbbm|mathcal|mathbf|frac|sqrt|sum|prod|int|matrix|bmatrix|pmatrix|vmatrix|cases|lambda|theta|sigma|alpha|beta|gamma|delta|epsilon|omega|phi|pi)/.test(
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
