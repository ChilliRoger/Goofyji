"use client";

interface ScoreCounterProps {
  score: number;
  round: number;
  highScore?: number;
}

export default function ScoreCounter({
  score,
  round,
  highScore = 0,
}: ScoreCounterProps) {
  return (
    <div className="score-counter">
      <div className="score-item">
        <div className="score-label">Round</div>
        <div className="score-value">{round}</div>
      </div>
      <div className="score-item">
        <div className="score-label">Score</div>
        <div className="score-value">{score}</div>
      </div>
      {highScore > 0 && (
        <div className="score-item">
          <div className="score-label">High Score</div>
          <div className="score-value high-score">{highScore}</div>
        </div>
      )}
    </div>
  );
}
