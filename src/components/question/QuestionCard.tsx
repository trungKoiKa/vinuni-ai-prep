import React from "react";
import type { Question } from "../../types/question";
import { Badge } from "../ui/Badge";
import { AnswerOption } from "./AnswerOption";
import { ExplanationBox } from "./ExplanationBox";
import { Bookmark, BookmarkCheck } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  showExplanation: boolean;
  isSubmitted?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  isBookmarked,
  onToggleBookmark,
  showExplanation,
  isSubmitted = false,
}) => {
  const renderQuestionText = (text: string) => {
    const codeBlockRegex = /```python\n([\s\S]*?)\n```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${lastIndex}`} className="whitespace-pre-line">
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      parts.push(
        <div
          key={`code-${match.index}`}
          className="my-3 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 shadow-inner"
        >
          <pre className="m-0 leading-relaxed font-mono">{match[1]}</pre>
        </div>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${lastIndex}`} className="whitespace-pre-line">
          {text.substring(lastIndex)}
        </span>
      );
    }

    return parts;
  };

  return (
    <div className="bg-bg-surface border border-border-color rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-color pb-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm text-primary">
            Câu {questionNumber}/{totalQuestions}
          </span>
          <span className="text-text-secondary">•</span>
          <span className="text-xs font-semibold text-text-secondary">
            {question.moduleName}
          </span>
          <span className="text-text-secondary">•</span>
          <Badge difficulty={question.difficulty} />
        </div>

        <button
          onClick={onToggleBookmark}
          className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-xl border transition-colors ${
            isBookmarked
              ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30"
              : "bg-bg-surface-hover text-text-secondary border-border-color hover:text-text-primary"
          }`}
        >
          {isBookmarked ? (
            <>
              <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Đã đánh dấu</span>
            </>
          ) : (
            <>
              <Bookmark className="w-4 h-4" />
              <span>Đánh dấu</span>
            </>
          )}
        </button>
      </div>

      <div className="text-base sm:text-lg font-semibold text-text-primary leading-relaxed">
        {renderQuestionText(question.question)}
      </div>

      <div className="space-y-3 pt-2">
        {question.options.map((optText, idx) => (
          <AnswerOption
            key={idx}
            index={idx}
            optionText={optText}
            isSelected={selectedAnswer === idx}
            isSubmitted={isSubmitted || showExplanation}
            isCorrect={idx === question.correctAnswer}
            showResult={showExplanation}
            onSelect={() => onSelectAnswer(idx)}
          />
        ))}
      </div>

      {showExplanation && (
        <ExplanationBox explanation={question.explanation} />
      )}
    </div>
  );
};
