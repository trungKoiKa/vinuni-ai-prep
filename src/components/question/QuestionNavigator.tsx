import React, { useState } from "react";
import { cn } from "cn";
import { ChevronUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface QuestionNavigatorProps {
  totalQuestions: number;
  currentIndex: number;
  userAnswers: Record<string, number | null>;
  questionIds: string[];
  bookmarkedIds: string[];
  onSelectIndex: (index: number) => void;
  onSubmitExam?: () => void;
  isMockTest?: boolean;
}

export const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  totalQuestions,
  currentIndex,
  userAnswers,
  questionIds,
  bookmarkedIds,
  onSelectIndex,
  onSubmitExam,
  isMockTest = false,
}) => {
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  const answeredCount = Object.values(userAnswers).filter((ans) => ans !== null && ans !== undefined).length;
  const bookmarkedCount = questionIds.filter((id) => bookmarkedIds.includes(id)).length;

  const renderGridButtons = () => {
    return (
      <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
        {questionIds.map((id, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered = userAnswers[id] !== null && userAnswers[id] !== undefined;
          const isBookmarked = bookmarkedIds.includes(id);

          return (
            <Button
              key={id}
              variant="outline"
              size="sm"
              aria-current={isCurrent ? "step" : undefined}
              onClick={() => {
                onSelectIndex(idx);
                setIsMobileSheetOpen(false);
              }}
              className={cn(
                "relative h-10 px-0 text-xs bg-muted dark:bg-muted text-muted-foreground",
                isCurrent &&
                  "bg-primary text-primary-foreground border-primary font-bold ring-2 ring-primary/40 hover:bg-primary/90 hover:text-primary-foreground dark:bg-primary dark:hover:bg-primary/90",
                !isCurrent && isBookmarked &&
                  "bg-warning/20 text-warning border-warning/40 font-semibold dark:bg-warning/20",
                !isCurrent && !isBookmarked && isAnswered &&
                  "bg-success/15 text-success border-success/30 font-medium dark:bg-success/15"
              )}
            >
              {idx + 1}
              {isBookmarked && (
                <span className="absolute top-1 right-1 size-1.5 rounded-full bg-warning" />
              )}
            </Button>
          );
        })}
      </div>
    );
  };

  const submitButton = isMockTest && onSubmitExam && (
    <Button
      className="w-full mt-4"
      onClick={() => {
        setIsMobileSheetOpen(false);
        onSubmitExam();
      }}
    >
      Nộp bài ngay
    </Button>
  );

  return (
    <>
      <Card className="hidden lg:flex gap-4 py-5">
        <CardHeader className="border-b px-5 [.border-b]:pb-3">
          <CardTitle className="text-sm">Danh sách câu hỏi</CardTitle>
        </CardHeader>
        <CardContent className="px-5 space-y-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Đã làm: <strong className="text-success font-bold">{answeredCount}</strong>/{totalQuestions}
            </span>
            <span>
              Đánh dấu: <strong className="text-warning font-bold">{bookmarkedCount}</strong>
            </span>
          </div>

          {renderGridButtons()}
          {submitButton}
        </CardContent>
      </Card>

      <div className="lg:hidden">
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-full h-auto justify-between px-4 py-3 bg-card shadow-lg"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-success" />
                <span>Câu {currentIndex + 1}/{totalQuestions}</span>
                <span className="text-muted-foreground">({answeredCount} đã chọn)</span>
              </span>
              <span className="flex items-center gap-1 text-primary">
                Danh sách <ChevronUp />
              </span>
            </Button>
          </SheetTrigger>

          <SheetContent side="bottom" className="rounded-t-2xl max-h-[75vh] overflow-y-auto">
            <SheetHeader className="border-b">
              <SheetTitle>
                Danh sách câu hỏi ({answeredCount}/{totalQuestions})
              </SheetTitle>
            </SheetHeader>
            <div className="px-4 pb-4">
              {renderGridButtons()}
              {submitButton}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
