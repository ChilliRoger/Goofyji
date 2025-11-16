"use client";

import { useEffect, useState, useRef } from "react";

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
  const timeUpCalledRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Reset timer when onReset changes
  useEffect(() => {
    setTimeLeft(duration);
    timeUpCalledRef.current = false;

    // Clear any existing interval when resetting
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [onReset, duration]);

  // Countdown logic
  useEffect(() => {
    // Clear existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!isActive) {
      return;
    }

    if (timeLeft <= 0) {
      if (!timeUpCalledRef.current) {
        timeUpCalledRef.current = true;
        onTimeUp();
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        if (newTime <= 0) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
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
