import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import type { MockTestResult } from "../types/progress";
import { getQuestionById } from "../data/questions";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { ModuleScoreChart } from "../components/charts/ModuleScoreChart";
import { formatTime } from "../lib/scoring";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  RotateCcw,
  Home,
  ChevronDown,
  ChevronUp,
  Award,
  Lightbulb,
} from "lucide-react";

export const Result: React.FC = () => {
  const { attemptId } = useParams<{ attemptId: string }>();
  const navigate = useNavigate();
  const { progress } = useProgress();

  const result: MockTestResult | undefined =
    progress.completedMockTests.find((r) => r.id === attemptId) ||
    (() => {
      try {
        const raw = sessionStorage.getItem("last_mock_result");
        return raw ? JSON.parse(raw) : undefined;
      } catch (e) {
        return undefined;
      }
    })();

  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 space-y-4">
        <AlertCircle className="w-12 h-12 text-rose-500" />
        <h2 className="text-xl font-bold text-text-primary">Không tìm thấy kết quả bài thi</h2>
        <Button variant="primary" onClick={() => navigate("/")} icon={<Home className="w-4 h-4" />}>
          Trở về Dashboard
        </Button>
      </div>
    );
  }

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (result.scorePercent / 100) * circumference;

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-color pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
            Kết Quả Bài Thi Mô Phỏng
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Ngày làm bài: {new Date(result.date).toLocaleString("vi-VN")}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/mock-test")}
            icon={<RotateCcw className="w-4 h-4" />}
          >
            Làm đề khác
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate("/review")}
            icon={<XCircle className="w-4 h-4" />}
          >
            Ôn tập các câu sai
          </Button>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-bg-surface to-bg-surface-hover border-border-color p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-around gap-8">
        <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="var(--border)"
              strokeWidth="12"
              fill="transparent"
            />
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="var(--primary)"
              strokeWidth="12"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-extrabold text-text-primary">{result.scorePercent}%</span>
            <span className="text-[11px] text-text-secondary font-medium">Điểm số</span>
          </div>
        </div>

        <div className="space-y-3 max-w-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
            <Award className="w-4 h-4" />
            <span>
              {result.scorePercent >= 80
                ? "Xuất sắc — Đạt ngưỡng đỗ kỳ thi"
                : result.scorePercent >= 60
                ? "Khá — Cần hoàn thiện thêm một số chủ đề"
                : "Cần cố gắng — Hãy tập trung ôn lại câu sai"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
            Trả lời đúng {result.correctCount}/{result.totalQuestions} câu hỏi
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Bạn đã hoàn thành bài thi mô phỏng trong thời gian {formatTime(result.timeUsedSec)}. Dưới đây là phân tích chi tiết kết quả theo từng module và danh sách câu trả lời sai.
          </p>
        </div>
      </Card>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="flex items-center gap-3.5 p-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-text-secondary">Số câu đúng</div>
            <div className="text-lg font-bold text-emerald-500">{result.correctCount} câu</div>
          </div>
        </Card>

        <Card className="flex items-center gap-3.5 p-4">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
            <XCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-text-secondary">Số câu sai</div>
            <div className="text-lg font-bold text-rose-500">{result.incorrectCount} câu</div>
          </div>
        </Card>

        <Card className="flex items-center gap-3.5 p-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-text-secondary">Số câu bỏ trống</div>
            <div className="text-lg font-bold text-amber-500">{result.blankCount} câu</div>
          </div>
        </Card>

        <Card className="flex items-center gap-3.5 p-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-text-secondary">Thời gian dùng</div>
            <div className="text-lg font-bold text-text-primary">{formatTime(result.timeUsedSec)}</div>
          </div>
        </Card>
      </div>

      <Card className="p-6 space-y-4">
        <h2 className="text-lg font-bold text-text-primary border-b border-border-color pb-3">
          Phân tích điểm số theo 4 Module
        </h2>
        <ModuleScoreChart moduleScores={result.moduleScores} />
      </Card>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-text-primary">
          Danh sách câu sai & bỏ trống ({result.incorrectCount + result.blankCount} câu)
        </h2>

        {result.attempts
          .filter((att) => !att.isCorrect)
          .map((att, idx) => {
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
                      <span className="text-rose-500 font-bold">Câu {idx + 1}</span>
                      <span className="text-text-secondary">•</span>
                      <span className="text-text-secondary">{q.moduleName}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary leading-snug">
                      {q.question.replace(/```python[\s\S]*?```/g, "[Mã nguồn Python]")}
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
                        {att.selectedAnswer !== null ? q.options[att.selectedAnswer] : "Chưa chọn (Bỏ trống)"}
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                        <strong className="block text-xs font-bold uppercase mb-1">Đáp án đúng:</strong>
                        {q.options[q.correctAnswer]}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-text-primary space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-300 text-xs">
                        <Lightbulb className="w-4 h-4" /> Lời giải chi tiết:
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed">{q.explanation}</p>
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
