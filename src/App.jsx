/**
 * APP COMPONENT - The Main Screen Controller
 *
 * TODO: Session 1 - Replace <StartHere /> with <SplashScreen />
 * TODO: Session 3 - Add screen navigation
 * TODO: Session 7 - Add QuizModal conditional rendering
 * TODO: Session 8 - Add GameOver screen navigation
 */

import CoordinateDisplay from "./components/CoordinateDisplay";
import GameMap from "./components/GameMap";
import GameOver from "./components/GameOver";
import HUD from "./components/HUD";
import QuizModal from "./components/QuizModal";
import SplashScreen from "./components/SplashScreen";
import { SCREENS } from "./constants/screens";
import { useGame } from "./hooks/useGame";

export default function App() {
  const { isQuizVisible, screen } = useGame();
  return (
    <div className="app-container">
      {screen === SCREENS.SPLASH && <SplashScreen />}
      {screen === SCREENS.PLAYING && (
        <>
          <GameMap />
          <HUD />
          {isQuizVisible && <QuizModal />}
          <CoordinateDisplay />
        </>
      )}
      {screen === SCREENS.GAME_OVER && <GameOver />}
    </div>
  );
}
