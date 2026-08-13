import React from "react";
import { clsx } from "clsx";
import type { Difficulty } from "../../types/question";

interface BadgeProps {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  difficulty?: Difficulty;
  children?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant,
  difficulty,
  children,
  className,
}) => {
  let styleClasses = "bg-primary/10 text-primary border-primary/20";

  if (difficulty) {
    if (difficulty === "Dễ") {
      styleClasses = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    } else if (difficulty === "Trung bình") {
      styleClasses = "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
    } else if (difficulty === "Khó") {
      styleClasses = "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
    }
  } else if (variant) {
    switch (variant) {
      case "primary":
        styleClasses = "bg-primary/10 text-primary border-primary/20";
        break;
      case "secondary":
        styleClasses = "bg-accent/10 text-accent border-accent/20";
        break;
      case "success":
        styleClasses = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
        break;
      case "warning":
        styleClasses = "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
        break;
      case "danger":
        styleClasses = "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
        break;
      case "neutral":
        styleClasses = "bg-bg-surface-hover text-text-secondary border-border-color";
        break;
    }
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors",
        styleClasses,
        className
      )}
    >
      {children || difficulty}
    </span>
  );
};
