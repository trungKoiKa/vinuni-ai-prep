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
      <div className={cn("p-3 rounded-xl", iconClassName)}>
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

  return (
    <div className="space-y-8 animate-in fade-in duration-200 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="rounded-xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/20 text-white p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-around gap-8 shadow-sm">
        <div className="space-y-3 max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
            <Trophy className="size-4" />
            <span>Kết Quả Bài Thi Mô Phỏng 90 Phút</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {result.scorePercent >= 70 ? "Chúc mừng bạn đã ĐẠT!" : "Cố gắng hơn ở lần sau!"}
          </h1>
          <p className="text-slate-200 text-sm leading-relaxed">
            Bạn đã hoàn thành bài thi với điểm số <strong>{result.scorePercent}%</strong>. Hãy xem lại các câu sai bên dưới để củng cố kiến thức.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
            <Button className="bg-brand hover:bg-brand/90 text-white" onClick={() => navigate("/mock-test")}>
              <RotateCcw />
              Làm lại bài thi
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white hover:text-white border-white/30 dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/30"
              onClick={() => navigate("/review")}
            >
              <BookOpen />
              Ôn lại câu sai
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 size-44 shrink-0 shadow-2xl">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Điểm số</span>
          <span className="text-5xl font-black text-amber-300 my-1">{result.scorePercent}%</span>
          <span className="text-xs font-medium text-slate-300">
            {result.correctCount}/{result.totalQuestions} câu đúng
          </span>
        </div>
      </div>

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
