import { useState, useEffect, useRef, useCallback } from "react";

interface UseTimerProps {
  initialSeconds: number;
  onExpire?: () => void;
  onTick10Min?: () => void;
  onTick5Min?: () => void;
  autoStart?: boolean;
}

export function useTimer({
  initialSeconds,
  onExpire,
  onTick10Min,
  onTick5Min,
  autoStart = true,
}: UseTimerProps) {
  const [remainingSec, setRemainingSec] = useState<number>(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(autoStart);
  
  const endTimestampRef = useRef<number | null>(null);
  const warned10MinRef = useRef<boolean>(false);
  const warned5MinRef = useRef<boolean>(false);

  const start = useCallback(() => {
    endTimestampRef.current = Date.now() + remainingSec * 1000;
    setIsRunning(true);
  }, [remainingSec]);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback((newSeconds?: number) => {
    const sec = newSeconds ?? initialSeconds;
    setRemainingSec(sec);
    endTimestampRef.current = Date.now() + sec * 1000;
    warned10MinRef.current = false;
    warned5MinRef.current = false;
  }, [initialSeconds]);

  useEffect(() => {
    if (!isRunning) return;

    if (!endTimestampRef.current) {
      endTimestampRef.current = Date.now() + remainingSec * 1000;
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, Math.ceil((endTimestampRef.current! - now) / 1000));

      setRemainingSec(diff);

      // Warning triggers
      if (diff <= 600 && diff > 300 && !warned10MinRef.current) {
        warned10MinRef.current = true;
        onTick10Min?.();
      }

      if (diff <= 300 && diff > 0 && !warned5MinRef.current) {
        warned5MinRef.current = true;
        onTick5Min?.();
      }

      if (diff <= 0) {
        clearInterval(interval);
        setIsRunning(false);
        onExpire?.();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onExpire, onTick10Min, onTick5Min]);

  return {
    remainingSec,
    isRunning,
    start,
    pause,
    reset,
    warned10Min: warned10MinRef.current,
    warned5Min: warned5MinRef.current,
  };
}
