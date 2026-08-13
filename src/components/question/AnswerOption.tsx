import React from "react";
import { clsx } from "clsx";
import { Check, X } from "lucide-react";
import { MathText } from "../ui/MathText";

interface AnswerOptionProps {
  index: number;
  optionText: string;
  isSelected: boolean;
  isSubmitted: boolean;
  isCorrect: boolean;
  showResult: boolean;
  onSelect: () => void;
}

export const AnswerOption: React.FC<AnswerOptionProps> = ({
  index,
  optionText,
  isSelected,
  isSubmitted,
  isCorrect,
  showResult,
  onSelect,
}) => {
  const letters = ["A", "B", "C", "D"];

  let borderStyle = "border-border-color bg-bg-surface hover:border-primary/50 hover:bg-bg-surface-hover";
  let letterBadgeStyle = "bg-bg-surface-hover text-text-secondary border-border-color";

  if (showResult && isSubmitted) {
    if (isCorrect) {
      borderStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100 font-medium";
      letterBadgeStyle = "bg-emerald-500 text-white border-emerald-500";
    } else if (isSelected && !isCorrect) {
      borderStyle = "border-rose-500 bg-rose-500/10 text-rose-950 dark:text-rose-100 font-medium";
      letterBadgeStyle = "bg-rose-500 text-white border-rose-500";
    }
  } else if (isSelected) {
    borderStyle = "border-primary bg-primary/10 text-text-primary font-medium ring-1 ring-primary";
    letterBadgeStyle = "bg-primary text-white border-primary";
  }

  return (
    <button
      onClick={onSelect}
      disabled={showResult && isSubmitted}
      className={clsx(
        "w-full text-left p-4 rounded-xl border-2 flex items-start gap-3.5 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-default",
        borderStyle
      )}
    >
      <span
        className={clsx(
          "w-7 h-7 rounded-lg border flex items-center justify-center font-bold text-xs shrink-0 transition-colors mt-0.5",
          letterBadgeStyle
        )}
      >
        {letters[index]}
      </span>

      <span className="flex-1 text-sm sm:text-base leading-relaxed text-text-primary">
        <MathText text={optionText} />
      </span>

      {showResult && isSubmitted && (
        <span className="shrink-0 mt-1">
          {isCorrect && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <Check className="w-4 h-4" /> Chính xác
            </span>
          )}
          {isSelected && !isCorrect && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400">
              <X className="w-4 h-4" /> Chưa đúng
            </span>
          )}
        </span>
      )}
    </button>
  );
};
