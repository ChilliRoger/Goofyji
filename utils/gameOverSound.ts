// Simple game over buzzer sound using Web Audio API for instant playback
let audioContext: AudioContext | null = null;

export const playGameOverBuzzer = () => {
  try {
    // Create audio context on first use
    if (!audioContext) {
      audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }

    const ctx = audioContext;
    const now = ctx.currentTime;

    // Create oscillator for buzzer sound
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Buzzer frequency (low pitched for "wrong" feeling)
    oscillator.frequency.setValueAtTime(150, now);
    oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.3);

    // Volume envelope for buzzer effect
    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    // Buzzer waveform
    oscillator.type = "sawtooth";

    // Play the sound
    oscillator.start(now);
    oscillator.stop(now + 0.3);
  } catch (error) {
    console.error("Failed to play game over sound:", error);
  }
};

// Initialize audio context on user interaction to avoid browser restrictions
export const initGameOverSound = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
  }
};
