import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { allQuestions } from "../data/questions";
import type { Question } from "../types/question";
import type { MockTestResult, QuestionAttempt } from "../types/progress";
import { generateMockTest100 } from "../lib/shuffle";
import { calculateTestScore } from "../lib/scoring";
import { useProgress } from "../context/ProgressContext";
import { useTimer } from "../hooks/useTimer";
import { useToast } from "../hooks/useToast";
import { QuestionCard } from "../components/question/QuestionCard";
import { QuestionNavigator } from "../components/question/QuestionNavigator";
import { ExamTimer } from "../components/exam/ExamTimer";
import { SubmitConfirmModal } from "../components/exam/SubmitConfirmModal";
import { Button } from "../components/ui/Button";
import { ToastContainer } from "../components/ui/Toast";
import { Info, ArrowLeft, ArrowRight, Send } from "lucide-react";

export const MockTest: React.FC = () => {
  const navigate = useNavigate();
  const { progress, addMockTestResult, toggleBookmark } = useProgress();
  const { toasts, addToast, removeToast } = useToast();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number | null>>({});
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);

  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const testSet = generateMockTest100(allQuestions, progress);
    setQuestions(testSet);
    startTimeRef.current = Date.now();
  }, []);

  const durationSec = (progress.settings.mockTestDurationMin || 90) * 60;

  const handleSubmitExam = useCallback(() => {
    if (isExamSubmitted || questions.length === 0) return;
    setIsExamSubmitted(true);

    const timeUsedSec = Math.max(1, Math.floor((Date.now() - startTimeRef.current) / 1000));
    const scoreSummary = calculateTestScore(questions, userAnswers);

    const attempts: QuestionAttempt[] = questions.map((q) => {
      const sel = userAnswers[q.id] ?? null;
      return {
        questionId: q.id,
        selectedAnswer: sel,
        isCorrect: sel === q.correctAnswer,
        timeSpentSec: Math.floor(timeUsedSec / questions.length),
      };
    });

    const resultId = "attempt_" + Date.now();
    const result: MockTestResult = {
      id: resultId,
      date: new Date().toISOString(),
      totalQuestions: scoreSummary.totalQuestions,
      correctCount: scoreSummary.correctCount,
      incorrectCount: scoreSummary.incorrectCount,
      blankCount: scoreSummary.blankCount,
      scorePercent: scoreSummary.scorePercent,
      timeUsedSec,
      moduleScores: scoreSummary.moduleScores,
      attempts,
    };

    addMockTestResult(result);
    sessionStorage.setItem("last_mock_result", JSON.stringify(result));

    navigate(`/result/${resultId}`);
  }, [isExamSubmitted, questions, userAnswers, addMockTestResult, navigate]);

  const handleTimerExpire = useCallback(() => {
    addToast("Đã hết thời gian 90 phút! Hệ thống tự động nộp bài thi.", "error");
    handleSubmitExam();
  }, [addToast, handleSubmitExam]);

  const handle10MinWarning = useCallback(() => {
    addToast("Cảnh báo: Bạn còn 10 phút để hoàn thành bài thi!", "warning");
  }, [addToast]);

  const handle5MinWarning = useCallback(() => {
    addToast("Cảnh báo khẩn cấp: Bạn chỉ còn 5 phút nữa!", "error");
  }, [addToast]);

  const { remainingSec } = useTimer({
    initialSeconds: durationSec,
    onExpire: handleTimerExpire,
    onTick10Min: handle10MinWarning,
    onTick5Min: handle5MinWarning,
    autoStart: true,
  });

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isExamSubmitted) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isExamSubmitted]);

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = userAnswers[currentQuestion.id] ?? null;
  const isBookmarked = progress.bookmarkedQuestionIds.includes(currentQuestion.id);

  const answeredCount = Object.values(userAnswers).filter((v) => v !== null && v !== undefined).length;
  const unansweredCount = questions.length - answeredCount;

  const handleSelectAnswer = (idx: number) => {
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: idx }));
  };

  return (
    <div className="space-y-6 animate-fade-in relative">
      <ToastContainer toasts={toasts} onRemove={removeToast} />

      <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-medium">
        <Info className="w-5 h-5 shrink-0" />
        <span>
          <strong>Lưu ý:</strong> Nội dung dùng để luyện tập, không phải đề thi chính thức.
        </span>
      </div>

      <div className="sticky top-16 z-20 bg-bg-surface/90 backdrop-blur-md border border-border-color p-4 rounded-2xl flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-lg font-bold text-text-primary">
            Đề Thi Mô Phỏng 90 Phút
          </h1>
          <p className="text-xs text-text-secondary">
            {answeredCount}/{questions.length} câu đã trả lời
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ExamTimer remainingSec={remainingSec} />
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsSubmitModalOpen(true)}
            icon={<Send className="w-4 h-4" />}
          >
            Nộp bài
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
            showExplanation={false}
            isSubmitted={false}
          />

          <div className="flex items-center justify-between p-4 rounded-2xl bg-bg-surface border border-border-color">
            <Button
              variant="outline"
              size="md"
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              Câu trước
            </Button>

            <span className="text-xs font-semibold text-text-secondary">
              Câu {currentIndex + 1} / {questions.length}
            </span>

            <Button
              variant="primary"
              size="md"
              onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
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
            onSubmitExam={() => setIsSubmitModalOpen(true)}
            isMockTest
          />
        </div>
      </div>

      <SubmitConfirmModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirm={handleSubmitExam}
        totalQuestions={questions.length}
        answeredCount={answeredCount}
        unansweredCount={unansweredCount}
      />
    </div>
  );
};
