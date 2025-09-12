import GameLogo from "./GameLogo";

/**
 * SPLASH SCREEN - Welcome to the Game!
 *
 * TODO: Session 2 - Add start and credits buttons
 * TODO: Session 3 - Add startGame and showCredits functionality
 */

export default function SplashScreen() {
  // TODO: Session 3 - Students will implement startGame and showCredits functions

  return (
    <div className="splash-screen">
      {/* Game Logo */}
      <GameLogo />

      <div className="splash-buttons">
        {/* TODO: Session 2 - Add start and credits buttons */}
      </div>

      {/* TODO: Session 3 - Conditionally show credits modal */}
    </div>
  );
}
