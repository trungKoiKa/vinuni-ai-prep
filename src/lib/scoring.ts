import type { Question, ModuleId } from "../types/question";

export interface TestScoreSummary {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  blankCount: number;
  scorePercent: number;
  moduleScores: Record<ModuleId, { correct: number; total: number }>;
}

export function calculateTestScore(
  questions: Question[],
  userAnswers: Record<string, number | null>
): TestScoreSummary {
  let correctCount = 0;
  let incorrectCount = 0;
  let blankCount = 0;

  const moduleScores: Record<ModuleId, { correct: number; total: number }> = {
    A: { correct: 0, total: 0 },
    B: { correct: 0, total: 0 },
    C: { correct: 0, total: 0 },
    D: { correct: 0, total: 0 },
  };

  questions.forEach((q) => {
    moduleScores[q.module].total += 1;
    const selected = userAnswers[q.id];

    if (selected === undefined || selected === null) {
      blankCount += 1;
    } else if (selected === q.correctAnswer) {
      correctCount += 1;
      moduleScores[q.module].correct += 1;
    } else {
      incorrectCount += 1;
    }
  });

  const totalQuestions = questions.length;
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return {
    totalQuestions,
    correctCount,
    incorrectCount,
    blankCount,
    scorePercent,
    moduleScores,
  };
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export function formatTimeInHoursAndMins(seconds: number): string {
  if (seconds < 60) return `${seconds} giây`;
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `${mins} phút`;
  const hours = (mins / 60).toFixed(1);
  return `${hours} giờ`;
}
