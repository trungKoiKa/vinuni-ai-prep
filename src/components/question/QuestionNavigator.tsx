import React, { useState } from "react";
import { clsx } from "clsx";
import { ChevronUp, ChevronDown, CheckCircle2 } from "lucide-react";

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

          let buttonStyle = "bg-bg-surface-hover text-text-secondary border-border-color";

          if (isCurrent) {
            buttonStyle = "bg-primary text-white border-primary font-bold ring-2 ring-primary/40";
          } else if (isBookmarked) {
            buttonStyle = "bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/40 font-semibold";
          } else if (isAnswered) {
            buttonStyle = "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 font-medium";
          }

          return (
            <button
              key={id}
              onClick={() => {
                onSelectIndex(idx);
                setIsMobileSheetOpen(false);
              }}
              className={clsx(
                "relative h-10 rounded-xl border text-xs flex items-center justify-center transition-all duration-150 focus:outline-none",
                buttonStyle
              )}
            >
              {idx + 1}
              {isBookmarked && (
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-500" />
              )}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="hidden lg:block bg-bg-surface border border-border-color rounded-2xl p-5 space-y-4">
        <h3 className="font-bold text-sm text-text-primary border-b border-border-color pb-3">
          Danh sách câu hỏi
        </h3>

        <div className="flex items-center justify-between text-xs text-text-secondary">
          <span>Đã làm: <strong className="text-emerald-500 font-bold">{answeredCount}</strong>/{totalQuestions}</span>
          <span>Đánh dấu: <strong className="text-amber-500 font-bold">{bookmarkedCount}</strong></span>
        </div>

        {renderGridButtons()}

        {isMockTest && onSubmitExam && (
          <button
            onClick={onSubmitExam}
            className="w-full mt-4 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium text-sm transition-colors shadow-sm"
          >
            Nộp bài ngay
          </button>
        )}
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileSheetOpen(!isMobileSheetOpen)}
          className="w-full bg-bg-surface border-t border-border-color px-4 py-3 flex items-center justify-between shadow-lg text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Câu {currentIndex + 1}/{totalQuestions}</span>
            <span className="text-text-secondary">({answeredCount} đã chọn)</span>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <span>Danh sách</span>
            {isMobileSheetOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </div>
        </button>

        {isMobileSheetOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end">
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileSheetOpen(false)}
            />
            <div className="relative bg-bg-surface border-t border-border-color rounded-t-2xl p-5 max-h-[75vh] overflow-y-auto space-y-4 shadow-2xl animate-slide-in">
              <div className="flex items-center justify-between pb-2 border-b border-border-color">
                <h3 className="font-bold text-base text-text-primary">
                  Danh sách câu hỏi ({answeredCount}/{totalQuestions})
                </h3>
                <button
                  onClick={() => setIsMobileSheetOpen(false)}
                  className="p-1 text-text-secondary hover:text-text-primary"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {renderGridButtons()}

              {isMockTest && onSubmitExam && (
                <button
                  onClick={() => {
                    setIsMobileSheetOpen(false);
                    onSubmitExam();
                  }}
                  className="w-full mt-4 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-md"
                >
                  Nộp bài ngay
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
