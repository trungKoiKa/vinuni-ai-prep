import React from "react";
import { Lightbulb } from "lucide-react";
import { MathText } from "../ui/MathText";

interface ExplanationBoxProps {
  explanation: string;
}

export const ExplanationBox: React.FC<ExplanationBoxProps> = ({ explanation }) => {
  return (
    <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2 animate-fade-in">
      <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold text-sm">
        <Lightbulb className="w-5 h-5 shrink-0" />
        <span>Lời giải & Giải thích chi tiết</span>
      </div>
      <div className="text-sm leading-relaxed text-text-primary pl-7">
        <MathText text={explanation} />
      </div>
    </div>
  );
};
