import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsByModule } from "../data/questions";
import type { ModuleId, Question } from "../types/question";
import { useProgress } from "../context/ProgressContext";
import { selectSmartQuestions, shuffleArray } from "../lib/shuffle";
import { QuestionCard } from "../components/question/QuestionCard";
import { QuestionNavigator } from "../components/question/QuestionNavigator";
import { Button } from "../components/ui/Button";
import { Info, ArrowLeft, ArrowRight, Eye, EyeOff, Shuffle, RefreshCw, Layers, Sparkles } from "lucide-react";

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

  // Calculate total number of 50-question batches
  const totalBatches = useMemo(
    () => Math.max(1, Math.ceil(fullModulePool.length / BATCH_SIZE)),
    [fullModulePool]
  );

  // activeBatchIndex: 0..N-1 for fixed batches, or -1 for "50 câu chưa làm"
  const [activeBatchIndex, setActiveBatchIndex] = useState<number>(0);
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
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
      // Đợt 50 câu cố định (Đợt 1, 2, 3...)
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
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-medium">
        <Info className="w-5 h-5 shrink-0" />
        <span>
          <strong>Lưu ý:</strong> Mỗi đợt luyện tập gồm 50 câu hỏi ngẫu nhiên/theo đợt. Tất cả các đợt cộng lại bao phủ 100% ngân hàng câu hỏi.
        </span>
      </div>

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-color pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl sm:text-2xl font-bold text-text-primary">
              Luyện tập trắc nghiệm {validModuleId ? `Module ${validModuleId}` : "Tất cả Module"}
            </h1>
            {isShuffled && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                <Shuffle className="w-3 h-3" /> Đã tráo ngẫu nhiên
              </span>
            )}
          </div>
          <p className="text-xs text-text-secondary mt-0.5">
            Tổng cộng {fullModulePool.length} câu hỏi · Đang làm {questions.length} câu trong đợt hiện tại.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={isShuffled ? "primary" : "outline"}
            size="sm"
            onClick={handleToggleShuffle}
            icon={<Shuffle className="w-4 h-4" />}
          >
            {isShuffled ? "Đang tráo câu hỏi" : "Tráo câu hỏi"}
          </Button>

          {isShuffled && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleReshuffle}
              icon={<RefreshCw className="w-4 h-4" />}
              title="Tráo lại đợt câu hỏi mới"
            >
              Tráo lại
            </Button>
          )}

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

      {/* Batch / Set Selection Bar */}
      <div className="p-3.5 rounded-2xl bg-bg-surface border border-border-color flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
          <Layers className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>Chọn đợt luyện tập (50 câu / đợt):</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveBatchIndex(-1)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeBatchIndex === -1
                ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            50 câu chưa làm
          </button>

          {Array.from({ length: totalBatches }).map((_, idx) => {
            const start = idx * BATCH_SIZE + 1;
            const end = Math.min((idx + 1) * BATCH_SIZE, fullModulePool.length);
            const isSelected = activeBatchIndex === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveBatchIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "bg-bg-base text-text-secondary hover:text-text-primary hover:bg-border-color/50 border border-border-color"
                }`}
              >
                Đợt {idx + 1} ({start}-{end})
              </button>
            );
          })}
        </div>
      </div>

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
              Câu {currentIndex + 1} / {questions.length}
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
