import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { UserProgress, MockTestResult, UserSettings } from "../types/progress";
import { storage, initialProgress } from "../lib/storage";

interface ProgressContextType {
  progress: UserProgress;
  recordAnswer: (questionId: string, isCorrect: boolean, timeSpentSec?: number) => void;
  toggleBookmark: (questionId: string) => void;
  markAsMastered: (questionId: string) => void;
  addMockTestResult: (result: MockTestResult) => void;
  resetProgress: () => void;
  updateSettings: (settingsPartial: Partial<UserSettings>) => void;
  addStudyTime: (seconds: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => storage.get());

  useEffect(() => {
    storage.set(progress);
  }, [progress]);

  const recordAnswer = useCallback((questionId: string, isCorrect: boolean, timeSpentSec = 5) => {
    setProgress((prev) => {
      const answeredSet = new Set(prev.answeredQuestionIds);
      answeredSet.add(questionId);

      const incorrectSet = new Set(prev.incorrectQuestionIds);
      if (!isCorrect) {
        incorrectSet.add(questionId);
        const masteredSet = new Set(prev.masteredQuestionIds);
        masteredSet.delete(questionId);
      }

      return {
        ...prev,
        answeredQuestionIds: Array.from(answeredSet),
        incorrectQuestionIds: Array.from(incorrectSet),
        totalStudyTimeSec: prev.totalStudyTimeSec + timeSpentSec,
      };
    });
  }, []);

  const toggleBookmark = useCallback((questionId: string) => {
    setProgress((prev) => {
      const set = new Set(prev.bookmarkedQuestionIds);
      if (set.has(questionId)) {
        set.delete(questionId);
      } else {
        set.add(questionId);
      }
      return {
        ...prev,
        bookmarkedQuestionIds: Array.from(set),
      };
    });
  }, []);

  const markAsMastered = useCallback((questionId: string) => {
    setProgress((prev) => {
      const masteredSet = new Set(prev.masteredQuestionIds);
      masteredSet.add(questionId);

      const incorrectSet = new Set(prev.incorrectQuestionIds);
      incorrectSet.delete(questionId);

      return {
        ...prev,
        incorrectQuestionIds: Array.from(incorrectSet),
        masteredQuestionIds: Array.from(masteredSet),
      };
    });
  }, []);

  const addMockTestResult = useCallback((result: MockTestResult) => {
    setProgress((prev) => {
      const answeredSet = new Set(prev.answeredQuestionIds);
      const incorrectSet = new Set(prev.incorrectQuestionIds);

      result.attempts.forEach((att) => {
        if (att.selectedAnswer !== null) {
          answeredSet.add(att.questionId);
          if (!att.isCorrect) {
            incorrectSet.add(att.questionId);
          }
        }
      });

      return {
        ...prev,
        answeredQuestionIds: Array.from(answeredSet),
        incorrectQuestionIds: Array.from(incorrectSet),
        completedMockTests: [result, ...prev.completedMockTests],
        totalStudyTimeSec: prev.totalStudyTimeSec + result.timeUsedSec,
      };
    });
  }, []);

  const resetProgress = useCallback(() => {
    storage.clear();
    setProgress(initialProgress);
  }, []);

  const updateSettings = useCallback((settingsPartial: Partial<UserSettings>) => {
    setProgress((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        ...settingsPartial,
      },
    }));
  }, []);

  const addStudyTime = useCallback((seconds: number) => {
    setProgress((prev) => ({
      ...prev,
      totalStudyTimeSec: prev.totalStudyTimeSec + seconds,
    }));
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        recordAnswer,
        toggleBookmark,
        markAsMastered,
        addMockTestResult,
        resetProgress,
        updateSettings,
        addStudyTime,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return context;
};
