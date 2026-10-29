import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { cn } from "cn";
import { getQuestionById } from "../data/questions";
import type { MockTestResult } from "../types/progress";
import { MathText } from "../components/ui/MathText";
import { ExplanationBox } from "../components/question/ExplanationBox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Trophy,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  RotateCcw,
  BookOpen,
  ChevronDown,
} from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  iconClassName: string;
  label: string;
  value: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon: Icon, iconClassName, label, value }) => (
  <Card className="py-4">
    <CardContent className="px-4 flex items-center gap-3">
      <div className={cn("p-3 rounded-md", iconClassName)}>
        <Icon className="size-6" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground font-medium">{label}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </CardContent>
  </Card>
);

export const Result: React.FC = () => {
  const { attemptId } = useParams<{ attemptId: string }>();
  const navigate = useNavigate();

  // Retrieve result from sessionStorage or Context
  const rawSaved = sessionStorage.getItem("last_mock_result");
  const result: MockTestResult | null = rawSaved ? JSON.parse(rawSaved) : null;

  if (!result || (attemptId && result.id !== attemptId)) {
    return (
      <div className="text-center py-16 space-y-4">
        <h2 className="text-xl font-bold">Không tìm thấy kết quả bài thi</h2>
        <Button onClick={() => navigate("/mock-test")}>Quay lại Đề Thi Mô Phỏng</Button>
      </div>
    );
  }

  const minutesUsed = Math.floor(result.timeUsedSec / 60);
  const secondsUsed = result.timeUsedSec % 60;
  const passed = result.scorePercent >= 70;

  return (
    <div className="space-y-8 animate-in fade-in duration-200 max-w-5xl mx-auto">
      {/* Header Banner */}
      <Card className="py-0 gap-0 overflow-hidden">
        <CardContent className="p-0 grid sm:grid-cols-[1fr_auto]">
          <div className="p-6 sm:p-8 space-y-3 border-l-4 border-primary">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <Trophy className="size-4" />
              Kết quả bài thi mô phỏng 90 phút
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {passed ? "Chúc mừng bạn đã ĐẠT!" : "Cố gắng hơn ở lần sau!"}
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Bạn đã hoàn thành bài thi với điểm số <strong className="text-foreground">{result.scorePercent}%</strong>. Hãy xem lại các câu sai bên dưới để củng cố kiến thức.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button onClick={() => navigate("/mock-test")}>
                <RotateCcw />
                Làm lại bài thi
              </Button>
              <Button variant="outline" onClick={() => navigate("/review")}>
                <BookOpen />
                Ôn lại câu sai
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 p-6 sm:px-10 bg-muted border-t sm:border-t-0 sm:border-l">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Điểm số</span>
            <span className={cn("text-6xl font-extrabold tabular-nums", passed ? "text-success" : "text-destructive")}>
              {result.scorePercent}%
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {result.correctCount}/{result.totalQuestions} câu đúng
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Summary Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard icon={CheckCircle2} iconClassName="bg-success/10 text-success" label="Câu đúng" value={result.correctCount} />
        <MetricCard icon={XCircle} iconClassName="bg-destructive/10 text-destructive" label="Câu sai" value={result.incorrectCount} />
        <MetricCard icon={HelpCircle} iconClassName="bg-warning/10 text-warning" label="Bỏ trống" value={result.blankCount} />
        <MetricCard
          icon={Clock}
          iconClassName="bg-primary/10 text-primary"
          label="Thời gian làm"
          value={`${minutesUsed}m ${secondsUsed}s`}
        />
      </div>

      {/* Detailed Question Review List */}
      <div className="space-y-4 pt-4 border-t">
        <h2 className="text-xl font-bold">Chi tiết các câu hỏi trong bài thi</h2>

        {result.attempts.map((att, idx) => {
          const q = getQuestionById(att.questionId);
          if (!q) return null;

          return (
            <Collapsible key={q.id} asChild>
              <Card className="py-5 gap-0">
                <CardContent className="px-5">
                  <CollapsibleTrigger className="group w-full flex items-start justify-between gap-4 text-left rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <span className={cn("font-bold", att.isCorrect ? "text-success" : "text-destructive")}>
                          Câu {idx + 1} ({att.isCorrect ? "Đúng" : "Sai"})
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{q.moduleName}</span>
                      </div>
                      <h3 className="text-sm font-semibold leading-snug">
                        <MathText text={q.question} />
                      </h3>
                    </div>

                    <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>

                  <CollapsibleContent className="mt-4 pt-4 border-t space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div
                        className={cn(
                          "p-3 rounded-lg border",
                          att.isCorrect
                            ? "bg-success/10 border-success/20 text-success"
                            : "bg-destructive/10 border-destructive/20 text-destructive"
                        )}
                      >
                        <strong className="block text-xs font-bold uppercase mb-1">Đáp án bạn chọn:</strong>
                        {att.selectedAnswer !== null ? (
                          <MathText text={q.options[att.selectedAnswer]} />
                        ) : (
                          "Chưa chọn (Bỏ trống)"
                        )}
                      </div>

                      <div className="p-3 rounded-lg bg-success/10 border border-success/20 text-success">
                        <strong className="block text-xs font-bold uppercase mb-1">Đáp án đúng:</strong>
                        <MathText text={q.options[q.correctAnswer]} />
                      </div>
                    </div>

                    <ExplanationBox explanation={q.explanation} />
                  </CollapsibleContent>
                </CardContent>
              </Card>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};
