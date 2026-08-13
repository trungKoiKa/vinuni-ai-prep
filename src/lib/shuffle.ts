import type { Question } from "../types/question";
import type { UserProgress } from "../types/progress";

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function shuffleQuestionOptions(question: Question): Question {
  const originalOptions = question.options;
  const originalCorrectText = originalOptions[question.correctAnswer];

  const indices = shuffleArray([0, 1, 2, 3]);
  const newOptions = indices.map((idx) => originalOptions[idx]);
  const newCorrectAnswer = newOptions.indexOf(originalCorrectText);

  return {
    ...question,
    options: newOptions,
    correctAnswer: newCorrectAnswer >= 0 ? newCorrectAnswer : 0,
  };
}

export function prepareQuestionSet(questions: Question[], shuffleOptions = true): Question[] {
  const shuffledQuestions = shuffleArray(questions);
  if (!shuffleOptions) return shuffledQuestions;
  return shuffledQuestions.map((q) => shuffleQuestionOptions(q));
}

/**
 * Smartly selects N questions from a pool, prioritizing unanswered/unseen questions
 * to ensure all questions across the database are covered before repeating.
 */
export function selectSmartQuestions(
  pool: Question[],
  count: number,
  answeredIds: Set<string>
): Question[] {
  if (pool.length <= count) {
    return prepareQuestionSet(pool);
  }

  const unanswered = pool.filter((q) => !answeredIds.has(q.id));
  const answered = pool.filter((q) => answeredIds.has(q.id));

  const shuffledUnanswered = shuffleArray(unanswered);
  const shuffledAnswered = shuffleArray(answered);

  const selected = shuffledUnanswered.slice(0, count);

  if (selected.length < count) {
    const remainingCount = count - selected.length;
    selected.push(...shuffledAnswered.slice(0, remainingCount));
  }

  return prepareQuestionSet(selected);
}

/**
 * Generates a 100-question Mock Test set balanced proportionally across modules:
 * - Module A: 30 questions
 * - Module B: 16 questions
 * - Module C: 41 questions
 * - Module D: 13 questions
 * Total = 100 questions.
 * Prioritizes unseen/unanswered questions across past test runs.
 */
export function generateMockTest100(
  allQuestions: Question[],
  progress?: UserProgress
): Question[] {
  const answeredIds = new Set<string>(progress?.answeredQuestionIds || []);

  if (progress?.completedMockTests) {
    progress.completedMockTests.slice(-3).forEach((test) => {
      test.attempts?.forEach((att) => answeredIds.add(att.questionId));
    });
  }

  const poolA = allQuestions.filter((q) => q.module === "A");
  const poolB = allQuestions.filter((q) => q.module === "B");
  const poolC = allQuestions.filter((q) => q.module === "C");
  const poolD = allQuestions.filter((q) => q.module === "D");

  const setA = selectSmartQuestions(poolA, 30, answeredIds);
  const setB = selectSmartQuestions(poolB, 16, answeredIds);
  const setC = selectSmartQuestions(poolC, 41, answeredIds);
  const setD = selectSmartQuestions(poolD, 13, answeredIds);

  return [...setA, ...setB, ...setC, ...setD];
}
