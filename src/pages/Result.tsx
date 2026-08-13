import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuestionById } from "../data/questions";
import type { MockTestResult } from "../types/progress";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { MathText } from "../components/ui/MathText";
import {
  Trophy,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  RotateCcw,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Lightbulb,
} from "lucide-react";

export const Result: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  // Retrieve result from sessionStorage or Context
  const rawSaved = sessionStorage.getItem("last_mock_result");
  const result: MockTestResult | null = rawSaved ? JSON.parse(rawSaved) : null;

  if (!result || (id && result.id !== id)) {
    return (
      <div className="text-center py-16 space-y-4">
        <h2 className="text-xl font-bold text-text-primary">Không tìm thấy kết quả bài thi</h2>
        <Button onClick={() => navigate("/mock-test")}>Quay lại Đề Thi Mô Phỏng</Button>
      </div>
    );
  }

  const minutesUsed = Math.floor(result.timeUsedSec / 60);
  const secondsUsed = result.timeUsedSec % 60;

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Header Banner */}
      <Card className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-indigo-500/20 text-white p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-around gap-8">
        <div className="space-y-3 max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
            <Trophy className="w-4 h-4" />
            <span>Kết Quả Bài Thi Mô Phỏng 90 Phút</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {result.scorePercent >= 70 ? "Chúc mừng bạn đã ĐẠT!" : "Cố gắng hơn ở lần sau!"}
          </h1>
          <p className="text-slate-200 text-sm leading-relaxed">
            Bạn đã hoàn thành bài thi với điểm số <strong>{result.scorePercent}%</strong>. Hãy xem lại các câu sai bên dưới để củng cố kiến thức.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
            <Button
              variant="secondary"
              size="md"
              onClick={() => navigate("/mock-test")}
              icon={<RotateCcw className="w-4 h-4" />}
            >
              Làm lại bài thi
            </Button>
            <Button
              variant="outline"
              size="md"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              onClick={() => navigate("/review-mistakes")}
              icon={<BookOpen className="w-4 h-4" />}
            >
              Ôn lại câu sai
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 w-44 h-44 shrink-0 shadow-2xl">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Điểm số</span>
          <span className="text-5xl font-black text-amber-300 my-1">{result.scorePercent}%</span>
          <span className="text-xs font-medium text-slate-300">
            {result.correctCount}/{result.totalQuestions} câu đúng
          </span>
        </div>
      </Card>

      {/* Summary Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4 flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-text-secondary font-medium">Câu đúng</div>
            <div className="text-xl font-bold text-text-primary">{result.correctCount}</div>
          </div>
        </Card>

        <Card className="p-4 flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500">
            <XCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-text-secondary font-medium">Câu sai</div>
            <div className="text-xl font-bold text-text-primary">{result.incorrectCount}</div>
          </div>
        </Card>

        <Card className="p-4 flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-text-secondary font-medium">Bỏ trống</div>
            <div className="text-xl font-bold text-text-primary">{result.blankCount}</div>
          </div>
        </Card>

        <Card className="p-4 flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-text-secondary font-medium">Thời gian làm</div>
            <div className="text-xl font-bold text-text-primary">
              {minutesUsed}m {secondsUsed}s
            </div>
          </div>
        </Card>
      </div>

      {/* Detailed Question Review List */}
      <div className="space-y-4 pt-4 border-t border-border-color">
        <h2 className="text-xl font-bold text-text-primary">Chi tiết các câu hỏi trong bài thi</h2>

        {result.attempts.map((att, idx) => {
          const q = getQuestionById(att.questionId);
          if (!q) return null;

          const isExpanded = expandedQuestionId === q.id;

          return (
            <Card key={q.id} className="p-5 space-y-3">
              <div
                onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                className="flex items-start justify-between cursor-pointer gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span className={att.isCorrect ? "text-emerald-500 font-bold" : "text-rose-500 font-bold"}>
                      Câu {idx + 1} ({att.isCorrect ? "Đúng" : "Sai"})
                    </span>
                    <span className="text-text-secondary">•</span>
                    <span className="text-text-secondary">{q.moduleName}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary leading-snug">
                    <MathText text={q.question} />
                  </h3>
                </div>

                <button className="p-1 rounded-lg hover:bg-bg-surface-hover text-text-secondary shrink-0">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {isExpanded && (
                <div className="pt-4 border-t border-border-color space-y-4 text-xs sm:text-sm animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-300">
                      <strong className="block text-xs font-bold uppercase mb-1">Đáp án bạn chọn:</strong>
                      {att.selectedAnswer !== null ? (
                        <MathText text={q.options[att.selectedAnswer]} />
                      ) : (
                        "Chưa chọn (Bỏ trống)"
                      )}
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                      <strong className="block text-xs font-bold uppercase mb-1">Đáp án đúng:</strong>
                      <MathText text={q.options[q.correctAnswer]} />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-text-primary space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-300 text-xs">
                      <Lightbulb className="w-4 h-4" /> Lời giải chi tiết:
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <MathText text={q.explanation} />
                    </div>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};
