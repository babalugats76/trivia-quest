/**
 * GAME SCREENS - Main application states
 *
 * These constants define the different screens/states of the game.
 * Used by App.jsx to determine which components to render.
 *
 * TODO: Session 3 - Use these constants instead of strings like "splash"
 */
export const SCREENS = {
  /** Welcome screen with start button and credits */
  SPLASH: "splash",

  /** Main game screen with map view, zones, and HUD */
  PLAYING: "playing",

  /** Congratulations screen with final score and play again button */
  GAME_OVER: "gameover",
};

/**
 * SCREEN FLOW:
 * SPLASH → PLAYING → GAME_OVER → (loop back to SPLASH)
 *
 * - SPLASH: Shows SplashScreen component
 * - PLAYING: Shows GameMap + HUD + QuizModal (when active)
 * - GAME_OVER: Shows GameOver component
 */
