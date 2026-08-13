import React from "react";
import { Clock, AlertTriangle } from "lucide-react";
import { formatTime } from "../../lib/scoring";
import { clsx } from "clsx";

interface ExamTimerProps {
  remainingSec: number;
}

export const ExamTimer: React.FC<ExamTimerProps> = ({ remainingSec }) => {
  const is10MinWarning = remainingSec <= 600 && remainingSec > 300;
  const is5MinDanger = remainingSec <= 300;

  let timerContainerStyle = "bg-bg-surface border-border-color text-text-primary";
  let icon = <Clock className="w-4 h-4 text-primary" />;

  if (is5MinDanger) {
    timerContainerStyle = "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400 animate-pulse-subtle font-bold";
    icon = <AlertTriangle className="w-4 h-4 text-rose-500 animate-bounce" />;
  } else if (is10MinWarning) {
    timerContainerStyle = "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400 font-bold";
    icon = <AlertTriangle className="w-4 h-4 text-amber-500" />;
  }

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-sm shadow-xs transition-colors",
        timerContainerStyle
      )}
    >
      {icon}
      <span className="font-mono text-base tracking-wider">{formatTime(remainingSec)}</span>
    </div>
  );
};
