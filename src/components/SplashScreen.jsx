import { useState } from "react";

import { SCREENS } from "../constants/screens";
import { useGame } from "../hooks/useGame";
import CreditsModal from "./CreditsModal";
import GameButton from "./GameButton";
import GameLogo from "./GameLogo";

/**
 * SPLASH SCREEN - Welcome to the Game!
 *
 * TODO: Session 2 - Add start and credits buttons
 * TODO: Session 3 - Add startGame and showCredits functionality
 */

export default function SplashScreen() {
  const { setScreen } = useGame();
  const [showCredits, setShowCredits] = useState(false);

  const startGame = () => {
    setScreen(SCREENS.PLAYING);
  };

  return (
    <div className="splash-screen">
      <GameLogo />

      <div className="splash-buttons">
        <GameButton
          text="Start Adventure"
          onClick={startGame}
          variant="primary"
        />
        <GameButton
          text="Credits"
          onClick={() => setShowCredits(true)}
          variant="secondary"
        />
      </div>

      {showCredits && <CreditsModal onClose={() => setShowCredits(false)} />}
    </div>
  );
}
