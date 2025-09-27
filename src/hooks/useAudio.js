import { useEffect, useRef, useState } from "react";

/**
 * CUSTOM AUDIO HOOK - Background Music Control
 *
 * TODO: Session 9 - Students will implement this custom hook
 *
 * A hook that lets you play audio files in your React app
 * @param {string} src - Path to the audio file (like "/audio/music.mp3")
 * @returns {Object} An object with play, pause, toggle functions and isPlaying status
 */
export function useAudio(src) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn("Audio failed to play:", err);
        setIsPlaying(false);
      });
  };

  const pause = () => {
    // Alternatively, audioRef.current?.pause()
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  // Cleanup audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return { play, pause, toggle, isPlaying };
}
