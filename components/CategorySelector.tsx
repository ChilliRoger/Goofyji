"use client";

import { useRouter } from "next/navigation";

interface CategorySelectorProps {
  onSelect: (category: string) => void;
}

export default function CategorySelector({ onSelect }: CategorySelectorProps) {
  const router = useRouter();
  const categories = [
    {
      id: "objects",
      name: "Objects",
      emoji: "📦",
      description: "Things you can touch and see",
    },
    {
      id: "actions",
      name: "Actions",
      emoji: "🏃",
      description: "Verbs and things you do",
    },
    {
      id: "nature",
      name: "Nature",
      emoji: "🌲",
      description: "Animals, plants, and weather",
    },
    {
      id: "food",
      name: "Food & Drinks",
      emoji: "🍕",
      description: "Yummy things to eat and drink",
    },
    {
      id: "mixed",
      name: "Mixed",
      emoji: "🎲",
      description: "Random mix of everything!",
    },
  ];

  return (
    <div className="category-overlay">
      <div className="category-container">
        <button
          onClick={() => router.push("/")}
          className="category-back-button"
        >
          ← Back
        </button>

        <h2 className="category-title">Choose Your Category</h2>
        <p className="category-subtitle">
          What type of words do you want to guess?
        </p>

        <div className="category-grid">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`category-card category-card-${index + 1}`}
              onClick={() => onSelect(category.id)}
            >
              <div className="category-emoji">{category.emoji}</div>
              <div className="category-name">{category.name}</div>
              <div className="category-description">{category.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
