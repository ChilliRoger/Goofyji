"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({
  onLoadingComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading emojis");

  const loadingMessages = [
    "Loading emojis",
    "Mixing puzzles",
    "Adding fun",
    "Preparing roasts",
    "Almost ready",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const messageInterval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="loading-screen-overlay">
      <div className="loading-content">
        <div className="loading-emoji-container">
          <span className="loading-emoji bounce-1">🎮</span>
          <span className="loading-emoji bounce-2">🎯</span>
          <span className="loading-emoji bounce-3">🎲</span>
        </div>

        <h1 className="loading-title">Goofyji</h1>

        <div className="loading-text-container">
          <p className="loading-text">{loadingText}...</p>
        </div>

        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <p className="loading-percentage">{progress}%</p>
      </div>
    </div>
  );
}
