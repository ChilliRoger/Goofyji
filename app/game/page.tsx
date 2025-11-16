"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import EmojiDisplay from "@/components/EmojiDisplay";
import GuessInput from "@/components/GuessInput";
import LivesCounter from "@/components/LivesCounter";
import ScoreCounter from "@/components/ScoreCounter";
import FeedbackMessage from "@/components/FeedbackMessage";
import GameOverScreen from "@/components/GameOverScreen";
import Timer from "@/components/Timer";
import {
  generatePuzzle,
  checkAnswerWithAlternatives,
  getHint,
} from "@/lib/puzzleGenerator";
import {
  playCorrectSound,
  playWrongSound,
  playGameOverSound,
} from "@/lib/soundManager";
import type { Puzzle } from "@/lib/puzzleGenerator";

export default function GamePage() {
  const router = useRouter();
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "correct" | "wrong" | "hint" | null;
    message: string;
  }>({ type: null, message: "" });
  const [hintShown, setHintShown] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [timerReset, setTimerReset] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);

  // Generate initial puzzle
  useEffect(() => {
    setPuzzle(generatePuzzle(1));
    setIsTimerActive(true);
    setTimerReset((prev) => prev + 1);
  }, []);

  // Handle guess submission
  const handleGuess = (guess: string) => {
    if (!puzzle || gameOver) return;

    const isCorrect = checkAnswerWithAlternatives(guess, puzzle.items);

    if (isCorrect) {
      // Correct answer - increment score and move to next round
      setIsTimerActive(false);
      playCorrectSound();
      setScore(score + 1);
      setFeedback({
        type: "correct",
        message: `Correct! The answer was "${puzzle.answer}"`,
      });

      // Generate next puzzle after a short delay
      setTimeout(() => {
        const nextRound = round + 1;
        setRound(nextRound);
        setPuzzle(generatePuzzle(nextRound));
        setFeedback({ type: null, message: "" });
        setHintShown(false);
        setIsTimerActive(true);
        setTimerReset((prev) => prev + 1);
      }, 1500);
    } else {
      // Wrong answer - show correct answer and move to next round (no life lost)
      setIsTimerActive(false);
      playWrongSound();
      setIsShaking(true);

      setFeedback({
        type: "wrong",
        message: `Wrong! The answer was "${puzzle.answer}"`,
      });

      // Remove shake animation
      setTimeout(() => setIsShaking(false), 500);

      // Move to next round after showing the correct answer
      setTimeout(() => {
        const nextRound = round + 1;
        setRound(nextRound);
        setPuzzle(generatePuzzle(nextRound));
        setFeedback({ type: null, message: "" });
        setHintShown(false);
        setIsTimerActive(true);
        setTimerReset((prev) => prev + 1);
      }, 2500);
    }
  };

  // Handle timer running out
  const handleTimeUp = () => {
    if (gameOver || feedback.type === "correct") return;

    playWrongSound();
    const newLives = lives - 1;
    setLives(newLives);
    setIsShaking(true);
    setIsTimerActive(false);

    setFeedback({
      type: "wrong",
      message:
        newLives > 0
          ? `Time's up! The answer was "${puzzle?.answer}"`
          : "Game Over!",
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
      // Move to next round after showing the correct answer
      setTimeout(() => {
        const nextRound = round + 1;
        setRound(nextRound);
        setPuzzle(generatePuzzle(nextRound));
        setFeedback({ type: null, message: "" });
        setHintShown(false);
        setIsTimerActive(true);
        setTimerReset((prev) => prev + 1);
      }, 2500);
    }
  };

  // Handle hint request
  const handleHint = () => {
    if (!puzzle || hintShown || gameOver) return;

    const hint = getHint(puzzle.answer);
    setFeedback({
      type: "hint",
      message: `Hint: The answer starts with "${hint}"`,
    });
    setHintShown(true);

    // Clear hint after a delay
    setTimeout(() => {
      setFeedback({ type: null, message: "" });
    }, 3000);
  };

  // Handle game restart
  const handleRestart = () => {
    setLives(3);
    setScore(0);
    setRound(1);
    setGameOver(false);
    setFeedback({ type: null, message: "" });
    setHintShown(false);
    setPuzzle(generatePuzzle(1));
    setIsTimerActive(true);
    setTimerReset((prev) => prev + 1);
  };

  // Handle quit
  const handleQuit = () => {
    router.push("/");
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

      <div className={`game-content ${isShaking ? "shake" : ""}`}>
        <Timer
          duration={15}
          onTimeUp={handleTimeUp}
          isActive={isTimerActive}
          onReset={timerReset}
        />

        <EmojiDisplay puzzle={puzzle} />

        <FeedbackMessage type={feedback.type} message={feedback.message} />

        <GuessInput
          onSubmit={handleGuess}
          onHint={handleHint}
          disabled={gameOver || feedback.type === "correct"}
          showHintButton={!hintShown}
        />
      </div>

      <div className="game-footer">
        <p className="footer-tip">
          💡 Type the word or phrase the emojis represent! Wrong answers won't
          cost lives - only running out of time will! ⏱️
        </p>
      </div>
    </main>
  );
}
