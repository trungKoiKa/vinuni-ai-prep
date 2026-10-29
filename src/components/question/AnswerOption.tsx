import React from "react";
import { cn } from "cn";
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

const letters = ["A", "B", "C", "D"];

export const AnswerOption: React.FC<AnswerOptionProps> = ({
  index,
  optionText,
  isSelected,
  isSubmitted,
  isCorrect,
  showResult,
  onSelect,
}) => {
  const revealed = showResult && isSubmitted;
  const state = revealed && isCorrect
    ? "correct"
    : revealed && isSelected
      ? "wrong"
      : !revealed && isSelected
        ? "selected"
        : "idle";

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={revealed}
      data-state={state}
      className={cn(
        "w-full text-left p-4 rounded-lg border-2 flex items-start gap-3.5 transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-default",
        state === "idle" && "bg-card hover:border-primary/50 hover:bg-accent",
        state === "selected" && "border-primary bg-primary/10 font-medium",
        state === "correct" && "border-success bg-success/10 font-medium",
        state === "wrong" && "border-destructive bg-destructive/10 font-medium"
      )}
    >
      <span
        className={cn(
          "size-7 rounded-md border flex items-center justify-center font-bold text-xs shrink-0 transition-colors mt-0.5",
          state === "idle" && "bg-muted text-muted-foreground",
          state === "selected" && "bg-primary text-primary-foreground border-primary",
          state === "correct" && "bg-success text-white border-success",
          state === "wrong" && "bg-destructive text-white border-destructive"
        )}
      >
        {letters[index]}
      </span>

      <span className="flex-1 text-sm sm:text-base leading-relaxed">
        <MathText text={optionText} />
      </span>

      {state === "correct" && (
        <span className="shrink-0 mt-1 inline-flex items-center gap-1 text-xs font-bold text-success">
          <Check className="size-4" /> Chính xác
        </span>
      )}
      {state === "wrong" && (
        <span className="shrink-0 mt-1 inline-flex items-center gap-1 text-xs font-bold text-destructive">
          <X className="size-4" /> Chưa đúng
        </span>
      )}
    </button>
  );
};
