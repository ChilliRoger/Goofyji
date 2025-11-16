"use client";

import { useRouter } from "next/navigation";
import { getItemsByCategory } from "@/lib/categorizedEmojiData";

export default function GuidePage() {
  const router = useRouter();

  const foodItems = getItemsByCategory("food");
  const natureItems = getItemsByCategory("nature");
  const objectItems = getItemsByCategory("objects");
  const actionItems = getItemsByCategory("actions");

  const renderEmojiList = (items: any[], categoryTitle: string) => {
    return (
      <div className="emoji-category-section">
        <h2 className="category-title">{categoryTitle}</h2>
        <div className="emoji-grid">
          {items.map((item, index) => (
            <div key={index} className="emoji-item">
              <span className="emoji-symbol">{item.emoji}</span>
              <span className="emoji-word">{item.word}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="guide-page">
      <div className="guide-container">
        <div className="guide-header">
          <button onClick={() => router.push("/")} className="back-button">
            ← Back to Home
          </button>
          <h1 className="guide-title">Emoji Guide</h1>
          <p className="guide-subtitle">
            Learn all the emojis and their meanings!
          </p>
        </div>

        <div className="guide-content">
          {renderEmojiList(foodItems, "Food & Drinks")}
          {renderEmojiList(natureItems, "Nature & Animals")}
          {renderEmojiList(objectItems, "Objects & Things")}
          {renderEmojiList(actionItems, "Actions & Emotions")}
        </div>

        <div className="guide-footer">
          <button onClick={() => router.push("/")} className="home-button">
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}
