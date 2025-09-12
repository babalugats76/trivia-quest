import { useRef, useState } from "react";

/**
 * CUSTOM AUDIO HOOK - Background Music Control
 *
 * TODO: Session 9 - Students will implement this custom hook
 *
 * This hook should return an object with:
 * - play: Function to start audio
 * - pause: Function to stop audio
 * - toggle: Function to play/pause
 * - isPlaying: Boolean state
 * - isLoaded: Boolean state
 */

export function useAudio(audioSrc) {
  // TODO: Session 9 - Students implement audio functionality
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // TODO: Create audio element and event listeners
  // TODO: Implement play, pause, toggle functions
  // TODO: Return audio controls object

  return {
    play: () => console.log("TODO: Implement play"),
    pause: () => console.log("TODO: Implement pause"),
    toggle: () => console.log("TODO: Implement toggle"),
    isPlaying,
    isLoaded,
  };
}
