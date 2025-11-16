import { EmojiItem, getRandomItemsFromTier, allItems } from "./emojiData";
import {
  CategorizedEmojiItem,
  getRandomCategoryItems,
} from "./categorizedEmojiData";
import {
  getRandomMeaningfulPuzzle,
  MeaningfulPuzzle,
} from "./meaningfulPuzzles";

export interface Puzzle {
  emojis: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
  items: EmojiItem[] | CategorizedEmojiItem[];
}

/**
 * Generate a puzzle based on the current round/score with category support
 * Uses predefined meaningful word combinations for better gameplay
 */
export function generatePuzzle(
  round: number,
  category?: "objects" | "actions" | "nature" | "food" | "mixed"
): Puzzle {
  let difficulty: "easy" | "medium" | "hard";

  // Determine difficulty based on round
  if (round <= 5) {
    difficulty = "easy";
  } else if (round <= 15) {
    difficulty = "medium";
  } else {
    difficulty = "hard";
  }

  // Try to get a meaningful puzzle first
  if (category) {
    const meaningfulPuzzle = getRandomMeaningfulPuzzle(category, difficulty);

    if (meaningfulPuzzle) {
      return {
        emojis: meaningfulPuzzle.emojis.join(" + "),
        answer: meaningfulPuzzle.answer,
        difficulty: meaningfulPuzzle.difficulty,
        items: [], // We don't need items for predefined puzzles
      };
    }
  }

  // Fallback to random combination if no meaningful puzzle found
  let itemCount: number;
  let selectedItems: CategorizedEmojiItem[] | EmojiItem[];

  if (round <= 5) {
    itemCount = 2;
  } else if (round <= 10) {
    itemCount = 3;
  } else if (round <= 15) {
    itemCount = 3;
  } else if (round <= 20) {
    itemCount = 4;
  } else {
    itemCount = 4;
  }

  // Use category-based selection if category is provided
  if (category) {
    selectedItems = getRandomCategoryItems(category, difficulty, itemCount);
  } else {
    selectedItems = getRandomItemsFromTier(difficulty, itemCount);
  }

  // Combine emojis and words with + separator
  const emojis = selectedItems.map((item) => item.emoji).join(" + ");
  const answer = selectedItems.map((item) => item.word).join("");

  return {
    emojis,
    answer,
    difficulty,
    items: selectedItems,
  };
}

/**
 * Check if the user's guess matches the answer
 * Case-insensitive, ignores spaces, hyphens, and underscores
 */
export function checkAnswer(guess: string, answer: string): boolean {
  const normalizeString = (str: string) =>
    str.toLowerCase().replace(/[\s\-_]/g, "");

  return normalizeString(guess) === normalizeString(answer);
}

/**
 * Get a hint for the current puzzle (first letter)
 */
export function getHint(answer: string): string {
  return answer.charAt(0).toUpperCase();
}

/**
 * Get alternative acceptable answers (for compound words that can be written differently)
 */
export function getAlternativeAnswers(
  items: EmojiItem[] | CategorizedEmojiItem[]
): string[] {
  const words = items.map((item) => item.word);

  // Generate variations: joined, space-separated, hyphenated
  const alternatives = [
    words.join(""), // "hotdog"
    words.join(" "), // "hot dog"
    words.join("-"), // "hot-dog"
    words.join("_"), // "hot_dog"
  ];

  return [...new Set(alternatives)]; // Remove duplicates
}

/**
 * Check if guess matches any alternative answer
 */
export function checkAnswerWithAlternatives(
  guess: string,
  items: EmojiItem[] | CategorizedEmojiItem[]
): boolean {
  // If items is empty, we're using a predefined puzzle
  // This shouldn't happen as we pass the answer directly
  if (!items || items.length === 0) {
    return false;
  }

  const alternatives = getAlternativeAnswers(items);
  const normalizedGuess = guess.toLowerCase().replace(/[\s\-_]/g, "");

  return alternatives.some((alt) => {
    const normalizedAlt = alt.toLowerCase().replace(/[\s\-_]/g, "");
    return normalizedGuess === normalizedAlt;
  });
}

/**
 * Check answer for any puzzle type (supports both predefined and generated)
 */
export function checkPuzzleAnswer(guess: string, puzzle: Puzzle): boolean {
  const normalizedGuess = guess.toLowerCase().replace(/[\s\-_]/g, "");
  const normalizedAnswer = puzzle.answer.toLowerCase().replace(/[\s\-_]/g, "");

  // Direct answer check
  if (normalizedGuess === normalizedAnswer) {
    return true;
  }

  // If we have items, check alternatives
  if (puzzle.items && puzzle.items.length > 0) {
    return checkAnswerWithAlternatives(guess, puzzle.items);
  }

  return false;
}
