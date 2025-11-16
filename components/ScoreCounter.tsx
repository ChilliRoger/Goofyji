"use client";

interface ScoreCounterProps {
  score: number;
  round: number;
}

export default function ScoreCounter({ score, round }: ScoreCounterProps) {
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
    </div>
  );
}
