import React from "react";
import { Link, useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { cn } from "cn";
import { useProgress } from "../context/ProgressContext";
import { ScoreTrendChart } from "../components/charts/ScoreTrendChart";
import { modulesData } from "../data/modules";
import { allQuestions } from "../data/questions";
import { formatTimeInHoursAndMins } from "../lib/scoring";
import { progressColor } from "../lib/progressColor";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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

interface StatTileProps {
  label: string;
  value: React.ReactNode;
  valueClassName?: string;
  footer: React.ReactNode;
  footerClassName?: string;
}

const StatTile: React.FC<StatTileProps> = ({ label, value, valueClassName, footer, footerClassName }) => (
  <Card className="py-5 gap-0">
    <CardContent className="px-5 flex flex-col justify-between h-full">
      <div className="text-xs text-muted-foreground font-medium">{label}</div>
      <div className={cn("mt-2 text-2xl font-bold", valueClassName)}>{value}</div>
      <div
        className={cn(
          "mt-1 text-[11px] text-muted-foreground flex items-center gap-1 [&>svg]:size-3.5",
          footerClassName
        )}
      >
        {footer}
      </div>
    </CardContent>
  </Card>
);

interface QuickLinkProps {
  to: string;
  icon: LucideIcon;
  iconClassName: string;
  title: string;
  description: string;
}

const QuickLink: React.FC<QuickLinkProps> = ({ to, icon: Icon, iconClassName, title, description }) => (
  <Link to={to} className="group rounded-xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
    <Card className="py-5 h-full transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:shadow-md">
      <CardContent className="px-5 flex items-center gap-4">
        <div className={cn("size-12 rounded-xl flex items-center justify-center shrink-0", iconClassName)}>
          <Icon className="size-6" />
        </div>
        <div>
          <h3 className="font-bold text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
      </CardContent>
    </Card>
  </Link>
);

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
    <div className="space-y-8 animate-in fade-in duration-200">
      <Alert variant="warning">
        <Info />
        <AlertDescription>
          <span>
            <strong>Lưu ý quan trọng:</strong> Nội dung dùng để luyện tập, không phải đề thi chính thức.
          </span>
        </AlertDescription>
      </Alert>

      <div className="relative overflow-hidden bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-500/20">
        <div className="relative z-10 max-w-2xl space-y-4">
          <Badge className="px-3 py-1 gap-2 bg-white/10 backdrop-blur-md text-indigo-200 border-indigo-400/20 [&>svg]:size-3.5">
            <Sparkles className="text-amber-300" />
            Chương trình AI Thực chiến — VinUni / Vingroup
          </Badge>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Sẵn sàng chinh phục vòng đánh giá năng lực AI
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Hệ thống ôn luyện trắc nghiệm 4 module trọng tâm, thi thử 90 phút theo chuẩn cấu hình thực tế và theo dõi tiến độ học tập thông minh.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="bg-brand hover:bg-brand/90 text-white" onClick={() => navigate("/mock-test")}>
              <Clock className="size-5" />
              Thi thử ngay (90 phút)
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white hover:text-white border-white/30 dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/30"
              onClick={() => navigate("/practice")}
            >
              <PenTool className="size-5" />
              Luyện tập theo Module
            </Button>
          </div>
        </div>

        <div className="absolute -bottom-10 -right-10 size-64 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatTile
          label="Đã trả lời"
          value={
            <>
              {answeredCount}
              <span className="text-xs font-normal text-muted-foreground">/{totalQuestions}</span>
            </>
          }
          footerClassName="text-success font-medium"
          footer={
            <>
              <CheckCircle2 />
              {Math.round((answeredCount / totalQuestions) * 100)}% tổng số
            </>
          }
        />
        <StatTile
          label="Câu sai cần ôn"
          value={incorrectCount}
          valueClassName="text-destructive"
          footer={
            <>
              <XCircle className="text-destructive" />
              Xem ở Ôn lại câu sai
            </>
          }
        />
        <StatTile
          label="Đã ghi nhớ"
          value={masteredCount}
          valueClassName="text-success"
          footerClassName="text-success font-medium"
          footer={
            <>
              <BookmarkCheck />
              Hoàn thành ghi nhớ
            </>
          }
        />
        <StatTile label="Số bài thi thử" value={mockCount} valueClassName="text-primary" footer="Đã hoàn thành" />
        <StatTile
          label="Điểm cao nhất"
          value={`${highestScore}%`}
          valueClassName="text-warning"
          footer={
            <>
              <Award className="text-warning" />
              Đề mô phỏng
            </>
          }
        />
        <StatTile
          label="Thời gian ôn"
          value={formatTimeInHoursAndMins(progress.totalStudyTimeSec)}
          valueClassName="text-lg"
          footer={
            <>
              <Clock />
              Tích lũy
            </>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-lg font-bold">Tiến độ 4 Module</CardTitle>
            <CardAction>
              <Button variant="link" size="sm" asChild className="h-auto p-0 text-xs font-semibold">
                <Link to="/modules">
                  Chi tiết <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent className="space-y-4">
            {modulesData.map((mod) => {
              const modQuestions = allQuestions.filter((q) => q.module === mod.id);
              const answeredMod = modQuestions.filter((q) =>
                progress.answeredQuestionIds.includes(q.id)
              ).length;
              const percent = Math.round((answeredMod / modQuestions.length) * 100);

              return (
                <div key={mod.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold">
                      {mod.code}: {mod.name}
                    </span>
                    <span className="text-muted-foreground">
                      {answeredMod}/{modQuestions.length} câu
                    </span>
                  </div>
                  <Progress value={percent} className="bg-muted" indicatorClassName={progressColor(percent)} />
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-lg font-bold">Xu hướng điểm thi mô phỏng</CardTitle>
            <CardAction className="text-xs text-muted-foreground">Gần đây</CardAction>
          </CardHeader>
          <CardContent>
            <ScoreTrendChart results={progress.completedMockTests} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <QuickLink
          to="/practice"
          icon={PenTool}
          iconClassName="bg-primary/10 text-primary"
          title="Luyện tập trắc nghiệm"
          description="Làm câu hỏi theo module & xem giải thích ngay"
        />
        <QuickLink
          to="/mock-test"
          icon={Clock}
          iconClassName="bg-brand/10 text-brand"
          title="Đề mô phỏng 90 phút"
          description="Tự động xáo trộn câu hỏi, tính giờ như thi thật"
        />
        <QuickLink
          to="/review"
          icon={RotateCcw}
          iconClassName="bg-destructive/10 text-destructive"
          title={`Ôn lại ${incorrectCount} câu sai`}
          description="Xem lại lỗi sai & đánh dấu đã ghi nhớ"
        />
      </div>
    </div>
  );
};
