import { createContext, useState } from "react";
import { SCREENS } from "../constants/screens";

/**
 * GAME CONTEXT - The Brain of Our Quiz Game
 *
 * TODO: Session 3 - Students will learn about shared state here
 * TODO: Session 6 - Add question loading and caching
 * TODO: Session 8 - Add scoring system
 * TODO: Session 9 - Add audio integration
 */

export const GameContext = createContext();

export function GameProvider({ children }) {
  // TODO: Session 3 - Students learn about state vs props
  const [screen, setScreen] = useState(SCREENS.SPLASH);

  // TODO: Session 7 - Add quiz modal visibility
  // const [isQuizVisible, setIsQuizVisible] = useState(false);

  // TODO: Session 8 - Add scoring state
  // const [score, setScore] = useState(0);

  return (
    <GameContext.Provider
      value={{
        // CONTROLS - Session 3
        screen,
        setScreen,

        // TODO: Add more state and functions as students progress
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
