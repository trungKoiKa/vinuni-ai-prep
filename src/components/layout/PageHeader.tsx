import React from "react";
import { cn } from "cn";

interface PageHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, actions, className }) => (
  <div className={cn("flex flex-wrap items-center justify-between gap-4 border-b pb-4", className)}>
    <div>
      <h1 className="text-2xl sm:text-3xl font-extrabold">{title}</h1>
      {description && (
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">{description}</p>
      )}
    </div>
    {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
  </div>
);
