import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsByModule } from "../data/questions";
import type { ModuleId, Question } from "../types/question";
import { useProgress } from "../context/ProgressContext";
import { QuestionCard } from "../components/question/QuestionCard";
import { QuestionNavigator } from "../components/question/QuestionNavigator";
import { Button } from "../components/ui/Button";
import { Info, ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react";

export const Practice: React.FC = () => {
  const { moduleId } = useParams<{ moduleId?: string }>();
  const { progress, recordAnswer, toggleBookmark } = useProgress();

  const validModuleId: ModuleId | undefined =
    moduleId && ["A", "B", "C", "D"].includes(moduleId.toUpperCase())
      ? (moduleId.toUpperCase() as ModuleId)
      : undefined;

  const [questions, setQuestions] = useState<Question[]>(() =>
    getQuestionsByModule(validModuleId)
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number | null>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(
    progress.settings.showExplanationImmediately
  );

  useEffect(() => {
    setQuestions(getQuestionsByModule(validModuleId));
    setCurrentIndex(0);
    setUserAnswers({});
  }, [validModuleId]);

  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;

  const selectedAnswer = userAnswers[currentQuestion.id] ?? null;
  const isBookmarked = progress.bookmarkedQuestionIds.includes(currentQuestion.id);

  const handleSelectAnswer = (optionIdx: number) => {
    if (selectedAnswer !== null) return;
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIdx }));

    const isCorrect = optionIdx === currentQuestion.correctAnswer;
    recordAnswer(currentQuestion.id, isCorrect, 10);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-medium">
        <Info className="w-5 h-5 shrink-0" />
        <span>
          <strong>Lưu ý:</strong> Nội dung dùng để luyện tập, không phải đề thi chính thức.
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-color pb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-text-primary">
            Luyện tập trắc nghiệm {validModuleId ? `Module ${validModuleId}` : "Tất cả Module"}
          </h1>
          <p className="text-xs text-text-secondary mt-0.5">
            Làm bài không giới hạn thời gian, tự do xem lời giải chi tiết.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowExplanation(!showExplanation)}
            icon={showExplanation ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          >
            {showExplanation ? "Ẩn giải thích" : "Bật giải thích"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div className="lg:col-span-3 space-y-6">
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={handleSelectAnswer}
            isBookmarked={isBookmarked}
            onToggleBookmark={() => toggleBookmark(currentQuestion.id)}
            showExplanation={showExplanation && selectedAnswer !== null}
            isSubmitted={selectedAnswer !== null}
          />

          <div className="flex items-center justify-between p-4 rounded-2xl bg-bg-surface border border-border-color">
            <Button
              variant="outline"
              size="md"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              Câu trước
            </Button>

            <span className="text-xs font-semibold text-text-secondary">
              {currentIndex + 1} / {questions.length}
            </span>

            <Button
              variant="primary"
              size="md"
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Câu tiếp
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <QuestionNavigator
            totalQuestions={questions.length}
            currentIndex={currentIndex}
            userAnswers={userAnswers}
            questionIds={questions.map((q) => q.id)}
            bookmarkedIds={progress.bookmarkedQuestionIds}
            onSelectIndex={(idx) => setCurrentIndex(idx)}
          />
        </div>
      </div>
    </div>
  );
};
