import type { Question, ModuleId } from "../../types/question";
import { moduleAQuestions } from "./moduleA";
import { moduleBQuestions } from "./moduleB";
import { moduleCQuestions } from "./moduleC";
import { moduleDQuestions } from "./moduleD";

export const allQuestions: Question[] = [
  ...moduleAQuestions,
  ...moduleBQuestions,
  ...moduleCQuestions,
  ...moduleDQuestions,
];

export function getQuestionsByModule(moduleId?: ModuleId): Question[] {
  if (!moduleId) return allQuestions;
  return allQuestions.filter((q) => q.module === moduleId);
}

export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find((q) => q.id === id);
}
