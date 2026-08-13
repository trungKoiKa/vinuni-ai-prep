import React from "react";
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from "lucide-react";
import type { ToastMessage } from "../../hooks/useToast";
import { clsx } from "clsx";

interface ToastContainerProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full px-4 sm:px-0">
      {toasts.map((toast) => {
        let icon = <Info className="w-5 h-5 text-blue-500" />;
        let borderClass = "border-blue-500/30 bg-bg-surface";

        if (toast.type === "success") {
          icon = <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
          borderClass = "border-emerald-500/30 bg-bg-surface";
        } else if (toast.type === "error") {
          icon = <AlertCircle className="w-5 h-5 text-rose-500" />;
          borderClass = "border-rose-500/30 bg-bg-surface";
        } else if (toast.type === "warning") {
          icon = <AlertTriangle className="w-5 h-5 text-amber-500" />;
          borderClass = "border-amber-500/30 bg-bg-surface";
        }

        return (
          <div
            key={toast.id}
            className={clsx(
              "flex items-center gap-3 p-4 rounded-xl border shadow-lg transition-all duration-200 animate-slide-in",
              borderClass
            )}
          >
            <span className="shrink-0">{icon}</span>
            <p className="text-sm font-medium text-text-primary flex-1">{toast.message}</p>
            <button
              onClick={() => onRemove(toast.id)}
              className="text-text-secondary hover:text-text-primary transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
