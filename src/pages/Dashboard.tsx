import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { ProgressBar } from "../components/ui/ProgressBar";
import { ScoreTrendChart } from "../components/charts/ScoreTrendChart";
import { modulesData } from "../data/modules";
import { allQuestions } from "../data/questions";
import { formatTimeInHoursAndMins } from "../lib/scoring";
import {
  CheckCircle2,
  XCircle,
  BookmarkCheck,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  RotateCcw,
  PenTool,
  Info,
} from "lucide-react";

export const Dashboard: React.FC = () => {
  const { progress } = useProgress();
  const navigate = useNavigate();

  const answeredCount = progress.answeredQuestionIds.length;
  const incorrectCount = progress.incorrectQuestionIds.length;
  const masteredCount = progress.masteredQuestionIds.length;
  const mockCount = progress.completedMockTests.length;
  const totalQuestions = allQuestions.length;

  const highestScore = progress.completedMockTests.reduce(
    (max, r) => Math.max(max, r.scorePercent),
    0
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-medium">
        <Info className="w-5 h-5 shrink-0" />
        <span>
          <strong>Lưu ý quan trọng:</strong> Nội dung dùng để luyện tập, không phải đề thi chính thức.
        </span>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-500/20">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-indigo-200 border border-indigo-400/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Chương trình AI Thực chiến — VinUni / Vingroup</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Sẵn sàng chinh phục vòng đánh giá năng lực AI
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Hệ thống ôn luyện trắc nghiệm 4 module trọng tâm, thi thử 90 phút theo chuẩn cấu hình thực tế và theo dõi tiến độ học tập thông minh.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate("/mock-test")}
              icon={<Clock className="w-5 h-5" />}
            >
              Thi thử ngay (90 phút)
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              onClick={() => navigate("/practice")}
              icon={<PenTool className="w-5 h-5" />}
            >
              Luyện tập theo Module
            </Button>
          </div>
        </div>

        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="flex flex-col justify-between">
          <div className="text-xs text-text-secondary font-medium">Đã trả lời</div>
          <div className="mt-2 text-2xl font-bold text-text-primary">
            {answeredCount}
            <span className="text-xs font-normal text-text-secondary">/{totalQuestions}</span>
          </div>
          <div className="mt-1 text-[11px] text-emerald-500 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{Math.round((answeredCount / totalQuestions) * 100)}% tổng số</span>
          </div>
        </Card>

        <Card className="flex flex-col justify-between">
          <div className="text-xs text-text-secondary font-medium">Câu sai cần ôn</div>
          <div className="mt-2 text-2xl font-bold text-rose-500">{incorrectCount}</div>
          <div className="mt-1 text-[11px] text-text-secondary flex items-center gap-1">
            <XCircle className="w-3.5 h-3.5 text-rose-500" />
            <span>Xem ở Ôn lại câu sai</span>
          </div>
        </Card>

        <Card className="flex flex-col justify-between">
          <div className="text-xs text-text-secondary font-medium">Đã ghi nhớ</div>
          <div className="mt-2 text-2xl font-bold text-emerald-500">{masteredCount}</div>
          <div className="mt-1 text-[11px] text-emerald-500 font-medium flex items-center gap-1">
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>Hoàn thành ghi nhớ</span>
          </div>
        </Card>

        <Card className="flex flex-col justify-between">
          <div className="text-xs text-text-secondary font-medium">Số bài thi thử</div>
          <div className="mt-2 text-2xl font-bold text-primary">{mockCount}</div>
          <div className="mt-1 text-[11px] text-text-secondary">Đã hoàn thành</div>
        </Card>

        <Card className="flex flex-col justify-between">
          <div className="text-xs text-text-secondary font-medium">Điểm cao nhất</div>
          <div className="mt-2 text-2xl font-bold text-amber-500">
            {highestScore}%
          </div>
          <div className="mt-1 text-[11px] text-text-secondary flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Đề mô phỏng</span>
          </div>
        </Card>

        <Card className="flex flex-col justify-between">
          <div className="text-xs text-text-secondary font-medium">Thời gian ôn</div>
          <div className="mt-2 text-lg font-bold text-text-primary">
            {formatTimeInHoursAndMins(progress.totalStudyTimeSec)}
          </div>
          <div className="mt-1 text-[11px] text-text-secondary flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Tích lũy</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="space-y-5">
          <div className="flex items-center justify-between border-b border-border-color pb-3">
            <h2 className="text-lg font-bold text-text-primary">Tiến độ 4 Module</h2>
            <Link
              to="/modules"
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
            >
              Chi tiết <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {modulesData.map((mod) => {
              const modQuestions = allQuestions.filter((q) => q.module === mod.id);
              const answeredMod = modQuestions.filter((q) =>
                progress.answeredQuestionIds.includes(q.id)
              ).length;
              const percent = Math.round((answeredMod / modQuestions.length) * 100);

              return (
                <div key={mod.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-text-primary">
                      {mod.code}: {mod.name}
                    </span>
                    <span className="text-text-secondary">
                      {answeredMod}/{modQuestions.length} câu
                    </span>
                  </div>
                  <ProgressBar percent={percent} height="h-2" />
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="space-y-5">
          <div className="flex items-center justify-between border-b border-border-color pb-3">
            <h2 className="text-lg font-bold text-text-primary">Xu hướng điểm thi mô phỏng</h2>
            <span className="text-xs text-text-secondary">Gần đây</span>
          </div>
          <ScoreTrendChart results={progress.completedMockTests} />
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card
          hoverEffect
          onClick={() => navigate("/practice")}
          className="flex items-center gap-4 p-5"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <PenTool className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-text-primary">Luyện tập trắc nghiệm</h3>
            <p className="text-xs text-text-secondary mt-0.5">Làm câu hỏi theo module & xem giải thích ngay</p>
          </div>
        </Card>

        <Card
          hoverEffect
          onClick={() => navigate("/mock-test")}
          className="flex items-center gap-4 p-5"
        >
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-text-primary">Đề mô phỏng 90 phút</h3>
            <p className="text-xs text-text-secondary mt-0.5">Tự động xáo trộn câu hỏi, tính giờ như thi thật</p>
          </div>
        </Card>

        <Card
          hoverEffect
          onClick={() => navigate("/review")}
          className="flex items-center gap-4 p-5"
        >
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0">
            <RotateCcw className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-text-primary">Ôn lại {incorrectCount} câu sai</h3>
            <p className="text-xs text-text-secondary mt-0.5">Xem lại lỗi sai & đánh dấu đã ghi nhớ</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
