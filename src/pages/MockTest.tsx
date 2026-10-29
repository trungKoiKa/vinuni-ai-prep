import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { allQuestions } from "../data/questions";
import type { Question } from "../types/question";
import type { MockTestResult, QuestionAttempt, UserProgress } from "../types/progress";
import { generateMockTest100 } from "../lib/shuffle";
import { calculateTestScore, formatTime } from "../lib/scoring";
import { getOptionOrders, mockSessionStore, resolveQuestions, type AnswerMap, type MockSession } from "../lib/sessionStore";
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Info, Play, RotateCcw, Send } from "lucide-react";

interface ActiveExam {
  session: MockSession;
  questions: Question[];
}

function loadSavedExam(): ActiveExam | null {
  const session = mockSessionStore.get();
  if (!session) return null;
  const questions = resolveQuestions(session.questionIds, session.optionOrders);
  if (!questions) {
    mockSessionStore.clear();
    return null;
  }
  return { session, questions };
}

function createExam(progress: UserProgress): ActiveExam {
  const questions = generateMockTest100(allQuestions, progress);
  const now = Date.now();
  const session: MockSession = {
    id: "attempt_" + now,
    questionIds: questions.map((q) => q.id),
    optionOrders: getOptionOrders(questions),
    answers: {},
    currentIndex: 0,
    startedAt: now,
    endsAt: now + (progress.settings.mockTestDurationMin || 90) * 60 * 1000,
  };
  mockSessionStore.set(session);
  return { session, questions };
}

export const MockTest: React.FC = () => {
  const { progress } = useProgress();
  const [savedExam, setSavedExam] = useState<ActiveExam | null>(loadSavedExam);
  // No unfinished exam: start a fresh one straight away, as before.
  const [activeExam, setActiveExam] = useState<ActiveExam | null>(() =>
    savedExam ? null : createExam(progress)
  );

  const startNewExam = () => {
    setSavedExam(null);
    setActiveExam(createExam(progress));
  };

  if (activeExam) {
    return <ExamSession key={activeExam.session.id} {...activeExam} />;
  }

  if (!savedExam) return null;

  const { session } = savedExam;
  const answeredCount = Object.values(session.answers).filter((v) => v !== null && v !== undefined).length;
  const remainingSec = Math.max(0, Math.ceil((session.endsAt - Date.now()) / 1000));

  return (
    <div className="max-w-xl mx-auto py-8 animate-in fade-in duration-200">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <History className="size-5 text-primary" />
            Bạn có bài thi đang làm dở
          </CardTitle>
          <CardDescription>
            Bắt đầu lúc {new Date(session.startedAt).toLocaleString("vi-VN")}.
          </CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-3 text-center">
          <div className="p-3 rounded-md bg-muted border">
            <div className="text-xs text-muted-foreground">Đã trả lời</div>
            <div className="text-lg font-bold mt-1">
              {answeredCount}/{session.questionIds.length}
            </div>
          </div>
          <div className="p-3 rounded-md bg-muted border">
            <div className="text-xs text-muted-foreground">Thời gian còn lại</div>
            <div className="text-lg font-bold font-mono mt-1">
              {remainingSec > 0 ? formatTime(remainingSec) : "Hết giờ"}
            </div>
          </div>
          {remainingSec === 0 && (
            <p className="col-span-2 text-xs text-muted-foreground text-left">
              Bài thi đã hết giờ trong lúc bạn rời đi. Tiếp tục sẽ nộp bài với các đáp án đã lưu.
            </p>
          )}
        </CardContent>

        <CardFooter className="flex flex-wrap justify-end gap-3">
          <Button variant="outline" onClick={startNewExam}>
            <RotateCcw />
            Bỏ bài cũ, làm đề mới
          </Button>
          <Button onClick={() => setActiveExam(savedExam)}>
            <Play />
            {remainingSec > 0 ? "Tiếp tục làm bài" : "Nộp bài đã lưu"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const ExamSession: React.FC<ActiveExam> = ({ session, questions }) => {
  const navigate = useNavigate();
  const { progress, addMockTestResult, toggleBookmark } = useProgress();

  const [currentIndex, setCurrentIndex] = useState<number>(session.currentIndex);
  const [userAnswers, setUserAnswers] = useState<AnswerMap>(session.answers);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);

  // Save every answer and page change so a reload can resume here.
  useEffect(() => {
    if (isExamSubmitted) return;
    mockSessionStore.set({ ...session, answers: userAnswers, currentIndex });
  }, [session, userAnswers, currentIndex, isExamSubmitted]);

  const handleSubmitExam = useCallback(() => {
    if (isExamSubmitted) return;
    setIsExamSubmitted(true);
    mockSessionStore.clear();

    const timeUsedSec = Math.max(1, Math.floor((Math.min(Date.now(), session.endsAt) - session.startedAt) / 1000));
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

    const result: MockTestResult = {
      id: session.id,
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

    navigate(`/result/${session.id}`);
  }, [isExamSubmitted, session, questions, userAnswers, addMockTestResult, navigate]);

  const handleTimerExpire = useCallback(() => {
    toast.error("Đã hết thời gian làm bài! Hệ thống tự động nộp bài thi.");
    handleSubmitExam();
  }, [handleSubmitExam]);

  const handle10MinWarning = useCallback(() => {
    toast.warning("Cảnh báo: Bạn còn 10 phút để hoàn thành bài thi!");
  }, []);

  const handle5MinWarning = useCallback(() => {
    toast.error("Cảnh báo khẩn cấp: Bạn chỉ còn 5 phút nữa!");
  }, []);

  const { remainingSec } = useTimer({
    initialSeconds: Math.max(0, Math.ceil((session.endsAt - Date.now()) / 1000)),
    onExpire: handleTimerExpire,
    onTick10Min: handle10MinWarning,
    onTick5Min: handle5MinWarning,
    autoStart: true,
  });

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
            <strong>Lưu ý:</strong> Nội dung dùng để luyện tập, không phải đề thi chính thức. Bài làm được lưu tự động, bạn có thể quay lại làm tiếp.
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
            questionIds={session.questionIds}
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
