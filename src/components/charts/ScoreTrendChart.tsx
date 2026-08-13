import React from "react";
import type { MockTestResult } from "../../types/progress";

interface ScoreTrendChartProps {
  results: MockTestResult[];
}

export const ScoreTrendChart: React.FC<ScoreTrendChartProps> = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center text-text-secondary text-sm">
        Chưa có dữ liệu bài làm đề mô phỏng.
      </div>
    );
  }

  const displayResults = [...results].slice(0, 10).reverse();
  const width = 500;
  const height = 180;
  const padding = 30;

  const points = displayResults.map((r, i) => {
    const x = padding + (i * (width - 2 * padding)) / Math.max(1, displayResults.length - 1);
    const y = height - padding - (r.scorePercent / 100) * (height - 2 * padding);
    return { x, y, score: r.scorePercent, date: new Date(r.date).toLocaleDateString("vi-VN") };
  });

  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[400px]">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          {[0, 25, 50, 75, 100].map((val) => {
            const y = height - padding - (val / 100) * (height - 2 * padding);
            return (
              <g key={val}>
                <line
                  x1={padding}
                  y1={y}
                  x2={width - padding}
                  y2={y}
                  stroke="var(--border)"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
                <text
                  x={padding - 8}
                  y={y + 4}
                  fill="var(--text-secondary)"
                  fontSize="10"
                  textAnchor="end"
                >
                  {val}%
                </text>
              </g>
            );
          })}

          {points.length > 1 && (
            <polygon
              points={`${points[0].x},${height - padding} ${polylinePoints} ${
                points[points.length - 1].x
              },${height - padding}`}
              fill="var(--primary)"
              fillOpacity="0.1"
            />
          )}

          {points.length > 1 && (
            <polyline
              fill="none"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={polylinePoints}
            />
          )}

          {points.map((p, idx) => (
            <g key={idx} className="group cursor-pointer">
              <circle
                cx={p.x}
                cy={p.y}
                r="5"
                fill="var(--primary)"
                className="transition-transform group-hover:scale-125"
              />
              <circle
                cx={p.x}
                cy={p.y}
                r="8"
                fill="var(--primary)"
                fillOpacity="0.2"
              />
              <text
                x={p.x}
                y={p.y - 10}
                fill="var(--text-primary)"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                {p.score}%
              </text>
            </g>
          ))}
        </svg>

        <div className="flex justify-between text-xs text-text-secondary mt-2 px-6">
          <span>Lần 1 ({points[0]?.date})</span>
          {points.length > 1 && <span>Lần gần nhất ({points[points.length - 1]?.date})</span>}
        </div>
      </div>
    </div>
  );
};
