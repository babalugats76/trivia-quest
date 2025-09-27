import { SCREENS } from "../constants/screens";
import { useGame } from "../hooks/useGame";
import GameButton from "./GameButton";

export default function GameOver() {
  const { score, resetGame, setScreen } = useGame();
  const playAgain = () => {
    resetGame();
    setScreen(SCREENS.SPLASH);
  };
  return (
    <div className="game-over">
      <h1>Congratulations!</h1>
      <div className="final-score">Final Score: {score}</div>
      <GameButton text="Play Again" onClick={playAgain} variant="primary" />
    </div>
  );
}
