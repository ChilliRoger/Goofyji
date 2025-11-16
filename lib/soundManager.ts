/**
 * Sound system for the game
 * Uses free sound effects from various sources
 */

// Free sound effect URLs (from freesound.org, pixabay.com, etc.)
// These are example URLs - in production, download and host locally in /public/sounds/

export const SOUND_URLS = {
  correct: [
    // Success/correct sounds - use fun, positive sounds
    "https://freesound.org/data/previews/142/142608_2615119-lq.mp3", // Ding
    "https://freesound.org/data/previews/456/456966_5121236-lq.mp3", // Success chime
    "https://freesound.org/data/previews/397/397353_7370363-lq.mp3", // Win sound
  ],
  wrong: [
    // Wrong/fail sounds - funny, not harsh
    "https://freesound.org/data/previews/156/156859_2538033-lq.mp3", // Buzzer
    "https://freesound.org/data/previews/142/142774_2615119-lq.mp3", // Boing
    "https://freesound.org/data/previews/331/331912_3248244-lq.mp3", // Fail sound
  ],
  start: [
    // Game start sounds - energetic
    "https://freesound.org/data/previews/270/270303_5123851-lq.mp3", // Start game
    "https://freesound.org/data/previews/162/162473_2703579-lq.mp3", // Pop
    "https://freesound.org/data/previews/171/171671_2437358-lq.mp3", // Game start
  ],
  gameOver: [
    // Game over sounds - dramatic but funny
    "https://freesound.org/data/previews/277/277441_5123851-lq.mp3", // Game over
    "https://freesound.org/data/previews/142/142608_2615119-lq.mp3", // Lose sound
    "https://freesound.org/data/previews/336/336998_4939433-lq.mp3", // Fail
  ],
  button: [
    // Button click sounds
    "https://freesound.org/data/previews/156/156859_2538033-lq.mp3", // Click
    "https://freesound.org/data/previews/442/442943_4019029-lq.mp3", // Button
  ],
};

class SoundManager {
  private audioCache: Map<string, HTMLAudioElement> = new Map();
  private enabled: boolean = true;

  /**
   * Preload a sound
   */
  preload(url: string): void {
    if (!this.audioCache.has(url)) {
      const audio = new Audio(url);
      audio.preload = "auto";
      this.audioCache.set(url, audio);
    }
  }

  /**
   * Preload all sounds
   */
  preloadAll(): void {
    Object.values(SOUND_URLS).forEach((urls) => {
      urls.forEach((url) => this.preload(url));
    });
  }

  /**
   * Play a sound from a category (randomly selected)
   */
  play(category: keyof typeof SOUND_URLS): void {
    if (!this.enabled) return;

    try {
      const urls = SOUND_URLS[category];
      const randomUrl = urls[Math.floor(Math.random() * urls.length)];

      let audio = this.audioCache.get(randomUrl);

      if (!audio) {
        audio = new Audio(randomUrl);
        this.audioCache.set(randomUrl, audio);
      }

      // Clone the audio to allow overlapping sounds
      const audioClone = audio.cloneNode() as HTMLAudioElement;
      audioClone.volume = 0.5; // Set volume to 50%

      // Play with error handling for autoplay policies
      const playPromise = audioClone.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Audio play failed:", error);
          // User interaction required - this is normal on first load
        });
      }
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  }

  /**
   * Play a specific sound URL
   */
  playUrl(url: string): void {
    if (!this.enabled) return;

    try {
      const audio = new Audio(url);
      audio.volume = 0.5;
      audio.play().catch((error) => {
        console.warn("Audio play failed:", error);
      });
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  }

  /**
   * Enable/disable sounds
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  /**
   * Toggle sound on/off
   */
  toggle(): boolean {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  /**
   * Check if sounds are enabled
   */
  isEnabled(): boolean {
    return this.enabled;
  }
}

// Singleton instance
export const soundManager = new SoundManager();

// Convenience functions
export function playCorrectSound() {
  soundManager.play("correct");
}

export function playWrongSound() {
  soundManager.play("wrong");
}

export function playStartSound() {
  soundManager.play("start");
}

export function playGameOverSound() {
  soundManager.play("gameOver");
}

export function playButtonSound() {
  soundManager.play("button");
}

export function toggleSound(): boolean {
  return soundManager.toggle();
}

export function preloadAllSounds(): void {
  soundManager.preloadAll();
}
