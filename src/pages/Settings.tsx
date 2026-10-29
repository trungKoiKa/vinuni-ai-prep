import React, { useState } from "react";
import { toast } from "sonner";
import { useTheme } from "../context/ThemeContext";
import { useProgress } from "../context/ProgressContext";
import { PageHeader } from "../components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Sun, Trash2, Sliders, Sparkles, Save } from "lucide-react";

interface SettingRowProps {
  htmlFor: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

const SettingRow: React.FC<SettingRowProps> = ({ htmlFor, title, description, children }) => (
  <div className="flex flex-wrap items-center justify-between gap-4 py-2">
    <div className="space-y-0.5">
      <Label htmlFor={htmlFor} className="font-semibold">
        {title}
      </Label>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
    {children}
  </div>
);

export const Settings: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { progress, updateSettings, resetProgress } = useProgress();

  const [questionsPerSession, setQuestionsPerSession] = useState<number>(
    progress.settings.questionsPerSession || 10
  );
  const [mockDurationMin, setMockDurationMin] = useState<number>(
    progress.settings.mockTestDurationMin || 90
  );
  const [showExpImmediately, setShowExpImmediately] = useState<boolean>(
    progress.settings.showExplanationImmediately
  );

  const handleSaveSettings = () => {
    updateSettings({
      questionsPerSession,
      mockTestDurationMin: mockDurationMin,
      showExplanationImmediately: showExpImmediately,
    });
    toast.success("Đã lưu cấu hình tùy chỉnh thành công!");
  };

  const handleConfirmReset = () => {
    resetProgress();
    toast.warning("Đã xóa sạch toàn bộ tiến độ học tập!");
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in duration-200">
      <PageHeader
        title="Cài Đặt Ứng Dụng"
        description="Tùy chỉnh giao diện, chế độ làm bài và quản lý dữ liệu tiến độ cá nhân."
      />

      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <Sun className="size-5 text-primary" />
            Giao diện & Chế độ hiển thị
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SettingRow
            htmlFor="dark-mode"
            title="Chế độ Tối (Dark Mode)"
            description="Chuyển đổi giao diện sáng/tối giúp bảo vệ mắt khi học ban đêm."
          >
            <Switch
              id="dark-mode"
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
          </SettingRow>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <Sliders className="size-5 text-primary" />
            Cấu hình Luyện tập & Đề thi
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <SettingRow
            htmlFor="show-explanation"
            title="Hiển thị lời giải ngay khi chọn"
            description="Trong chế độ luyện tập, hiển thị ngay đáp án đúng/sai và lời giải sau khi tap chọn option."
          >
            <Switch
              id="show-explanation"
              checked={showExpImmediately}
              onCheckedChange={setShowExpImmediately}
            />
          </SettingRow>

          <Separator />

          <SettingRow
            htmlFor="questions-per-session"
            title="Số câu mỗi phiên luyện tập"
            description="Mặc định 10 câu/phiên."
          >
            <Input
              id="questions-per-session"
              type="number"
              min={5}
              max={50}
              value={questionsPerSession}
              onChange={(e) => setQuestionsPerSession(Number(e.target.value))}
              className="w-24 font-bold text-center"
            />
          </SettingRow>

          <Separator />

          <SettingRow
            htmlFor="mock-duration"
            title="Thời gian đếm lùi Đề Mô Phỏng (phút)"
            description="Chuẩn thời gian kỳ thi thực tế là 90 phút."
          >
            <Input
              id="mock-duration"
              type="number"
              min={15}
              max={180}
              value={mockDurationMin}
              onChange={(e) => setMockDurationMin(Number(e.target.value))}
              className="w-24 font-bold text-center"
            />
          </SettingRow>
        </CardContent>

        <CardFooter className="justify-end">
          <Button onClick={handleSaveSettings}>
            <Save />
            Lưu thay đổi cài đặt
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader className="border-b">
          <CardTitle className="text-lg font-bold text-destructive flex items-center gap-2">
            <Trash2 className="size-5" />
            Quản lý Dữ liệu LocalStorage
          </CardTitle>
        </CardHeader>

        <CardContent className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <div className="font-semibold text-sm">Xóa toàn bộ tiến độ học tập</div>
            <div className="text-xs text-muted-foreground">
              Xóa sạch lịch sử trả lời, kết quả đề thi thử và danh sách câu sai trong trình duyệt.
            </div>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="sm">
                <Trash2 />
                Xóa dữ liệu
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Xác nhận xóa tiến độ học tập</AlertDialogTitle>
                <AlertDialogDescription>
                  Hành động này KHÔNG THỂ khôi phục. Tất cả dữ liệu điểm số, câu sai và câu đánh dấu sẽ bị xóa khỏi LocalStorage.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
                <AlertDialogAction variant="destructive" onClick={handleConfirmReset}>
                  Đồng ý Xóa
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>

      <Card className="py-6">
        <CardContent className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm font-bold">
            <Sparkles className="size-4 text-primary" />
            <span>VinUni AI Prep v1.0.0</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Phát triển frontend-only demo dành cho ứng viên kỳ thi đầu vào Chương trình AI Thực chiến Vingroup / VinUni.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
