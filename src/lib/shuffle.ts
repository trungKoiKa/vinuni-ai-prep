import type { Question } from "../types/question";

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
