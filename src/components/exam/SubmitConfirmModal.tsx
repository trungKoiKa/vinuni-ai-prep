import React from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Xác nhận nộp bài thi</AlertDialogTitle>
          <AlertDialogDescription>
            Bạn có chắc chắn muốn nộp bài thi mô phỏng này?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4">
          {unansweredCount > 0 && (
            <Alert variant="warning">
              <AlertCircle />
              <AlertDescription>
                <span>
                  Cảnh báo: Bạn còn <strong>{unansweredCount} câu chưa trả lời</strong>. Các câu bỏ trống sẽ bị tính 0 điểm.
                </span>
              </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-2 gap-3 text-center text-sm">
            <div className="p-3 rounded-lg bg-muted border">
              <div className="text-muted-foreground text-xs">Đã trả lời</div>
              <div className="text-lg font-bold text-success mt-1">
                {answeredCount}/{totalQuestions}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <div className="text-muted-foreground text-xs">Chưa trả lời</div>
              <div className="text-lg font-bold text-destructive mt-1">{unansweredCount}</div>
            </div>
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Tiếp tục làm bài</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Nộp bài ngay</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
