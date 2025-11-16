'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { playStartSound, preloadAllSounds } from '@/lib/soundManager';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Preload sounds on home page
    preloadAllSounds();
  }, []);

  const handleStartGame = () => {
    playStartSound();
    setTimeout(() => {
      router.push('/game');
    }, 300);
  };

  return (
    <main className="home-page">
      <div className="home-container">
        <h1 className="game-title">
          <span className="title-emoji">🎮</span>
          Goofyji
          <span className="title-emoji">🎮</span>
        </h1>
        
        <p className="game-description">
          Guess the word from emojis!
          <br />
          Gets harder as you go! 🔥
        </p>

        <div className="features">
          <div className="feature">
            <span className="feature-emoji">🧩</span>
            <span>Infinite Rounds</span>
          </div>
          <div className="feature">
            <span className="feature-emoji">📈</span>
            <span>Increasing Difficulty</span>
          </div>
          <div className="feature">
            <span className="feature-emoji">❤️</span>
            <span>3 Lives</span>
          </div>
          <div className="feature">
            <span className="feature-emoji">🔥</span>
            <span>Epic Roasts</span>
          </div>
        </div>

        <button onClick={handleStartGame} className="start-button">
          Start Game
        </button>

        <div className="instructions">
          <h3>How to Play:</h3>
          <ul>
            <li>Look at the emoji combination</li>
            <li>Type the word or phrase they represent</li>
            <li>Get it right to earn points!</li>
            <li>Get it wrong and lose a life 💔</li>
            <li>Survive as long as you can!</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
