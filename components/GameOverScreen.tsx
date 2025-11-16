"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { generateRoast } from "@/lib/roastGenerator";
import { playGameOverBuzzer } from "@/utils/gameOverSound";

interface GameOverScreenProps {
  score: number;
  onRestart: () => void;
}

export default function GameOverScreen({
  score,
  onRestart,
}: GameOverScreenProps) {
  const router = useRouter();
  const [roast, setRoast] = useState("");

  useEffect(() => {
    // Generate a new roast when component mounts
    setRoast(generateRoast());
    // Play game over buzzer sound
    playGameOverBuzzer();
  }, []);

  return (
    <div className="game-over-overlay">
      <div className="game-over-content">
        <h1 className="game-over-title">GAME OVER!</h1>

        <div className="final-score">
          <div className="final-score-label">Final Score</div>
          <div className="final-score-value">{score}</div>
        </div>

        <div className="roast-container">
          <div className="roast-emoji">🔥</div>
          <p className="roast-text">{roast}</p>
          <div className="roast-emoji">🔥</div>
        </div>

        <button onClick={() => router.push("/")} className="restart-button">
          Try Again
        </button>

        <div className="game-over-footer">Better luck next time! 😅</div>
      </div>
    </div>
  );
}
