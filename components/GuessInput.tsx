'use client';

import { useState, FormEvent } from 'react';

interface GuessInputProps {
  onSubmit: (guess: string) => void;
  onHint: () => void;
  disabled?: boolean;
  showHintButton?: boolean;
}

export default function GuessInput({
  onSubmit,
  onHint,
  disabled = false,
  showHintButton = true,
}: GuessInputProps) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (guess.trim()) {
      onSubmit(guess.trim());
      setGuess('');
    }
  };

  return (
    <div className="guess-input-container">
      <form onSubmit={handleSubmit} className="guess-form">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Type your guess..."
          className="guess-input"
          disabled={disabled}
          autoFocus
          aria-label="Enter your guess"
        />
        <button
          type="submit"
          className="submit-button"
          disabled={disabled || !guess.trim()}
        >
          Submit
        </button>
      </form>
      {showHintButton && (
        <button
          type="button"
          onClick={onHint}
          className="hint-button"
          disabled={disabled}
        >
          💡 Hint
        </button>
      )}
    </div>
  );
}
