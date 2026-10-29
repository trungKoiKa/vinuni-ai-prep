import React from "react";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon = CheckCircle2,
  title,
  description,
  actionText,
  onAction,
}) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center text-center py-6 md:py-10">
        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          <Icon className="size-8" />
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-md mb-6">{description}</p>
        {actionText && onAction && <Button onClick={onAction}>{actionText}</Button>}
      </CardContent>
    </Card>
  );
};
