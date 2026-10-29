import React from "react";
import type { Difficulty } from "../../types/question";
import { Badge } from "@/components/ui/badge";

const difficultyVariant = {
  "Dễ": "success",
  "Trung bình": "warning",
  "Khó": "danger",
} as const satisfies Record<Difficulty, string>;

export const DifficultyBadge: React.FC<{ difficulty: Difficulty }> = ({ difficulty }) => (
  <Badge variant={difficultyVariant[difficulty]}>{difficulty}</Badge>
);
