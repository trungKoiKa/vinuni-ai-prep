import type { UserProgress } from "../types/progress";

const STORAGE_KEY = "vinuni_ai_progress_v1";

export const initialProgress: UserProgress = {
  answeredQuestionIds: [],
  incorrectQuestionIds: [],
  bookmarkedQuestionIds: [],
  masteredQuestionIds: [],
  completedMockTests: [],
  totalStudyTimeSec: 0,
  settings: {
    theme: "dark",
    showExplanationImmediately: true,
    questionsPerSession: 10,
    mockTestDurationMin: 90,
  },
};

export const storage = {
  get(): UserProgress {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return initialProgress;
      const parsed = JSON.parse(data);
      return {
        ...initialProgress,
        ...parsed,
        settings: {
          ...initialProgress.settings,
          ...(parsed.settings || {}),
        },
      };
    } catch (error) {
      console.error("Failed to parse LocalStorage data:", error);
      return initialProgress;
    }
  },

  set(progress: UserProgress): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error("Failed to save data to LocalStorage:", error);
    }
  },

  clear(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear LocalStorage:", error);
    }
  },
};
