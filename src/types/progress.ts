import type { ModuleId } from "./question";

export interface QuestionAttempt {
  questionId: string;
  selectedAnswer: number | null;
  isCorrect: boolean;
  timeSpentSec: number;
}

export interface MockTestResult {
  id: string;
  date: string; // ISO format
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  blankCount: number;
  scorePercent: number;
  timeUsedSec: number;
  moduleScores: Record<ModuleId, { correct: number; total: number }>;
  attempts: QuestionAttempt[];
}

export interface UserSettings {
  theme: "light" | "dark";
  showExplanationImmediately: boolean;
  questionsPerSession: number;
  mockTestDurationMin: number; // default 90 min
}

export interface UserProgress {
  answeredQuestionIds: string[];
  incorrectQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  masteredQuestionIds: string[]; // "Đã nhớ" in Review Mistakes
  completedMockTests: MockTestResult[];
  totalStudyTimeSec: number;
  settings: UserSettings;
}
