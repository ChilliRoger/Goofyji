// Categorized emoji data for the game

export interface CategorizedEmojiItem {
  word: string;
  emoji: string;
  difficulty: "easy" | "medium" | "hard";
  category: "objects" | "actions" | "nature" | "food";
}

// Food & Drinks Category
export const foodItems: CategorizedEmojiItem[] = [
  // Easy
  { word: "apple", emoji: "🍎", difficulty: "easy", category: "food" },
  { word: "banana", emoji: "🍌", difficulty: "easy", category: "food" },
  { word: "pizza", emoji: "🍕", difficulty: "easy", category: "food" },
  { word: "burger", emoji: "🍔", difficulty: "easy", category: "food" },
  { word: "coffee", emoji: "☕", difficulty: "easy", category: "food" },
  { word: "cake", emoji: "🍰", difficulty: "easy", category: "food" },
  { word: "bread", emoji: "🍞", difficulty: "easy", category: "food" },
  { word: "cheese", emoji: "🧀", difficulty: "easy", category: "food" },
  { word: "egg", emoji: "🥚", difficulty: "easy", category: "food" },
  { word: "milk", emoji: "🥛", difficulty: "easy", category: "food" },
  { word: "ice", emoji: "🧊", difficulty: "easy", category: "food" },
  { word: "cream", emoji: "🍦", difficulty: "easy", category: "food" },
  { word: "candy", emoji: "🍬", difficulty: "easy", category: "food" },
  { word: "cookie", emoji: "🍪", difficulty: "easy", category: "food" },
  { word: "pop", emoji: "🎈", difficulty: "easy", category: "food" },
  { word: "corn", emoji: "🌽", difficulty: "easy", category: "food" },
  { word: "water", emoji: "💧", difficulty: "easy", category: "food" },
  // Medium
  { word: "butter", emoji: "🧈", difficulty: "medium", category: "food" },
  { word: "peanut", emoji: "🥜", difficulty: "medium", category: "food" },
  { word: "jelly", emoji: "🍇", difficulty: "medium", category: "food" },
  { word: "jam", emoji: "🍓", difficulty: "medium", category: "food" },
  { word: "honey", emoji: "🍯", difficulty: "medium", category: "food" },
  { word: "sauce", emoji: "🥫", difficulty: "medium", category: "food" },
  { word: "rice", emoji: "🍚", difficulty: "medium", category: "food" },
  { word: "noodle", emoji: "🍜", difficulty: "medium", category: "food" },
  { word: "soup", emoji: "🍲", difficulty: "medium", category: "food" },
  { word: "meat", emoji: "🥩", difficulty: "medium", category: "food" },
  { word: "bacon", emoji: "🥓", difficulty: "medium", category: "food" },
  // Hard
  { word: "berry", emoji: "🍓", difficulty: "hard", category: "food" },
  { word: "cherry", emoji: "🍒", difficulty: "hard", category: "food" },
  { word: "peach", emoji: "🍑", difficulty: "hard", category: "food" },
  { word: "grape", emoji: "🍇", difficulty: "hard", category: "food" },
  { word: "melon", emoji: "🍉", difficulty: "hard", category: "food" },
  { word: "orange", emoji: "🍊", difficulty: "hard", category: "food" },
  { word: "lemon", emoji: "🍋", difficulty: "hard", category: "food" },
];

// Nature Category (Animals, Plants, Weather)
export const natureItems: CategorizedEmojiItem[] = [
  // Easy
  { word: "dog", emoji: "🐕", difficulty: "easy", category: "nature" },
  { word: "cat", emoji: "🐱", difficulty: "easy", category: "nature" },
  { word: "bee", emoji: "🐝", difficulty: "easy", category: "nature" },
  { word: "bird", emoji: "🐦", difficulty: "easy", category: "nature" },
  { word: "fish", emoji: "🐟", difficulty: "easy", category: "nature" },
  { word: "bear", emoji: "🐻", difficulty: "easy", category: "nature" },
  { word: "pig", emoji: "🐷", difficulty: "easy", category: "nature" },
  { word: "cow", emoji: "🐄", difficulty: "easy", category: "nature" },
  { word: "monkey", emoji: "🐵", difficulty: "easy", category: "nature" },
  { word: "lion", emoji: "🦁", difficulty: "easy", category: "nature" },
  { word: "tiger", emoji: "🐯", difficulty: "easy", category: "nature" },
  { word: "mouse", emoji: "🐭", difficulty: "easy", category: "nature" },
  { word: "rabbit", emoji: "🐰", difficulty: "easy", category: "nature" },
  { word: "frog", emoji: "🐸", difficulty: "easy", category: "nature" },
  { word: "tree", emoji: "🌲", difficulty: "easy", category: "nature" },
  { word: "flower", emoji: "🌸", difficulty: "easy", category: "nature" },
  { word: "sun", emoji: "☀️", difficulty: "easy", category: "nature" },
  { word: "moon", emoji: "🌙", difficulty: "easy", category: "nature" },
  { word: "star", emoji: "⭐", difficulty: "easy", category: "nature" },
  { word: "fire", emoji: "🔥", difficulty: "easy", category: "nature" },
  { word: "snow", emoji: "❄️", difficulty: "easy", category: "nature" },
  { word: "rain", emoji: "🌧️", difficulty: "easy", category: "nature" },
  // Medium
  { word: "storm", emoji: "⛈️", difficulty: "medium", category: "nature" },
  { word: "thunder", emoji: "⚡", difficulty: "medium", category: "nature" },
  { word: "cloud", emoji: "☁️", difficulty: "medium", category: "nature" },
  { word: "rainbow", emoji: "🌈", difficulty: "medium", category: "nature" },
  { word: "wind", emoji: "💨", difficulty: "medium", category: "nature" },
  { word: "wave", emoji: "🌊", difficulty: "medium", category: "nature" },
  { word: "ocean", emoji: "🌊", difficulty: "medium", category: "nature" },
  { word: "mountain", emoji: "⛰️", difficulty: "medium", category: "nature" },
  { word: "forest", emoji: "🌲", difficulty: "medium", category: "nature" },
  { word: "leaf", emoji: "🍃", difficulty: "medium", category: "nature" },
  { word: "rose", emoji: "🌹", difficulty: "medium", category: "nature" },
  // Hard
  { word: "dragon", emoji: "🐉", difficulty: "hard", category: "nature" },
  { word: "whale", emoji: "🐋", difficulty: "hard", category: "nature" },
  { word: "dolphin", emoji: "🐬", difficulty: "hard", category: "nature" },
  { word: "shark", emoji: "🦈", difficulty: "hard", category: "nature" },
  { word: "octopus", emoji: "🐙", difficulty: "hard", category: "nature" },
];

// Objects Category
export const objectItems: CategorizedEmojiItem[] = [
  // Easy
  { word: "ball", emoji: "⚽", difficulty: "easy", category: "objects" },
  { word: "book", emoji: "📖", difficulty: "easy", category: "objects" },
  { word: "car", emoji: "🚗", difficulty: "easy", category: "objects" },
  { word: "house", emoji: "🏠", difficulty: "easy", category: "objects" },
  { word: "phone", emoji: "📱", difficulty: "easy", category: "objects" },
  { word: "key", emoji: "🔑", difficulty: "easy", category: "objects" },
  { word: "door", emoji: "🚪", difficulty: "easy", category: "objects" },
  { word: "bell", emoji: "🔔", difficulty: "easy", category: "objects" },
  { word: "light", emoji: "💡", difficulty: "easy", category: "objects" },
  { word: "bow", emoji: "🎀", difficulty: "easy", category: "objects" },
  { word: "ring", emoji: "💍", difficulty: "easy", category: "objects" },
  { word: "crown", emoji: "👑", difficulty: "easy", category: "objects" },
  { word: "hat", emoji: "🎩", difficulty: "easy", category: "objects" },
  { word: "shirt", emoji: "👕", difficulty: "easy", category: "objects" },
  { word: "shoe", emoji: "👟", difficulty: "easy", category: "objects" },
  { word: "watch", emoji: "⌚", difficulty: "easy", category: "objects" },
  { word: "bag", emoji: "💼", difficulty: "easy", category: "objects" },
  { word: "pen", emoji: "🖊️", difficulty: "easy", category: "objects" },
  { word: "paper", emoji: "📄", difficulty: "easy", category: "objects" },
  { word: "rock", emoji: "🪨", difficulty: "easy", category: "objects" },
  { word: "bomb", emoji: "💣", difficulty: "easy", category: "objects" },
  { word: "gun", emoji: "🔫", difficulty: "easy", category: "objects" },
  { word: "knife", emoji: "🔪", difficulty: "easy", category: "objects" },
  { word: "lock", emoji: "🔒", difficulty: "easy", category: "objects" },
  { word: "chain", emoji: "⛓️", difficulty: "easy", category: "objects" },
  { word: "box", emoji: "📦", difficulty: "easy", category: "objects" },
  { word: "gift", emoji: "🎁", difficulty: "easy", category: "objects" },
  { word: "flag", emoji: "🚩", difficulty: "easy", category: "objects" },
  { word: "money", emoji: "💰", difficulty: "easy", category: "objects" },
  { word: "coin", emoji: "🪙", difficulty: "easy", category: "objects" },
  { word: "gem", emoji: "💎", difficulty: "easy", category: "objects" },
  // Medium
  { word: "clock", emoji: "🕐", difficulty: "medium", category: "objects" },
  { word: "glass", emoji: "🥃", difficulty: "medium", category: "objects" },
  { word: "bowl", emoji: "🎳", difficulty: "medium", category: "objects" },
  { word: "dice", emoji: "🎲", difficulty: "medium", category: "objects" },
  { word: "card", emoji: "🃏", difficulty: "medium", category: "objects" },
  { word: "trophy", emoji: "🏆", difficulty: "medium", category: "objects" },
  { word: "medal", emoji: "🏅", difficulty: "medium", category: "objects" },
  // Hard
  { word: "tool", emoji: "🔧", difficulty: "hard", category: "objects" },
  { word: "wrench", emoji: "🔧", difficulty: "hard", category: "objects" },
  { word: "hammer", emoji: "🔨", difficulty: "hard", category: "objects" },
  { word: "gear", emoji: "⚙️", difficulty: "hard", category: "objects" },
  { word: "wheel", emoji: "🎡", difficulty: "hard", category: "objects" },
  { word: "computer", emoji: "💻", difficulty: "hard", category: "objects" },
  { word: "camera", emoji: "📷", difficulty: "hard", category: "objects" },
  { word: "mirror", emoji: "🪞", difficulty: "hard", category: "objects" },
  { word: "window", emoji: "🪟", difficulty: "hard", category: "objects" },
];

// Actions Category
export const actionItems: CategorizedEmojiItem[] = [
  // Easy
  { word: "hot", emoji: "🔥", difficulty: "easy", category: "actions" },
  { word: "party", emoji: "🎉", difficulty: "easy", category: "actions" },
  { word: "music", emoji: "🎵", difficulty: "easy", category: "actions" },
  // Medium
  { word: "eye", emoji: "👁️", difficulty: "medium", category: "actions" },
  { word: "hand", emoji: "✋", difficulty: "medium", category: "actions" },
  { word: "heart", emoji: "❤️", difficulty: "medium", category: "actions" },
  { word: "break", emoji: "💔", difficulty: "medium", category: "actions" },
  { word: "love", emoji: "💕", difficulty: "medium", category: "actions" },
  { word: "kiss", emoji: "💋", difficulty: "medium", category: "actions" },
  { word: "cry", emoji: "😢", difficulty: "medium", category: "actions" },
  { word: "laugh", emoji: "😂", difficulty: "medium", category: "actions" },
  { word: "sleep", emoji: "😴", difficulty: "medium", category: "actions" },
  { word: "dream", emoji: "💭", difficulty: "medium", category: "actions" },
  { word: "think", emoji: "🤔", difficulty: "medium", category: "actions" },
  { word: "run", emoji: "🏃", difficulty: "medium", category: "actions" },
  { word: "walk", emoji: "🚶", difficulty: "medium", category: "actions" },
  { word: "jump", emoji: "🦘", difficulty: "medium", category: "actions" },
  { word: "dance", emoji: "💃", difficulty: "medium", category: "actions" },
  { word: "sing", emoji: "🎤", difficulty: "medium", category: "actions" },
  { word: "play", emoji: "🎮", difficulty: "medium", category: "actions" },
  { word: "work", emoji: "💼", difficulty: "medium", category: "actions" },
  { word: "read", emoji: "📚", difficulty: "medium", category: "actions" },
  { word: "write", emoji: "✍️", difficulty: "medium", category: "actions" },
  { word: "draw", emoji: "🎨", difficulty: "medium", category: "actions" },
  { word: "paint", emoji: "🖌️", difficulty: "medium", category: "actions" },
  { word: "cut", emoji: "✂️", difficulty: "medium", category: "actions" },
  { word: "fly", emoji: "✈️", difficulty: "medium", category: "actions" },
  { word: "sail", emoji: "⛵", difficulty: "medium", category: "actions" },
  // Hard
  { word: "fight", emoji: "🥊", difficulty: "hard", category: "actions" },
  { word: "smile", emoji: "😊", difficulty: "hard", category: "actions" },
  { word: "grin", emoji: "😁", difficulty: "hard", category: "actions" },
  { word: "wink", emoji: "😉", difficulty: "hard", category: "actions" },
  { word: "shock", emoji: "😱", difficulty: "hard", category: "actions" },
  { word: "scream", emoji: "😱", difficulty: "hard", category: "actions" },
  { word: "yell", emoji: "📣", difficulty: "hard", category: "actions" },
  { word: "whisper", emoji: "🤫", difficulty: "hard", category: "actions" },
];

// Combined data by category
export function getItemsByCategory(
  category: "objects" | "actions" | "nature" | "food" | "mixed"
): CategorizedEmojiItem[] {
  if (category === "mixed") {
    return [...foodItems, ...natureItems, ...objectItems, ...actionItems];
  }
  
  switch (category) {
    case "food":
      return foodItems;
    case "nature":
      return natureItems;
    case "objects":
      return objectItems;
    case "actions":
      return actionItems;
    default:
      return [...foodItems, ...natureItems, ...objectItems, ...actionItems];
  }
}

// Get items by category and difficulty
export function getItemsByCategoryAndDifficulty(
  category: "objects" | "actions" | "nature" | "food" | "mixed",
  difficulty: "easy" | "medium" | "hard"
): CategorizedEmojiItem[] {
  const categoryItems = getItemsByCategory(category);
  return categoryItems.filter((item) => item.difficulty === difficulty);
}

// Get random items from category and difficulty
export function getRandomCategoryItems(
  category: "objects" | "actions" | "nature" | "food" | "mixed",
  difficulty: "easy" | "medium" | "hard",
  count: number
): CategorizedEmojiItem[] {
  const items = getItemsByCategoryAndDifficulty(category, difficulty);
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
