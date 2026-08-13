export type ModuleId = "A" | "B" | "C" | "D";
export type Difficulty = "Dễ" | "Trung bình" | "Khó";

export interface Question {
  id: string;
  module: ModuleId;
  moduleName: string;
  topic: string;
  difficulty: Difficulty;
  question: string;      // supports code block ```python
  options: string[];     // array of 4 items
  correctAnswer: number; // index 0-3
  explanation: string;
  tags: string[];
}

export interface ModuleMetadata {
  id: ModuleId;
  code: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
  badgeBg: string;
  totalQuestions: number;
}
