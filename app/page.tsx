"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { playStartSound, preloadAllSounds } from "@/lib/soundManager";
import HelpPopup from "@/components/HelpPopup";

export default function HomePage() {
  const router = useRouter();
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    // Preload sounds on home page
    preloadAllSounds();
  }, []);

  const handleStartGame = () => {
    playStartSound();
    setTimeout(() => {
      router.push("/game");
    }, 300);
  };

  return (
    <main className="home-page">
      {showHelp && <HelpPopup onClose={() => setShowHelp(false)} />}
      
      <div className="home-container">
        <h1 className="game-title">
           Goofyji 
        </h1>

        <div className="header-buttons">
          <button onClick={() => setShowHelp(true)} className="help-button">
            ❓ Help
          </button>
          <button onClick={() => router.push("/guide")} className="guide-button">
            📖 Emoji Guide
          </button>
        </div>

        <p className="game-description">
          🎮 Guess the word from emojis!
          <br />
          🔥 Gets harder as you go!
        </p>

        <div className="features">
          <div className="feature">
            <span>♾️ Infinite Rounds</span>
          </div>
          <div className="feature">
            <span>📈 Difficulty+</span>
          </div>
          <div className="feature">
            <span>⏱️ 15 Seconds</span>
          </div>
          <div className="feature">
            <span>❤️ 3 Lives</span>
          </div>
          <div className="feature">
            <span>😂 Epic Roasts</span>
          </div>
          <div className="feature">
            <span>🎵 Fun Sounds</span>
          </div>
        </div>

        <button onClick={handleStartGame} className="start-button">
          Start Game
        </button>
      </div>
    </main>
  );
}
