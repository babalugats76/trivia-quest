import { useContext } from "react";

import { GameContext } from "../context/GameContext";

/**
 * CUSTOM HOOK - Easy access to game state
 *
 * This hook lets any component access the GameContext easily.
 * Instead of: const context = useContext(GameContext)
 * We can just: const { screen, setScreen } = useGame()
 */
export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }

  return context;
}
