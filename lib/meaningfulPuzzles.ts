// Predefined meaningful word combinations for better gameplay

export interface MeaningfulPuzzle {
  emojis: string[];
  answer: string;
  difficulty: "easy" | "medium" | "hard";
  category: "objects" | "actions" | "nature" | "food" | "mixed";
}

// Easy meaningful combinations
const easyPuzzles: MeaningfulPuzzle[] = [
  // Food combinations
  {
    emojis: ["🍎", "🥧"],
    answer: "applepie",
    difficulty: "easy",
    category: "food",
  },
  {
    emojis: ["🔥", "🐕"],
    answer: "hotdog",
    difficulty: "easy",
    category: "food",
  },
  {
    emojis: ["🍿", "🌽"],
    answer: "popcorn",
    difficulty: "easy",
    category: "food",
  },
  {
    emojis: ["🥜", "🧈"],
    answer: "peanutbutter",
    difficulty: "easy",
    category: "food",
  },
  {
    emojis: ["🧊", "🍦"],
    answer: "icecream",
    difficulty: "easy",
    category: "food",
  },
  {
    emojis: ["🍰", "🧀"],
    answer: "cheesecake",
    difficulty: "easy",
    category: "food",
  },
  {
    emojis: ["☕", "🥛"],
    answer: "coffeemilk",
    difficulty: "easy",
    category: "food",
  },
  {
    emojis: ["🍞", "🧈"],
    answer: "breadbutter",
    difficulty: "easy",
    category: "food",
  },
  {
    emojis: ["🥚", "🍞"],
    answer: "eggbread",
    difficulty: "easy",
    category: "food",
  },
  {
    emojis: ["🍕", "🧀"],
    answer: "cheesepizza",
    difficulty: "easy",
    category: "food",
  },

  // Objects
  {
    emojis: ["⚽", "⚾"],
    answer: "ballgame",
    difficulty: "easy",
    category: "objects",
  },
  {
    emojis: ["🎂", "🎁"],
    answer: "birthdaygift",
    difficulty: "easy",
    category: "objects",
  },
  {
    emojis: ["📱", "📞"],
    answer: "cellphone",
    difficulty: "easy",
    category: "objects",
  },
  {
    emojis: ["🔑", "🚪"],
    answer: "doorkey",
    difficulty: "easy",
    category: "objects",
  },
  {
    emojis: ["👑", "👸"],
    answer: "queencrown",
    difficulty: "easy",
    category: "objects",
  },
  {
    emojis: ["💡", "🏠"],
    answer: "houselight",
    difficulty: "easy",
    category: "objects",
  },
  {
    emojis: ["📖", "📚"],
    answer: "bookshelf",
    difficulty: "easy",
    category: "objects",
  },
  {
    emojis: ["🚗", "🔑"],
    answer: "carkey",
    difficulty: "easy",
    category: "objects",
  },
  {
    emojis: ["⌚", "✋"],
    answer: "wristwatch",
    difficulty: "easy",
    category: "objects",
  },
  {
    emojis: ["🎩", "👑"],
    answer: "crownhat",
    difficulty: "easy",
    category: "objects",
  },

  // Nature
  {
    emojis: ["🌞", "🌟"],
    answer: "sunshine",
    difficulty: "easy",
    category: "nature",
  },
  {
    emojis: ["🌧️", "🌈"],
    answer: "rainbow",
    difficulty: "easy",
    category: "nature",
  },
  {
    emojis: ["🌲", "🏠"],
    answer: "treehouse",
    difficulty: "easy",
    category: "nature",
  },
  {
    emojis: ["🐝", "🍯"],
    answer: "honeybee",
    difficulty: "easy",
    category: "nature",
  },
  {
    emojis: ["🐱", "🐟"],
    answer: "catfish",
    difficulty: "easy",
    category: "nature",
  },
  {
    emojis: ["⭐", "🐟"],
    answer: "starfish",
    difficulty: "easy",
    category: "nature",
  },
  {
    emojis: ["🔥", "🐛"],
    answer: "firefly",
    difficulty: "easy",
    category: "nature",
  },
  {
    emojis: ["🌙", "💡"],
    answer: "moonlight",
    difficulty: "easy",
    category: "nature",
  },
  {
    emojis: ["☀️", "🌸"],
    answer: "sunflower",
    difficulty: "easy",
    category: "nature",
  },
  {
    emojis: ["💧", "🌊"],
    answer: "seawater",
    difficulty: "easy",
    category: "nature",
  },

  // Actions
  {
    emojis: ["🏃", "🏃"],
    answer: "running",
    difficulty: "easy",
    category: "actions",
  },
  {
    emojis: ["💤", "😴"],
    answer: "sleeping",
    difficulty: "easy",
    category: "actions",
  },
  {
    emojis: ["💃", "🎵"],
    answer: "dancing",
    difficulty: "easy",
    category: "actions",
  },
  {
    emojis: ["😂", "😊"],
    answer: "laughing",
    difficulty: "easy",
    category: "actions",
  },
  {
    emojis: ["💕", "❤️"],
    answer: "loving",
    difficulty: "easy",
    category: "actions",
  },

  // Mixed
  {
    emojis: ["🐕", "🏠"],
    answer: "doghouse",
    difficulty: "easy",
    category: "mixed",
  },
  {
    emojis: ["🌲", "⭐"],
    answer: "christmastree",
    difficulty: "easy",
    category: "mixed",
  },
  {
    emojis: ["🎮", "⚽"],
    answer: "ballgame",
    difficulty: "easy",
    category: "mixed",
  },
];

// Medium meaningful combinations
const mediumPuzzles: MeaningfulPuzzle[] = [
  // Food
  {
    emojis: ["🥜", "🧈", "🍇"],
    answer: "peanutbutterjelly",
    difficulty: "medium",
    category: "food",
  },
  {
    emojis: ["🍓", "🍰", "🍦"],
    answer: "strawberrycake",
    difficulty: "medium",
    category: "food",
  },
  {
    emojis: ["🌶️", "🌭", "🐕"],
    answer: "chillidog",
    difficulty: "medium",
    category: "food",
  },
  {
    emojis: ["🍎", "🍯", "🧈"],
    answer: "applehoneybutter",
    difficulty: "medium",
    category: "food",
  },
  {
    emojis: ["🧀", "🍔", "🥓"],
    answer: "cheeseburger",
    difficulty: "medium",
    category: "food",
  },

  // Objects
  {
    emojis: ["☀️", "👓", "😎"],
    answer: "sunglasses",
    difficulty: "medium",
    category: "objects",
  },
  {
    emojis: ["⌚", "⏰", "⏱️"],
    answer: "stopwatch",
    difficulty: "medium",
    category: "objects",
  },
  {
    emojis: ["🎮", "🎯", "🏀"],
    answer: "basketball",
    difficulty: "medium",
    category: "objects",
  },
  {
    emojis: ["📱", "📷", "📸"],
    answer: "camera phone",
    difficulty: "medium",
    category: "objects",
  },
  {
    emojis: ["🏠", "🚪", "🔑"],
    answer: "house key",
    difficulty: "medium",
    category: "objects",
  },

  // Nature
  {
    emojis: ["💧", "🌊", "💦"],
    answer: "waterfall",
    difficulty: "medium",
    category: "nature",
  },
  {
    emojis: ["⛰️", "🏔️", "❄️"],
    answer: "snowmountain",
    difficulty: "medium",
    category: "nature",
  },
  {
    emojis: ["🌙", "💡", "🌟"],
    answer: "moonlight",
    difficulty: "medium",
    category: "nature",
  },
  {
    emojis: ["🌧️", "⛈️", "⚡"],
    answer: "thunderstorm",
    difficulty: "medium",
    category: "nature",
  },
  {
    emojis: ["🌲", "🌲", "🌲"],
    answer: "forest",
    difficulty: "medium",
    category: "nature",
  },

  // Actions
  {
    emojis: ["💔", "😢", "💧"],
    answer: "heartbreak",
    difficulty: "medium",
    category: "actions",
  },
  {
    emojis: ["✋", "🤝", "✋"],
    answer: "handshake",
    difficulty: "medium",
    category: "actions",
  },
  {
    emojis: ["🎤", "🎵", "🎶"],
    answer: "singing",
    difficulty: "medium",
    category: "actions",
  },
  {
    emojis: ["🏃", "🏃", "💨"],
    answer: "fastrunning",
    difficulty: "medium",
    category: "actions",
  },

  // Mixed
  {
    emojis: ["🐕", "🏠", "🚪"],
    answer: "doghouse door",
    difficulty: "medium",
    category: "mixed",
  },
  {
    emojis: ["🎂", "🎉", "🎁"],
    answer: "birthday party",
    difficulty: "medium",
    category: "mixed",
  },
];

// Hard meaningful combinations
const hardPuzzles: MeaningfulPuzzle[] = [
  // Complex words - Nature
  {
    emojis: ["🦋", "🐛", "🌸"],
    answer: "butterfly",
    difficulty: "hard",
    category: "nature",
  },
  {
    emojis: ["🌈", "☔", "🌧️"],
    answer: "rainbowrain",
    difficulty: "hard",
    category: "nature",
  },
  {
    emojis: ["⚡", "⛈️", "💥"],
    answer: "thunderstorm",
    difficulty: "hard",
    category: "nature",
  },
  {
    emojis: ["🌊", "💧", "🌊"],
    answer: "oceanwave",
    difficulty: "hard",
    category: "nature",
  },
  {
    emojis: ["🐉", "🔥", "⚔️"],
    answer: "firedragon",
    difficulty: "hard",
    category: "nature",
  },

  // Objects
  {
    emojis: ["🏰", "👑", "🛡️"],
    answer: "kingdom",
    difficulty: "hard",
    category: "objects",
  },
  {
    emojis: ["💻", "⌨️", "🖱️"],
    answer: "computer",
    difficulty: "hard",
    category: "objects",
  },
  {
    emojis: ["📷", "📸", "💡"],
    answer: "flashcamera",
    difficulty: "hard",
    category: "objects",
  },

  // Actions
  {
    emojis: ["💔", "😭", "💧"],
    answer: "crying heartbreak",
    difficulty: "hard",
    category: "actions",
  },
  {
    emojis: ["🎨", "🖌️", "✍️"],
    answer: "painting",
    difficulty: "hard",
    category: "actions",
  },

  // Food
  {
    emojis: ["🥜", "🧈", "🍇", "🍞"],
    answer: "peanut butter jelly sandwich",
    difficulty: "hard",
    category: "food",
  },

  // Mixed
  {
    emojis: ["⚡", "⛈️", "🌧️", "💨"],
    answer: "thunderstorm",
    difficulty: "hard",
    category: "mixed",
  },
];

// Get puzzles by category and difficulty
export function getMeaningfulPuzzles(
  category: "objects" | "actions" | "nature" | "food" | "mixed",
  difficulty: "easy" | "medium" | "hard"
): MeaningfulPuzzle[] {
  const allPuzzles = [...easyPuzzles, ...mediumPuzzles, ...hardPuzzles];

  let filtered = allPuzzles.filter((p) => p.difficulty === difficulty);

  if (category !== "mixed") {
    filtered = filtered.filter((p) => p.category === category);
  }

  return filtered;
}

// Get a random meaningful puzzle
export function getRandomMeaningfulPuzzle(
  category: "objects" | "actions" | "nature" | "food" | "mixed",
  difficulty: "easy" | "medium" | "hard"
): MeaningfulPuzzle | null {
  const puzzles = getMeaningfulPuzzles(category, difficulty);

  if (puzzles.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * puzzles.length);
  return puzzles[randomIndex];
}
