# 🎮 Goofyji - Emoji Guessing Game

A fun, engaging emoji-based word guessing game built with Next.js 14. Guess the word from emoji combinations that get progressively harder!

![Goofyji Game](https://img.shields.io/badge/Next.js-14-black) ![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Game Features

- **Infinite Rounds**: Endless emoji puzzles to keep you entertained
- **Progressive Difficulty**: Starts easy and gets harder as you advance
  - Rounds 1-5: 2 emojis (Easy)
  - Rounds 6-10: 3 emojis (Medium-Easy)
  - Rounds 11-15: 4 emojis (Medium)
  - Rounds 16-20: 4 emojis (Medium-Hard)
  - Rounds 21+: 5+ emojis (Very Hard)
- **Lives System**: Start with 3 lives, lose one for each wrong answer
- **Dynamic Puzzle Generation**: Over 400+ emoji items randomly combined
- **Funny Sounds**: Sound effects for correct/wrong answers, game start, and game over
- **Epic Roasts**: Get hilariously roasted when you lose!
- **Hint System**: Get the first letter as a hint when stuck
- **Confetti Celebration**: Visual celebration on correct answers
- **Mobile Responsive**: Fully optimized for mobile, tablet, and desktop

## 🚀 Getting Started

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

## 🎮 How to Play

1. **Start the Game**: Click the "Start Game" button on the home page
2. **Read the Emojis**: Look at the emoji combination displayed
3. **Type Your Guess**: Enter the word or phrase the emojis represent
4. **Submit**: Click Submit or press Enter
5. **Correct Answer**: Earn points and move to the next harder puzzle! 🎉
6. **Wrong Answer**: Lose a life and try again! ❌
7. **Game Over**: When you run out of lives, get roasted and try again! 🔥

### Tips:

- Answers can be compound words (e.g., "hotdog" or "hot dog")
- Case doesn't matter
- Spaces, hyphens, and underscores are ignored
- Use the hint button to get the first letter
- Don't take the roasts personally! 😄

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Plain CSS with CSS animations
- **Effects**: [react-confetti](https://github.com/alampros/react-confetti)
- **Sounds**: Free sound effects from [Freesound.org](https://freesound.org/)

## 📁 Project Structure

```
Goofyji/
├── app/
│   ├── game/
│   │   └── page.tsx          # Main game page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home/landing page
│   └── globals.css            # Global styles
├── components/
│   ├── EmojiDisplay.tsx       # Emoji puzzle display
│   ├── FeedbackMessage.tsx    # Feedback with confetti
│   ├── GameOverScreen.tsx     # Game over overlay
│   ├── GuessInput.tsx         # Input for user guesses
│   ├── LivesCounter.tsx       # Hearts display
│   └── ScoreCounter.tsx       # Score and round display
├── lib/
│   ├── emojiData.ts           # 400+ emoji items database
│   ├── puzzleGenerator.ts     # Puzzle generation logic
│   ├── roastGenerator.ts      # Funny roast generator
│   └── soundManager.ts        # Sound system
├── public/
│   └── sounds/                # Sound effects (optional local hosting)
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎨 Customization

### Adding More Emoji Items

Edit `lib/emojiData.ts` to add more emoji items to any difficulty tier:

```typescript
const easyItems: EmojiItem[] = [
  { word: "newword", emoji: "🆕", difficulty: "easy" },
  // ... more items
];
```

### Adjusting Difficulty

Modify the difficulty scaling in `lib/puzzleGenerator.ts`:

```typescript
export function generatePuzzle(round: number): Puzzle {
  // Adjust the round thresholds here
  if (round <= 5) {
    // Easy logic
  }
  // ...
}
```

### Changing Sounds

Replace the sound URLs in `lib/soundManager.ts` with your own:

```typescript
export const SOUND_URLS = {
  correct: ["your-sound-url.mp3"],
  // ...
};
```

### Styling

All styles are in `app/globals.css`. Modify CSS variables in `:root` to change the theme:

```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
  /* ... more variables */
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended - Free)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your `Goofyji` repository
5. Click "Deploy"
6. Done! Your game is live 🎉

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ChilliRoger/Goofyji)

### Other Free Deployment Options

- **Netlify**: Connect your GitHub repo at [netlify.com](https://www.netlify.com/)
- **GitHub Pages**: Use `next export` (requires static export configuration)
- **Railway**: Deploy at [railway.app](https://railway.app/)

## 🧪 Testing

### Manual Testing Checklist

- [ ] Home page loads correctly
- [ ] Start button plays sound and navigates to game
- [ ] Emojis display properly
- [ ] Guess input accepts text and submits
- [ ] Correct answers increment score and generate new puzzle
- [ ] Wrong answers decrement lives
- [ ] Hint button shows first letter
- [ ] Game over screen appears when lives = 0
- [ ] Roast message is displayed and randomized
- [ ] Restart button resets game state
- [ ] Difficulty increases with rounds
- [ ] Sound effects play correctly
- [ ] Confetti appears on correct guess
- [ ] Responsive on mobile devices
- [ ] Works with different answer formats (spaces, hyphens, etc.)

### Browser Testing

Test on:

- Chrome/Edge
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 ChilliRoger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Sound effects from [Freesound.org](https://freesound.org/) (Creative Commons)
- Confetti library: [react-confetti](https://github.com/alampros/react-confetti)
- Built with [Next.js](https://nextjs.org/)
- Emoji support from Unicode Consortium

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

ChilliRoger - [@ChilliRoger](https://github.com/ChilliRoger)

Project Link: [https://github.com/ChilliRoger/Goofyji](https://github.com/ChilliRoger/Goofyji)

---

**Have fun playing Goofyji! Don't get roasted too hard! 🔥😄**
