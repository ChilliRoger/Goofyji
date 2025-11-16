# Goofyji - Emoji Guessing Game

An interactive emoji-based word guessing game built with Next.js 14. Test your skills by decoding words from emoji combinations that increase in difficulty as you progress.

![Goofyji Game](https://img.shields.io/badge/Next.js-14-black) ![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Infinite Rounds**: Continuous gameplay with randomly generated emoji puzzles
- **Progressive Difficulty**: Complexity increases with each round
  - Rounds 1-5: 2 emojis (Easy)
  - Rounds 6-10: 3 emojis (Medium-Easy)
  - Rounds 11-15: 4 emojis (Medium)
  - Rounds 16-20: 4 emojis (Medium-Hard)
  - Rounds 21+: 5+ emojis (Very Hard)
- **Lives System**: Three lives per game with strategic hint usage
- **Dynamic Puzzle Generation**: Over 400 emoji items with intelligent combination logic
- **Audio Feedback**: Game over buzzer sound for enhanced user experience
- **Humorous Game Over Messages**: Entertaining roast messages when you lose
- **Hint System**: First letter hints available when needed
- **Visual Feedback**: Confetti celebration on correct answers
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Comic Theme**: Beige color palette with custom textures and bold typography

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ChilliRoger/Goofyji.git
cd Goofyji
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play!

## How to Play

1. **Start the Game**: Click the "Start Game" button on the home page
2. **View the Puzzle**: Examine the emoji combination displayed
3. **Enter Your Guess**: Type the word or phrase the emojis represent
4. **Submit**: Click Submit or press Enter to check your answer
5. **Correct Answer**: Earn points and advance to a more difficult puzzle
6. **Wrong Answer**: Lose a life and attempt again
7. **Game Over**: When all lives are depleted, view your final score and restart

### Game Rules

- Answers can be compound words with flexible formatting (e.g., "hotdog", "hot dog", "hot-dog")
- Input is case-insensitive
- Spaces, hyphens, and underscores are normalized during validation
- Use the hint button to reveal the first letter of the answer
- Each game starts with 3 lives
- Time-based rounds with visual timer feedback

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS with custom properties, animations, and responsive design
- **Visual Effects**: [react-confetti](https://github.com/alampros/react-confetti)
- **Audio**: Web Audio API for game over sound effects
- **Fonts**: Google Fonts (Pixelify Sans)

## Project Structure

```
Goofyji/
├── app/
│   ├── game/
│   │   └── page.tsx          # Main game page with timer and game logic
│   ├── guide/
│   │   └── page.tsx          # Emoji reference guide page
│   ├── layout.tsx             # Root layout with font imports
│   ├── page.tsx               # Home/landing page
│   └── globals.css            # Global styles and theme
├── components/
│   ├── CategorySelector.tsx   # Category selection screen
│   ├── EmojiDisplay.tsx       # Emoji puzzle display
│   ├── FeedbackMessage.tsx    # Feedback with confetti
│   ├── GameOverScreen.tsx     # Game over overlay with roasts
│   ├── GuessInput.tsx         # Input component for user guesses
│   ├── HelpPopup.tsx          # Help/instructions popup
│   ├── LivesCounter.tsx       # Lives display (hearts)
│   ├── RoundResult.tsx        # Round result display
│   ├── ScoreCounter.tsx       # Score and round display
│   └── Timer.tsx              # Visual countdown timer
├── lib/
│   ├── categorizedEmojiData.ts # Categorized emoji database (400+ items)
│   ├── emojiData.ts           # Emoji items by difficulty
│   ├── puzzleGenerator.ts     # Puzzle generation algorithm
│   └── roastGenerator.ts      # Roast message generator
├── utils/
│   └── gameOverSound.ts       # Web Audio API sound generation
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Customization

### Adding More Emoji Items

Edit `lib/categorizedEmojiData.ts` to add items to specific categories:

```typescript
export const categorizedEmojiData: CategoryData = {
  food: [
    { word: "newitem", emoji: "🆕", difficulty: "easy" },
    // Additional items
  ],
  // Other categories
};
```

### Adjusting Difficulty

Modify the difficulty scaling in `lib/puzzleGenerator.ts`:

```typescript
export function generatePuzzle(round: number): Puzzle {
  // Adjust the round thresholds
  if (round <= 5) {
    // Easy difficulty logic
  }
  // Additional difficulty tiers
}
```

### Customizing Sound

Modify the Web Audio API parameters in `utils/gameOverSound.ts`:

```typescript
// Adjust frequency, gain, or duration
oscillator.frequency.setValueAtTime(150, now);
gainNode.gain.setValueAtTime(0.3, now);
```

### Theme Customization

All styles are in `app/globals.css`. Modify CSS custom properties to change colors:

```css
:root {
  --color-beige: #e8d5b7;
  --color-terracotta: #c65d3b;
  --color-teal: #3d7c85;
  --color-gold: #e8b86d;
}
```

## Deployment

### Vercel Deployment (Recommended)

Deploy to [Vercel](https://vercel.com) for optimal Next.js hosting:

1. Push your code to a GitHub repository
2. Sign in to Vercel with your GitHub account
3. Click "New Project" and import your repository
4. Configure build settings (auto-detected for Next.js)
5. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ChilliRoger/Goofyji)

### Alternative Deployment Platforms

- **Netlify**: GitHub integration available at [netlify.com](https://www.netlify.com/)
- **Railway**: Container-based deployment at [railway.app](https://railway.app/)
- **AWS Amplify**: Serverless deployment with AWS infrastructure
- **DigitalOcean App Platform**: Managed application hosting

## Testing

### Manual Testing Checklist

- [ ] Home page loads and displays correctly
- [ ] Start button navigates to category selection
- [ ] Category selection displays all available categories
- [ ] Game page displays emojis properly
- [ ] Guess input accepts text and validates on submit
- [ ] Correct answers increment score and advance to next puzzle
- [ ] Wrong answers decrement lives with appropriate feedback
- [ ] Timer countdown functions correctly
- [ ] Hint button reveals first letter
- [ ] Game over screen appears when lives reach zero
- [ ] Game over buzzer sound plays without lag
- [ ] Roast messages display and vary on each game over
- [ ] Try Again button redirects to home page
- [ ] Difficulty progression works across rounds
- [ ] Confetti animation triggers on correct answers
- [ ] Help popup displays game instructions
- [ ] Guide page shows all emoji categories
- [ ] Responsive layout works on mobile devices (480px, 768px breakpoints)
- [ ] Answer validation handles various formats (spaces, hyphens, case)

### Browser Compatibility

Tested and supported on:

- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Mobile browsers (iOS Safari, Chrome Mobile)
