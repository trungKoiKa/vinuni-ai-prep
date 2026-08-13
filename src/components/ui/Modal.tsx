import React, { useEffect } from "react";
import { clsx } from "clsx";
import { X } from "lucide-react";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  variant?: "primary" | "danger" | "warning";
  isSubmitting?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  confirmText = "Xác nhận",
  cancelText = "Hủy",
  onConfirm,
  variant = "primary",
  isSubmitting = false,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-150 animate-fade-in"
        onClick={onClose}
      />

      {/* Dialog box */}
      <div
        className={clsx(
          "relative bg-bg-surface border border-border-color rounded-2xl p-6 shadow-xl max-w-lg w-full z-10",
          "transform transition-all duration-150 animate-scale-in"
        )}
      >
        <div className="flex items-start justify-between pb-3 border-b border-border-color">
          <div>
            <h3 className="text-lg font-bold text-text-primary">{title}</h3>
            {description && (
              <p className="text-sm text-text-secondary mt-1">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-bg-surface-hover text-text-secondary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {children && <div className="py-4 text-sm text-text-primary">{children}</div>}

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-border-color">
          <Button variant="outline" onClick={onClose} disabled={isSubmitting}>
            {cancelText}
          </Button>
          {onConfirm && (
            <Button
              variant={variant === "danger" ? "danger" : "primary"}
              onClick={onConfirm}
              disabled={isSubmitting}
            >
              {confirmText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
