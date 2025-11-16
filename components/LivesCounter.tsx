'use client';

interface LivesCounterProps {
  lives: number;
  maxLives?: number;
}

export default function LivesCounter({ lives, maxLives = 3 }: LivesCounterProps) {
  return (
    <div className="lives-counter">
      <div className="lives-label">Lives:</div>
      <div className="hearts">
        {Array.from({ length: maxLives }).map((_, index) => (
          <span
            key={index}
            className={`heart ${index < lives ? 'alive' : 'dead'}`}
          >
            {index < lives ? '❤️' : '🖤'}
          </span>
        ))}
      </div>
    </div>
  );
}
