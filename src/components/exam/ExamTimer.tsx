import React from "react";
import { Clock, AlertTriangle } from "lucide-react";
import { cn } from "cn";
import { formatTime } from "../../lib/scoring";
import { Badge } from "@/components/ui/badge";

interface ExamTimerProps {
  remainingSec: number;
}

export const ExamTimer: React.FC<ExamTimerProps> = ({ remainingSec }) => {
  const is10MinWarning = remainingSec <= 600 && remainingSec > 300;
  const is5MinDanger = remainingSec <= 300;

  return (
    <Badge
      variant={is5MinDanger ? "danger" : is10MinWarning ? "warning" : "outline"}
      className={cn(
        "px-3.5 py-1.5 gap-2 text-sm [&>svg]:size-4",
        is5MinDanger && "animate-pulse-subtle font-bold",
        is10MinWarning && "font-bold"
      )}
    >
      {is5MinDanger || is10MinWarning ? (
        <AlertTriangle className={cn(is5MinDanger && "animate-bounce")} />
      ) : (
        <Clock className="text-primary" />
      )}
      <span className="font-mono text-base tracking-wider">{formatTime(remainingSec)}</span>
    </Badge>
  );
};
