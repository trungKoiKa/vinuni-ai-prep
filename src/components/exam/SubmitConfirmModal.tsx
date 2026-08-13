import React from "react";
import { Modal } from "../ui/Modal";
import { AlertCircle } from "lucide-react";

interface SubmitConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  totalQuestions: number;
  answeredCount: number;
  unansweredCount: number;
}

export const SubmitConfirmModal: React.FC<SubmitConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  totalQuestions,
  answeredCount,
  unansweredCount,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Xác nhận nộp bài thi"
      description="Bạn có chắc chắn muốn nộp bài thi mô phỏng này?"
      confirmText="Nộp bài ngay"
      cancelText="Tiếp tục làm bài"
      onConfirm={onConfirm}
      variant="primary"
    >
      <div className="space-y-4">
        {unansweredCount > 0 && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs sm:text-sm flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>
              Cảnh báo: Bạn còn <strong>{unansweredCount} câu chưa trả lời</strong>. Các câu bỏ trống sẽ bị tính 0 điểm.
            </span>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 text-center text-sm">
          <div className="p-3 rounded-xl bg-bg-surface-hover border border-border-color">
            <div className="text-text-secondary text-xs">Đã trả lời</div>
            <div className="text-lg font-bold text-emerald-500 mt-1">
              {answeredCount}/{totalQuestions}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-bg-surface-hover border border-border-color">
            <div className="text-text-secondary text-xs">Chưa trả lời</div>
            <div className="text-lg font-bold text-rose-500 mt-1">
              {unansweredCount}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
