import type { Question } from "../types/question";
import { getQuestionById } from "../data/questions";

// In-progress sessions live in localStorage so a reload or closed tab can resume.
// v1 did not record the shuffled option order, so its answers can't be trusted.
const MOCK_KEY = "vinuni_ai_mock_session_v2";
const PRACTICE_KEY = "vinuni_ai_practice_sessions_v2";
const LEGACY_KEYS = ["vinuni_ai_mock_session_v1", "vinuni_ai_practice_sessions_v1"];

export type AnswerMap = Record<string, number | null>;

export interface MockSession {
  id: string;
  questionIds: string[];
  optionOrders: number[][];
  answers: AnswerMap;
  currentIndex: number;
  startedAt: number; // epoch ms
  endsAt: number; // epoch ms; the clock keeps running while the tab is closed
}

export interface PracticeSession {
  batchIndex: number; // -1 = "50 câu chưa làm"
  isShuffled: boolean;
  questionIds: string[];
  optionOrders: number[][];
  currentIndex: number;
  answers: AnswerMap;
}

function read<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Failed to save session to LocalStorage:", error);
  }
}

function remove(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
}

// Answers are saved as option indices, so a session must also remember how each
// question's options were shuffled: optionOrders[i][k] = original index shown at k.
export function getOptionOrders(questions: Question[]): number[][] {
  return questions.map((q) => {
    const original = getQuestionById(q.id);
    return q.options.map((opt) => original?.options.indexOf(opt) ?? -1);
  });
}

function isPermutation(order: number[], length: number): boolean {
  return order.length === length && [...order].sort((a, b) => a - b).every((v, i) => v === i);
}

// Rebuilds the questions exactly as they were shown. Returns null if the bank changed.
export function resolveQuestions(ids: string[], optionOrders: number[][] | undefined): Question[] | null {
  if (ids.length === 0 || !optionOrders || optionOrders.length !== ids.length) return null;
  const questions: Question[] = [];
  for (let i = 0; i < ids.length; i++) {
    const original = getQuestionById(ids[i]);
    const order = optionOrders[i];
    if (!original || !isPermutation(order, original.options.length)) return null;
    questions.push({
      ...original,
      options: order.map((k) => original.options[k]),
      correctAnswer: order.indexOf(original.correctAnswer),
    });
  }
  return questions;
}

function dropLegacySessions(): void {
  LEGACY_KEYS.forEach(remove);
}

export const mockSessionStore = {
  get: () => {
    dropLegacySessions();
    return read<MockSession>(MOCK_KEY);
  },
  set: (session: MockSession) => write(MOCK_KEY, session),
  clear: () => remove(MOCK_KEY),
};

export const practiceSessionStore = {
  get(moduleKey: string): PracticeSession | null {
    dropLegacySessions();
    return read<Record<string, PracticeSession>>(PRACTICE_KEY)?.[moduleKey] ?? null;
  },
  set(moduleKey: string, session: PracticeSession) {
    const all = read<Record<string, PracticeSession>>(PRACTICE_KEY) ?? {};
    write(PRACTICE_KEY, { ...all, [moduleKey]: session });
  },
};

export function clearAllSessions(): void {
  remove(MOCK_KEY);
  remove(PRACTICE_KEY);
  dropLegacySessions();
}
