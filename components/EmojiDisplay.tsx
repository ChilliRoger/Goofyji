'use client';

import { Puzzle } from '@/lib/puzzleGenerator';

interface EmojiDisplayProps {
  puzzle: Puzzle;
}

export default function EmojiDisplay({ puzzle }: EmojiDisplayProps) {
  return (
    <div className="emoji-display">
      <div className="emoji-container">
        {puzzle.emojis}
      </div>
      <div className="difficulty-badge">
        {puzzle.difficulty.toUpperCase()}
      </div>
    </div>
  );
}
