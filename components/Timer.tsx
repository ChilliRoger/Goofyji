"use client";

import { useEffect, useState } from "react";

interface TimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
  isActive: boolean;
  onReset: number; // counter to trigger reset
}

export default function Timer({
  duration,
  onTimeUp,
  isActive,
  onReset,
}: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  // Reset timer when onReset changes
  useEffect(() => {
    setTimeLeft(duration);
  }, [onReset, duration]);

  // Countdown logic
  useEffect(() => {
    if (!isActive) return;

    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isActive, onTimeUp]);

  // Calculate percentage for progress bar
  const percentage = (timeLeft / duration) * 100;

  // Determine color based on time left
  const getColor = () => {
    if (percentage > 60) return "#00b894"; // green
    if (percentage > 30) return "#fdcb6e"; // yellow
    return "#d63031"; // red
  };

  return (
    <div className="timer-container">
      <div className="timer-display">
        <span className="timer-icon">⏱️</span>
        <span className="timer-value" style={{ color: getColor() }}>
          {timeLeft}s
        </span>
      </div>
      <div className="timer-progress">
        <div
          className="timer-progress-bar"
          style={{
            width: `${percentage}%`,
            backgroundColor: getColor(),
          }}
        />
      </div>
    </div>
  );
}
