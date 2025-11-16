"use client";

interface RoundResultPopupProps {
  isCorrect: boolean;
  correctAnswer: string;
  onNextRound: () => void;
}

export default function RoundResultPopup({
  isCorrect,
  correctAnswer,
  onNextRound,
}: RoundResultPopupProps) {
  return (
    <div className="round-result-overlay">
      <div className="round-result-content">
        <div className={`result-icon ${isCorrect ? "correct" : "wrong"}`}>
          {isCorrect ? "🎉" : "😅"}
        </div>

        <h2 className={`result-title ${isCorrect ? "correct" : "wrong"}`}>
          {isCorrect ? "Correct!" : "Time's Up!"}
        </h2>

        <div className="correct-answer-box">
          <p className="answer-label">The answer was:</p>
          <p className="answer-text">{correctAnswer}</p>
        </div>

        <button onClick={onNextRound} className="next-round-button">
          Next Round →
        </button>
      </div>
    </div>
  );
}
