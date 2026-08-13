import React from "react";
import type { ModuleId } from "../../types/question";
import { modulesData } from "../../data/modules";

interface ModuleScoreChartProps {
  moduleScores: Record<ModuleId, { correct: number; total: number }>;
}

export const ModuleScoreChart: React.FC<ModuleScoreChartProps> = ({ moduleScores }) => {
  return (
    <div className="space-y-4">
      {modulesData.map((mod) => {
        const data = moduleScores[mod.id] || { correct: 0, total: 8 };
        const percent = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

        return (
          <div key={mod.id} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
              <span className="flex items-center gap-2 text-text-primary">
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ backgroundColor: mod.color }}
                />
                <span className="font-semibold">{mod.code}:</span> {mod.name}
              </span>
              <span className="text-text-secondary">
                {data.correct}/{data.total} câu ({percent}%)
              </span>
            </div>
            <div className="w-full bg-bg-surface-hover border border-border-color rounded-full h-3 overflow-hidden">
              <div
                className="h-full transition-all duration-500 ease-out rounded-full"
                style={{
                  width: `${percent}%`,
                  backgroundColor: mod.color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
