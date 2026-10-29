import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsByModule } from "../data/questions";
import type { ModuleId, Question } from "../types/question";
import { useProgress } from "../context/ProgressContext";
import { selectSmartQuestions, shuffleArray } from "../lib/shuffle";
import { QuestionCard } from "../components/question/QuestionCard";
import { QuestionNavigator } from "../components/question/QuestionNavigator";
import { QuestionPager } from "../components/question/QuestionPager";
import { PageHeader } from "../components/layout/PageHeader";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Info, Eye, EyeOff, Shuffle, RefreshCw, Layers, Sparkles } from "lucide-react";

const BATCH_SIZE = 50;

export const Practice: React.FC = () => {
  const { moduleId } = useParams<{ moduleId?: string }>();
  const { progress, recordAnswer, toggleBookmark } = useProgress();

  const validModuleId: ModuleId | undefined =
    moduleId && ["A", "B", "C", "D"].includes(moduleId.toUpperCase())
      ? (moduleId.toUpperCase() as ModuleId)
      : undefined;

  // Base question pool for the selected module
  const fullModulePool = useMemo(
    () => getQuestionsByModule(validModuleId),
    [validModuleId]
  );

  // Calculate total number of 50-question batches (bài)
  const totalBatches = useMemo(
    () => Math.max(1, Math.ceil(fullModulePool.length / BATCH_SIZE)),
    [fullModulePool]
  );

  // activeBatchIndex: 0..N-1 for fixed batches, or -1 for "50 câu chưa làm"
  const [activeBatchIndex, setActiveBatchIndex] = useState<number>(0);
  const [isShuffled, setIsShuffled] = useState<boolean>(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number | null>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(
    progress.settings.showExplanationImmediately
  );

  // Load questions for the selected batch / mode
  useEffect(() => {
    let currentPool: Question[];

    if (activeBatchIndex === -1) {
      // 50 câu chưa làm ngẫu nhiên
      const answeredSet = new Set(progress.answeredQuestionIds || []);
      currentPool = selectSmartQuestions(fullModulePool, BATCH_SIZE, answeredSet);
    } else {
      // Bài 50 câu cố định (Bài 1, 2, 3...)
      const start = activeBatchIndex * BATCH_SIZE;
      currentPool = fullModulePool.slice(start, start + BATCH_SIZE);
    }

    if (isShuffled) {
      currentPool = shuffleArray(currentPool);
    }

    setQuestions(currentPool);
    setCurrentIndex(0);
    setUserAnswers({});
  }, [validModuleId, activeBatchIndex, isShuffled, fullModulePool]);

  const handleToggleShuffle = () => {
    setIsShuffled((prev) => !prev);
    setCurrentIndex(0);
  };

  const handleReshuffle = () => {
    if (activeBatchIndex === -1) {
      const answeredSet = new Set(progress.answeredQuestionIds || []);
      setQuestions(shuffleArray(selectSmartQuestions(fullModulePool, BATCH_SIZE, answeredSet)));
    } else {
      setQuestions((prev) => shuffleArray(prev));
    }
    setCurrentIndex(0);
  };

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
    <div className="space-y-6 animate-in fade-in duration-200">
      <Alert variant="warning">
        <Info />
        <AlertDescription>
          <span>
            <strong>Lưu ý:</strong> Mỗi bài luyện tập gồm 50 câu hỏi ngẫu nhiên/theo bài. Tất cả các bài cộng lại bao phủ 100% ngân hàng câu hỏi.
          </span>
        </AlertDescription>
      </Alert>

      <PageHeader
        title={
          <span className="flex flex-wrap items-center gap-2.5 text-xl sm:text-2xl font-bold">
            Luyện tập trắc nghiệm {validModuleId ? `Module ${validModuleId}` : "Tất cả Module"}
            {isShuffled && (
              <Badge variant="soft">
                <Shuffle /> Đã tráo ngẫu nhiên
              </Badge>
            )}
          </span>
        }
        description={`Tổng cộng ${fullModulePool.length} câu hỏi · Đang làm ${questions.length} câu trong bài hiện tại.`}
        actions={
          <>
            <Button variant={isShuffled ? "default" : "outline"} size="sm" onClick={handleToggleShuffle}>
              <Shuffle />
              {isShuffled ? "Đang tráo câu hỏi" : "Tráo câu hỏi"}
            </Button>

            {isShuffled && (
              <Button variant="outline" size="sm" onClick={handleReshuffle} title="Tráo lại bài câu hỏi mới">
                <RefreshCw />
                Tráo lại
              </Button>
            )}

            <Button variant="outline" size="sm" onClick={() => setShowExplanation(!showExplanation)}>
              {showExplanation ? <EyeOff /> : <Eye />}
              {showExplanation ? "Ẩn giải thích" : "Bật giải thích"}
            </Button>
          </>
        }
      />

      {/* Batch / Set Selection Bar */}
      <Card className="py-3.5">
        <CardContent className="px-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Layers className="size-4 text-primary shrink-0" />
            <span>Chọn bài luyện tập (50 câu / bài):</span>
          </div>

          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            spacing={2}
            className="flex-wrap"
            value={String(activeBatchIndex)}
            onValueChange={(value) => value && setActiveBatchIndex(Number(value))}
          >
            <ToggleGroupItem
              value="-1"
              className="text-xs font-semibold text-success border-success/20 bg-success/10 hover:bg-success/20 hover:text-success data-[state=on]:bg-success data-[state=on]:text-white"
            >
              <Sparkles />
              50 câu chưa làm
            </ToggleGroupItem>

            {Array.from({ length: totalBatches }).map((_, idx) => {
              const start = idx * BATCH_SIZE + 1;
              const end = Math.min((idx + 1) * BATCH_SIZE, fullModulePool.length);

              return (
                <ToggleGroupItem
                  key={idx}
                  value={String(idx)}
                  className="text-xs font-semibold data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                >
                  Bài {idx + 1} ({start}-{end})
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </CardContent>
      </Card>

      {/* Main Question Interface */}
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

          <QuestionPager
            currentIndex={currentIndex}
            total={questions.length}
            onPrev={handlePrev}
            onNext={handleNext}
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
          />
        </div>
      </div>
    </div>
  );
};
