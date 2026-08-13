import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useProgress } from "../context/ProgressContext";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/ui/Modal";
import { useToast } from "../hooks/useToast";
import { ToastContainer } from "../components/ui/Toast";
import {
  Sun,
  Moon,
  Trash2,
  Sliders,
  Sparkles,
  Save,
} from "lucide-react";

export const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { progress, updateSettings, resetProgress } = useProgress();
  const { toasts, addToast, removeToast } = useToast();

  const [questionsPerSession, setQuestionsPerSession] = useState<number>(
    progress.settings.questionsPerSession || 10
  );
  const [mockDurationMin, setMockDurationMin] = useState<number>(
    progress.settings.mockTestDurationMin || 90
  );
  const [showExpImmediately, setShowExpImmediately] = useState<boolean>(
    progress.settings.showExplanationImmediately
  );

  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);

  const handleSaveSettings = () => {
    updateSettings({
      questionsPerSession,
      mockTestDurationMin: mockDurationMin,
      showExplanationImmediately: showExpImmediately,
    });
    addToast("Đã lưu cấu hình tùy chỉnh thành công!", "success");
  };

  const handleConfirmReset = () => {
    resetProgress();
    setIsResetModalOpen(false);
    addToast("Đã xóa sạch toàn bộ tiến độ học tập!", "warning");
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-fade-in">
      <ToastContainer toasts={toasts} onRemove={removeToast} />

      <div className="border-b border-border-color pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
          Cài Đặt Ứng Dụng
        </h1>
        <p className="text-xs sm:text-sm text-text-secondary mt-1">
          Tùy chỉnh giao diện, chế độ làm bài và quản lý dữ liệu tiến độ cá nhân.
        </p>
      </div>

      <Card className="p-6 space-y-4">
        <h2 className="text-lg font-bold text-text-primary border-b border-border-color pb-3 flex items-center gap-2">
          <Sun className="w-5 h-5 text-primary" />
          Giao diện & Chế độ hiển thị
        </h2>

        <div className="flex items-center justify-between py-2">
          <div>
            <div className="font-semibold text-sm text-text-primary">Chế độ Tối (Dark Mode)</div>
            <div className="text-xs text-text-secondary mt-0.5">
              Chuyển đổi giao diện sáng/tối giúp bảo vệ mắt khi học ban đêm.
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className={`w-14 h-8 rounded-full p-1 transition-colors duration-200 focus:outline-none ${
              theme === "dark" ? "bg-primary" : "bg-bg-surface-hover border border-border-color"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-200 flex items-center justify-center ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? (
                <Moon className="w-3.5 h-3.5 text-slate-800" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-500" />
              )}
            </div>
          </button>
        </div>
      </Card>

      <Card className="p-6 space-y-6">
        <h2 className="text-lg font-bold text-text-primary border-b border-border-color pb-3 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-primary" />
          Cấu hình Luyện tập & Đề thi
        </h2>

        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-border-color/50">
            <div>
              <div className="font-semibold text-text-primary">Hiển thị lời giải ngay khi chọn</div>
              <div className="text-xs text-text-secondary mt-0.5">
                Trong chế độ luyện tập, hiển thị ngay đáp án đúng/sai và lời giải sau khi tap chọn option.
              </div>
            </div>
            <input
              type="checkbox"
              checked={showExpImmediately}
              onChange={(e) => setShowExpImmediately(e.target.checked)}
              className="w-5 h-5 accent-primary rounded cursor-pointer"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-border-color/50">
            <div>
              <div className="font-semibold text-text-primary">Số câu mỗi phiên luyện tập</div>
              <div className="text-xs text-text-secondary mt-0.5">Mặc định 10 câu/phiên.</div>
            </div>
            <input
              type="number"
              min="5"
              max="50"
              value={questionsPerSession}
              onChange={(e) => setQuestionsPerSession(Number(e.target.value))}
              className="w-24 px-3 py-1.5 rounded-xl border border-border-color bg-bg-surface-hover text-text-primary font-bold text-center focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-2">
            <div>
              <div className="font-semibold text-text-primary">Thời gian đếm lùi Đề Mô Phỏng (phút)</div>
              <div className="text-xs text-text-secondary mt-0.5">Chuẩn thời gian kỳ thi thực tế là 90 phút.</div>
            </div>
            <input
              type="number"
              min="15"
              max="180"
              value={mockDurationMin}
              onChange={(e) => setMockDurationMin(Number(e.target.value))}
              className="w-24 px-3 py-1.5 rounded-xl border border-border-color bg-bg-surface-hover text-text-primary font-bold text-center focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <Button variant="primary" onClick={handleSaveSettings} icon={<Save className="w-4 h-4" />}>
              Lưu thay đổi cài đặt
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-rose-500/30 space-y-4">
        <h2 className="text-lg font-bold text-rose-600 dark:text-rose-400 border-b border-border-color pb-3 flex items-center gap-2">
          <Trash2 className="w-5 h-5" />
          Quản lý Dữ liệu LocalStorage
        </h2>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <div className="font-semibold text-sm text-text-primary">Xóa toàn bộ tiến độ học tập</div>
            <div className="text-xs text-text-secondary">
              Xóa sạch lịch sử trả lời, kết quả đề thi thử và danh sách câu sai trong trình duyệt.
            </div>
          </div>

          <Button
            variant="danger"
            size="sm"
            onClick={() => setIsResetModalOpen(true)}
            icon={<Trash2 className="w-4 h-4" />}
          >
            Xóa dữ liệu
          </Button>
        </div>
      </Card>

      <div className="p-6 rounded-2xl bg-bg-surface border border-border-color text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-sm font-bold text-text-primary">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>VinUni AI Prep v1.0.0</span>
        </div>
        <p className="text-xs text-text-secondary">
          Phát triển frontend-only demo dành cho ứng viên kỳ thi đầu vào Chương trình AI Thực chiến Vingroup / VinUni.
        </p>
      </div>

      <Modal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        title="Xác nhận xóa tiến độ học tập"
        description="Hành động này KHÔNG THỂ khôi phục. Tất cả dữ liệu điểm số, câu sai và câu đánh dấu sẽ bị xóa khỏi LocalStorage."
        confirmText="Đồng ý Xóa"
        cancelText="Hủy bỏ"
        onConfirm={handleConfirmReset}
        variant="danger"
      />
    </div>
  );
};
