import React from "react";
import { clsx } from "clsx";

interface ProgressBarProps {
  percent: number;
  height?: string;
  autoColor?: boolean;
  colorClass?: string;
  showText?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  height = "h-1.5",
  autoColor = true,
  colorClass,
  showText = false,
  className,
}) => {
  const clamped = Math.min(100, Math.max(0, percent));

  let barColor = "bg-primary";
  if (autoColor) {
    if (clamped < 30) {
      barColor = "bg-danger";
    } else if (clamped < 70) {
      barColor = "bg-warning";
    } else {
      barColor = "bg-success";
    }
  } else if (colorClass) {
    barColor = colorClass;
  }

  return (
    <div className={clsx("w-full", className)}>
      <div className={clsx("w-full bg-bg-surface-hover border border-border-color/50 rounded-full overflow-hidden", height)}>
        <div
          className={clsx("h-full transition-all duration-300 ease-out rounded-full", barColor)}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showText && (
        <span className="text-xs text-text-secondary mt-1 block text-right font-medium">
          {clamped}%
        </span>
      )}
    </div>
  );
};
