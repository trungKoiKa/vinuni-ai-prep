import React from "react";
import type { Question } from "../../types/question";
import { DifficultyBadge } from "./DifficultyBadge";
import { AnswerOption } from "./AnswerOption";
import { ExplanationBox } from "./ExplanationBox";
import { MathText } from "../ui/MathText";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
        const textChunk = text.substring(lastIndex, match.index);
        parts.push(
          <span key={`text-${lastIndex}`} className="whitespace-pre-line">
            <MathText text={textChunk} />
          </span>
        );
      }
      parts.push(
        <div
          key={`code-${match.index}`}
          className="my-3 p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 shadow-inner"
        >
          <pre className="m-0 leading-relaxed font-mono">{match[1]}</pre>
        </div>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      const textChunk = text.substring(lastIndex);
      parts.push(
        <span key={`text-${lastIndex}`} className="whitespace-pre-line">
          <MathText text={textChunk} />
        </span>
      );
    }

    return parts;
  };

  return (
    <Card className="gap-0 py-0">
      <CardHeader className="flex flex-wrap items-center justify-between gap-3 border-b px-5 sm:px-7 py-4 [.border-b]:pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-sm text-primary">
            Câu {questionNumber}/{totalQuestions}
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs font-semibold text-muted-foreground">{question.moduleName}</span>
          <span className="text-muted-foreground">•</span>
          <DifficultyBadge difficulty={question.difficulty} />
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onToggleBookmark}
          aria-pressed={isBookmarked}
          className={cn(
            isBookmarked &&
              "border-warning/30 bg-warning/10 text-warning hover:bg-warning/15 hover:text-warning dark:border-warning/30 dark:bg-warning/10"
          )}
        >
          {isBookmarked ? <BookmarkCheck className="fill-current" /> : <Bookmark />}
          {isBookmarked ? "Đã đánh dấu" : "Đánh dấu"}
        </Button>
      </CardHeader>

      <CardContent className="px-5 sm:px-7 py-6 space-y-6">
        <div className="text-base sm:text-lg font-semibold leading-relaxed">
          {renderQuestionText(question.question)}
        </div>

        <div className="space-y-3">
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

        {showExplanation && <ExplanationBox explanation={question.explanation} />}
      </CardContent>
    </Card>
  );
};
