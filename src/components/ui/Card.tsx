import React from "react";
import { clsx } from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "bg-bg-surface border border-border-color rounded-2xl p-5 md:p-6 transition-all duration-200",
        hoverEffect && "hover:-translate-y-0.5 hover:bg-bg-surface-hover hover:shadow-md cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
