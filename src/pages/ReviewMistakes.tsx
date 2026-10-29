import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { getQuestionById } from "../data/questions";
import type { Question } from "../types/question";
import { PageHeader } from "../components/layout/PageHeader";
import { FilterBar } from "../components/layout/FilterBar";
import { EmptyState } from "../components/ui/EmptyState";
import { MathText } from "../components/ui/MathText";
import { AnswerOption } from "../components/question/AnswerOption";
import { DifficultyBadge } from "../components/question/DifficultyBadge";
import { ExplanationBox } from "../components/question/ExplanationBox";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CheckCircle2, BookmarkCheck, RotateCcw, Eye, EyeOff } from "lucide-react";

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
    <div className="space-y-8 animate-in fade-in duration-200">
      <PageHeader
        title={`Ôn Lại Câu Sai (${mistakeQuestions.length} câu)`}
        description={`Xem lại các câu hỏi bạn từng làm sai, làm lại trắc nghiệm hoặc đánh dấu "Đã nhớ" để hoàn thành.`}
        actions={
          <Button variant="outline" size="sm" onClick={() => navigate("/practice")}>
            <RotateCcw />
            Luyện tập tiếp
          </Button>
        }
      />

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
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            searchPlaceholder="Tìm kiếm nội dung câu sai..."
            options={["ALL", "A", "B", "C", "D"].map((mod) => ({
              value: mod,
              label: mod === "ALL" ? `Tất cả (${mistakeQuestions.length})` : `Module ${mod}`,
            }))}
            selected={selectedModule}
            onSelectedChange={setSelectedModule}
          />

          <div className="space-y-6">
            {filteredMistakes.map((q, qIdx) => {
              const isRevealed = revealedIds.includes(q.id);
              const selectedAns = userAnswers[q.id] ?? null;
              const isAnswered = selectedAns !== null || isRevealed;

              return (
                <Card key={q.id}>
                  <CardHeader className="border-b">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-destructive">Câu sai #{qIdx + 1}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-xs font-semibold text-muted-foreground">{q.moduleName}</span>
                      <span className="text-muted-foreground">•</span>
                      <DifficultyBadge difficulty={q.difficulty} />
                    </div>
                    <CardAction>
                      <Button variant="outline" size="sm" onClick={() => markAsMastered(q.id)}>
                        <BookmarkCheck className="text-success" />
                        Đánh dấu "Đã nhớ"
                      </Button>
                    </CardAction>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    <h3 className="text-base sm:text-lg font-semibold leading-relaxed">
                      <MathText text={q.question} />
                    </h3>

                    <div className="space-y-2.5">
                      {q.options.map((optText, optIdx) => (
                        <AnswerOption
                          key={optIdx}
                          index={optIdx}
                          optionText={optText}
                          isSelected={selectedAns === optIdx}
                          isSubmitted={isAnswered}
                          isCorrect={optIdx === q.correctAnswer}
                          showResult={isAnswered}
                          onSelect={() => handleRetryAnswer(q, optIdx)}
                        />
                      ))}
                    </div>

                    {isAnswered && <ExplanationBox explanation={q.explanation} />}
                  </CardContent>

                  <CardFooter>
                    <Button variant="ghost" size="sm" onClick={() => toggleReveal(q.id)}>
                      {isRevealed ? <EyeOff /> : <Eye />}
                      {isRevealed ? "Ẩn giải thích" : "Xem lời giải chi tiết"}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
