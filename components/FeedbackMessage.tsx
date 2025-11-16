'use client';

import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

interface FeedbackMessageProps {
  type: 'correct' | 'wrong' | 'hint' | null;
  message: string;
}

export default function FeedbackMessage({ type, message }: FeedbackMessageProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (type === 'correct') {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [type]);

  if (!type || !message) return null;

  return (
    <>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
      <div className={`feedback-message ${type}`}>
        {type === 'correct' && '🎉 '}
        {type === 'wrong' && '❌ '}
        {type === 'hint' && '💡 '}
        {message}
      </div>
    </>
  );
}
