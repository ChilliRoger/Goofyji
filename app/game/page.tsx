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
import CategorySelector from "@/components/CategorySelector";
import RoundResultPopup from "@/components/RoundResultPopup";
import {
  generatePuzzle,
  checkAnswerWithAlternatives,
  checkPuzzleAnswer,
  getHint,
} from "@/lib/puzzleGenerator";
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
  const [category, setCategory] = useState<
    "objects" | "actions" | "nature" | "food" | "mixed" | null
  >(null);
  const [showCategorySelector, setShowCategorySelector] = useState(true);
  const [showRoundResult, setShowRoundResult] = useState(false);
  const [roundResultCorrect, setRoundResultCorrect] = useState(false);
  const [usedPuzzleAnswers, setUsedPuzzleAnswers] = useState<Set<string>>(
    new Set()
  );
  const [timeUpProcessed, setTimeUpProcessed] = useState(false);

  // Generate initial puzzle
  useEffect(() => {
    if (category) {
      const newPuzzle = generatePuzzle(1, category);
      setPuzzle(newPuzzle);
      setUsedPuzzleAnswers(new Set([newPuzzle.answer]));
      setIsTimerActive(true);
      setTimerReset((prev) => prev + 1);
    }
  }, [category]);

  // Handle category selection
  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(
      selectedCategory as "objects" | "actions" | "nature" | "food" | "mixed"
    );
    setShowCategorySelector(false);
  };

  // Handle guess submission
  const handleGuess = (guess: string) => {
    if (!puzzle || gameOver) return;

    const isCorrect = checkPuzzleAnswer(guess, puzzle);

    if (isCorrect) {
      // Correct answer - pause timer and show popup
      setIsTimerActive(false);
      setScore(score + 1);
      setRoundResultCorrect(true);
      setShowRoundResult(true);
      setFeedback({
        type: "correct",
        message: `Correct! The answer was "${puzzle.answer}"`,
      });
    } else {
      // Wrong answer - show feedback but don't move to next round
      setIsShaking(true);

      setFeedback({
        type: "wrong",
        message: "Try again!",
      });

      // Remove shake animation
      setTimeout(() => setIsShaking(false), 500);

      // Clear feedback after a delay
      setTimeout(() => {
        setFeedback({ type: null, message: "" });
      }, 2000);
    }
  };

  // Handle timer running out
  const handleTimeUp = () => {
    if (gameOver || showRoundResult || timeUpProcessed) return;

    setTimeUpProcessed(true);
    const newLives = lives - 1;
    setLives(newLives);
    setIsShaking(true);
    setIsTimerActive(false);
    setRoundResultCorrect(false);
    setShowRoundResult(true);

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
      setTimeout(() => {
        setGameOver(true);
        setShowRoundResult(false);
      }, 1000);
    }
  };

  // Handle next round button click
  const handleNextRound = () => {
    // Immediately stop timer and hide result
    setIsTimerActive(false);
    setShowRoundResult(false);
    setTimeUpProcessed(false); // Reset the time up flag

    const nextRound = round + 1;
    setRound(nextRound);

    // Generate a new puzzle that hasn't been used
    let newPuzzle = generatePuzzle(nextRound, category!);
    let attempts = 0;
    const maxAttempts = 50;

    // Try to find a puzzle that hasn't been used yet
    while (usedPuzzleAnswers.has(newPuzzle.answer) && attempts < maxAttempts) {
      newPuzzle = generatePuzzle(nextRound, category!);
      attempts++;
    }

    // Add the new puzzle answer to used set
    setUsedPuzzleAnswers((prev) => new Set([...prev, newPuzzle.answer]));

    setPuzzle(newPuzzle);
    setFeedback({ type: null, message: "" });
    setHintShown(false);

    // Reset timer counter first, then activate after a small delay
    setTimerReset((prev) => prev + 1);

    // Small delay to ensure timer is fully reset before activating
    requestAnimationFrame(() => {
      setIsTimerActive(true);
    });
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
    setTimeUpProcessed(false);
    setUsedPuzzleAnswers(new Set());
    const newPuzzle = generatePuzzle(1, category!);
    setPuzzle(newPuzzle);
    setUsedPuzzleAnswers(new Set([newPuzzle.answer]));
    setIsTimerActive(true);
    setTimerReset((prev) => prev + 1);
  };

  // Handle quit
  const handleQuit = () => {
    router.push("/");
  };

  // Show category selector first
  if (showCategorySelector) {
    return <CategorySelector onSelect={handleCategorySelect} />;
  }

  // Show loading screen while puzzle is being generated
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

      {showRoundResult && puzzle && (
        <RoundResultPopup
          isCorrect={roundResultCorrect}
          correctAnswer={puzzle.answer}
          onNextRound={handleNextRound}
        />
      )}

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
          isActive={isTimerActive && !showRoundResult}
          onReset={timerReset}
        />

        <EmojiDisplay puzzle={puzzle} />

        <FeedbackMessage type={feedback.type} message={feedback.message} />

        <GuessInput
          onSubmit={handleGuess}
          onHint={handleHint}
          disabled={gameOver || showRoundResult}
          showHintButton={!hintShown && !showRoundResult}
        />
      </div>
    </main>
  );
}
