interface HelpPopupProps {
  onClose: () => void;
}

export default function HelpPopup({ onClose }: HelpPopupProps) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="help-popup" onClick={(e) => e.stopPropagation()}>
        <div className="help-header">
          <h2>How to Play</h2>
          <button onClick={onClose} className="close-button">
            ✕
          </button>
        </div>

        <div className="help-content">
          <div className="help-section">
            <div className="help-item">
              <p>Look at the emoji combination</p>
            </div>
            <div className="help-item">
              <p>Type the word or phrase they represent</p>
            </div>
            <div className="help-item">
              <p>You have 15 seconds per round</p>
            </div>
            <div className="help-item">
              <p>Get it right to earn points!</p>
            </div>
            <div className="help-item">
              <p>Wrong answer? No problem - see the answer & continue!</p>
            </div>
            <div className="help-item">
              <p>Run out of time = lose a life</p>
            </div>
            <div className="help-item">
              <p>Lose all 3 lives = Game Over!</p>
            </div>
          </div>

          <div className="help-tip">
            <p>
              <strong>Tip:</strong> Some emojis combine to form compound words
              like "hotdog" or "sunshine"!
            </p>
          </div>
        </div>

        <button onClick={onClose} className="got-it-button">
          Got it! Let's Play
        </button>
      </div>
    </div>
  );
}
