import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { allQuestions } from "../data/questions";
import type { Question } from "../types/question";
import type { MockTestResult, QuestionAttempt } from "../types/progress";
import { generateMockTest100 } from "../lib/shuffle";
import { calculateTestScore } from "../lib/scoring";
import { useProgress } from "../context/ProgressContext";
import { useTimer } from "../hooks/useTimer";
import { toast } from "sonner";
import { QuestionCard } from "../components/question/QuestionCard";
import { QuestionNavigator } from "../components/question/QuestionNavigator";
import { ExamTimer } from "../components/exam/ExamTimer";
import { SubmitConfirmModal } from "../components/exam/SubmitConfirmModal";
import { QuestionPager } from "../components/question/QuestionPager";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Send } from "lucide-react";

export const MockTest: React.FC = () => {
  const navigate = useNavigate();
  const { progress, addMockTestResult, toggleBookmark } = useProgress();

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
    toast.error("Đã hết thời gian 90 phút! Hệ thống tự động nộp bài thi.");
    handleSubmitExam();
  }, [handleSubmitExam]);

  const handle10MinWarning = useCallback(() => {
    toast.warning("Cảnh báo: Bạn còn 10 phút để hoàn thành bài thi!");
  }, []);

  const handle5MinWarning = useCallback(() => {
    toast.error("Cảnh báo khẩn cấp: Bạn chỉ còn 5 phút nữa!");
  }, []);

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
    <div className="space-y-6 animate-in fade-in duration-200">
      <Alert variant="warning">
        <Info />
        <AlertDescription>
          <span>
            <strong>Lưu ý:</strong> Nội dung dùng để luyện tập, không phải đề thi chính thức.
          </span>
        </AlertDescription>
      </Alert>

      <Card className="sticky top-16 z-20 py-4 bg-card/90 backdrop-blur-md">
        <CardContent className="px-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-lg font-bold">Đề Thi Mô Phỏng 90 Phút</h1>
            <p className="text-xs text-muted-foreground">
              {answeredCount}/{questions.length} câu đã trả lời
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ExamTimer remainingSec={remainingSec} />
            <Button size="sm" onClick={() => setIsSubmitModalOpen(true)}>
              <Send />
              Nộp bài
            </Button>
          </div>
        </CardContent>
      </Card>

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

          <QuestionPager
            currentIndex={currentIndex}
            total={questions.length}
            onPrev={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            onNext={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
          />
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
