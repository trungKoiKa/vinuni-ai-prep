import React, { useState } from "react";
import { useProgress } from "../context/ProgressContext";
import { getQuestionById } from "../data/questions";
import type { Question } from "../types/question";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { EmptyState } from "../components/ui/EmptyState";
import { ExplanationBox } from "../components/question/ExplanationBox";
import {
  CheckCircle2,
  BookmarkCheck,
  RotateCcw,
  Search,
  Check,
  Eye,
  EyeOff,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ReviewMistakes: React.FC = () => {
  const { progress, markAsMastered, recordAnswer } = useProgress();
  const navigate = useNavigate();

  const [selectedModule, setSelectedModule] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [revealedIds, setRevealedIds] = useState<string[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, number | null>>({});

  const mistakeQuestions: Question[] = progress.incorrectQuestionIds
    .map((id) => getQuestionById(id))
    .filter((q): q is Question => q !== undefined);

  const filteredMistakes = mistakeQuestions.filter((q) => {
    if (selectedModule !== "ALL" && q.module !== selectedModule) return false;
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      const matchQuestion = q.question.toLowerCase().includes(query);
      const matchTopic = q.topic.toLowerCase().includes(query);
      if (!matchQuestion && !matchTopic) return false;
    }
    return true;
  });

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRetryAnswer = (question: Question, optionIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [question.id]: optionIdx }));
    const isCorrect = optionIdx === question.correctAnswer;
    recordAnswer(question.id, isCorrect);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-color pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
            Ôn Lại Câu Sai ({mistakeQuestions.length} câu)
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Xem lại các câu hỏi bạn từng làm sai, làm lại trắc nghiệm hoặc đánh dấu "Đã nhớ" để hoàn thành.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/practice")}
            icon={<RotateCcw className="w-4 h-4" />}
          >
            Luyện tập tiếp
          </Button>
        </div>
      </div>

      {mistakeQuestions.length === 0 ? (
        <EmptyState
          icon={CheckCircle2}
          title="Tuyệt vời! Bạn không có câu sai nào"
          description="Tất cả các câu hỏi bạn từng làm đều đạt kết quả chính xác hoặc đã được đánh dấu ghi nhớ thành công."
          actionText="Vào Đề Mô Phỏng 90 phút"
          onAction={() => navigate("/mock-test")}
        />
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-bg-surface border border-border-color">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                placeholder="Tìm kiếm nội dung câu sai..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-border-color bg-bg-surface-hover text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto">
              {["ALL", "A", "B", "C", "D"].map((mod) => (
                <button
                  key={mod}
                  onClick={() => setSelectedModule(mod)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
                    selectedModule === mod
                      ? "bg-primary text-white border-primary"
                      : "bg-bg-surface-hover text-text-secondary border-border-color"
                  }`}
                >
                  {mod === "ALL" ? `Tất cả (${mistakeQuestions.length})` : `Module ${mod}`}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredMistakes.map((q, qIdx) => {
              const isRevealed = revealedIds.includes(q.id);
              const selectedAns = userAnswers[q.id] ?? null;

              return (
                <Card key={q.id} className="p-6 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-color pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-rose-500">
                        Câu sai #{qIdx + 1}
                      </span>
                      <span className="text-text-secondary">•</span>
                      <span className="text-xs font-semibold text-text-secondary">
                        {q.moduleName}
                      </span>
                      <span className="text-text-secondary">•</span>
                      <Badge difficulty={q.difficulty} />
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => markAsMastered(q.id)}
                      icon={<BookmarkCheck className="w-4 h-4 text-emerald-500" />}
                    >
                      Đánh dấu "Đã nhớ"
                    </Button>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-text-primary leading-relaxed">
                    {q.question.replace(/```python[\s\S]*?```/g, "[Mã nguồn Python]")}
                  </h3>

                  <div className="space-y-2.5">
                    {q.options.map((optText, optIdx) => {
                      const isCorrect = optIdx === q.correctAnswer;
                      const isChosen = selectedAns === optIdx;

                      let style = "border-border-color bg-bg-surface hover:bg-bg-surface-hover";
                      if (selectedAns !== null || isRevealed) {
                        if (isCorrect) {
                          style = "border-emerald-500 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100 font-medium";
                        } else if (isChosen && !isCorrect) {
                          style = "border-rose-500 bg-rose-500/10 text-rose-950 dark:text-rose-100 font-medium";
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleRetryAnswer(q, optIdx)}
                          disabled={selectedAns !== null || isRevealed}
                          className={`w-full text-left p-3.5 rounded-xl border text-sm flex items-center justify-between transition-colors ${style}`}
                        >
                          <span>{optText}</span>
                          {(selectedAns !== null || isRevealed) && isCorrect && (
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                              <Check className="w-4 h-4" /> Đáp án đúng
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleReveal(q.id)}
                      icon={isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    >
                      {isRevealed ? "Ẩn giải thích" : "Xem lời giải chi tiết"}
                    </Button>
                  </div>

                  {(isRevealed || selectedAns !== null) && (
                    <ExplanationBox explanation={q.explanation} />
                  )}
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
