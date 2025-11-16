'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import EmojiDisplay from '@/components/EmojiDisplay';
import GuessInput from '@/components/GuessInput';
import LivesCounter from '@/components/LivesCounter';
import ScoreCounter from '@/components/ScoreCounter';
import FeedbackMessage from '@/components/FeedbackMessage';
import GameOverScreen from '@/components/GameOverScreen';
import { generatePuzzle, checkAnswerWithAlternatives, getHint } from '@/lib/puzzleGenerator';
import { playCorrectSound, playWrongSound, playGameOverSound } from '@/lib/soundManager';
import type { Puzzle } from '@/lib/puzzleGenerator';

export default function GamePage() {
  const router = useRouter();
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'correct' | 'wrong' | 'hint' | null;
    message: string;
  }>({ type: null, message: '' });
  const [hintShown, setHintShown] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // Generate initial puzzle
  useEffect(() => {
    setPuzzle(generatePuzzle(1));
  }, []);

  // Handle guess submission
  const handleGuess = (guess: string) => {
    if (!puzzle || gameOver) return;

    const isCorrect = checkAnswerWithAlternatives(guess, puzzle.items);

    if (isCorrect) {
      // Correct answer
      playCorrectSound();
      setScore(score + 1);
      setFeedback({
        type: 'correct',
        message: `Correct! The answer was "${puzzle.answer}"`,
      });

      // Generate next puzzle after a short delay
      setTimeout(() => {
        const nextRound = round + 1;
        setRound(nextRound);
        setPuzzle(generatePuzzle(nextRound));
        setFeedback({ type: null, message: '' });
        setHintShown(false);
      }, 1500);
    } else {
      // Wrong answer
      playWrongSound();
      const newLives = lives - 1;
      setLives(newLives);
      setIsShaking(true);
      
      setFeedback({
        type: 'wrong',
        message: newLives > 0 ? 'Wrong! Try again!' : 'Game Over!',
      });

      // Remove shake animation
      setTimeout(() => setIsShaking(false), 500);

      // Check if game over
      if (newLives <= 0) {
        playGameOverSound();
        setTimeout(() => {
          setGameOver(true);
        }, 1000);
      } else {
        // Clear feedback after a delay
        setTimeout(() => {
          setFeedback({ type: null, message: '' });
        }, 2000);
      }
    }
  };

  // Handle hint request
  const handleHint = () => {
    if (!puzzle || hintShown || gameOver) return;

    const hint = getHint(puzzle.answer);
    setFeedback({
      type: 'hint',
      message: `Hint: The answer starts with "${hint}"`,
    });
    setHintShown(true);

    // Clear hint after a delay
    setTimeout(() => {
      setFeedback({ type: null, message: '' });
    }, 3000);
  };

  // Handle game restart
  const handleRestart = () => {
    setLives(3);
    setScore(0);
    setRound(1);
    setGameOver(false);
    setFeedback({ type: null, message: '' });
    setHintShown(false);
    setPuzzle(generatePuzzle(1));
  };

  // Handle quit
  const handleQuit = () => {
    router.push('/');
  };

  if (!puzzle) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">🎮</div>
        <p>Loading game...</p>
      </div>
    );
  }

  return (
    <main className="game-page">
      {gameOver && <GameOverScreen score={score} onRestart={handleRestart} />}

      <div className="game-header">
        <button onClick={handleQuit} className="quit-button">
          ← Quit
        </button>
        <ScoreCounter score={score} round={round} />
        <LivesCounter lives={lives} />
      </div>

      <div className={`game-content ${isShaking ? 'shake' : ''}`}>
        <EmojiDisplay puzzle={puzzle} />
        
        <FeedbackMessage type={feedback.type} message={feedback.message} />

        <GuessInput
          onSubmit={handleGuess}
          onHint={handleHint}
          disabled={gameOver || feedback.type === 'correct'}
          showHintButton={!hintShown}
        />
      </div>

      <div className="game-footer">
        <p className="footer-tip">
          💡 Type the word or phrase the emojis represent!
        </p>
      </div>
    </main>
  );
}
