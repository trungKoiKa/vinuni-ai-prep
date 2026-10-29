import type { Question } from "../types/question";
import { getQuestionById } from "../data/questions";

// In-progress sessions live in localStorage so a reload or closed tab can resume.
const MOCK_KEY = "vinuni_ai_mock_session_v1";
const PRACTICE_KEY = "vinuni_ai_practice_sessions_v1";

export type AnswerMap = Record<string, number | null>;

export interface MockSession {
  id: string;
  questionIds: string[];
  answers: AnswerMap;
  currentIndex: number;
  startedAt: number; // epoch ms
  endsAt: number; // epoch ms; the clock keeps running while the tab is closed
}

export interface PracticeSession {
  batchIndex: number; // -1 = "50 câu chưa làm"
  isShuffled: boolean;
  questionIds: string[];
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

// Returns null if any saved id no longer exists in the question bank.
export function resolveQuestions(ids: string[]): Question[] | null {
  const questions = ids.map((id) => getQuestionById(id));
  if (questions.length === 0 || questions.some((q) => !q)) return null;
  return questions as Question[];
}

export const mockSessionStore = {
  get: () => read<MockSession>(MOCK_KEY),
  set: (session: MockSession) => write(MOCK_KEY, session),
  clear: () => remove(MOCK_KEY),
};

export const practiceSessionStore = {
  get(moduleKey: string): PracticeSession | null {
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
}
