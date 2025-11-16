import { EmojiItem, getRandomItemsFromTier, allItems } from "./emojiData";

export interface Puzzle {
  emojis: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
  items: EmojiItem[];
}

/**
 * Generate a puzzle based on the current round/score
 * Difficulty scaling:
 * - Rounds 1-5: 2 emojis, easy tier
 * - Rounds 6-10: 3 emojis, mix of easy and medium
 * - Rounds 11-15: 4 emojis, medium tier
 * - Rounds 16+: 4-5 emojis, mix of medium and hard
 */
export function generatePuzzle(round: number): Puzzle {
  let itemCount: number;
  let difficulty: "easy" | "medium" | "hard";
  let selectedItems: EmojiItem[];

  if (round <= 5) {
    // Easy: 2 items from easy tier
    itemCount = 2;
    difficulty = "easy";
    selectedItems = getRandomItemsFromTier("easy", itemCount);
  } else if (round <= 10) {
    // Medium-easy: 3 items, mix of easy and medium
    itemCount = 3;
    difficulty = "medium";
    const easyItems = getRandomItemsFromTier("easy", 2);
    const mediumItems = getRandomItemsFromTier("medium", 1);
    selectedItems = [...easyItems, ...mediumItems].sort(
      () => Math.random() - 0.5
    );
  } else if (round <= 15) {
    // Medium: 4 items from medium tier
    itemCount = 4;
    difficulty = "medium";
    selectedItems = getRandomItemsFromTier("medium", itemCount);
  } else if (round <= 20) {
    // Medium-hard: 4 items, mix of medium and hard
    itemCount = 4;
    difficulty = "hard";
    const mediumItems = getRandomItemsFromTier("medium", 2);
    const hardItems = getRandomItemsFromTier("hard", 2);
    selectedItems = [...mediumItems, ...hardItems].sort(
      () => Math.random() - 0.5
    );
  } else {
    // Very hard: 5 items, mostly hard tier
    itemCount = 5;
    difficulty = "hard";
    const mediumItems = getRandomItemsFromTier("medium", 1);
    const hardItems = getRandomItemsFromTier("hard", 4);
    selectedItems = [...mediumItems, ...hardItems].sort(
      () => Math.random() - 0.5
    );
  }

  // Combine emojis and words
  const emojis = selectedItems.map((item) => item.emoji).join(" ");
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
export function getAlternativeAnswers(items: EmojiItem[]): string[] {
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
  items: EmojiItem[]
): boolean {
  const alternatives = getAlternativeAnswers(items);
  const normalizedGuess = guess.toLowerCase().replace(/[\s\-_]/g, "");

  return alternatives.some((alt) => {
    const normalizedAlt = alt.toLowerCase().replace(/[\s\-_]/g, "");
    return normalizedGuess === normalizedAlt;
  });
}
