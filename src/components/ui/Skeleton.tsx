import React from "react";
import { clsx } from "clsx";

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "bg-bg-surface-hover animate-pulse rounded-xl",
        className
      )}
    />
  );
};
