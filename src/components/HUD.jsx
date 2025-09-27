import { useGame } from "../hooks/useGame";
import { getAssetPath } from "../utils/assets";

/**
 * HUD - Heads Up Display
 *
 * TODO: Session 8 - Add Scoreboard component
 * TODO: Session 9 - Add MusicToggle component
 */

function Scoreboard() {
  const { score } = useGame();
  return <div className="score-display">Score: {score} </div>;
}

// Current Zone Display - Shows active zone information
function CurrentZone() {
  const { currentZone } = useGame();

  if (!currentZone) return null;

  return (
    <div className="zone-info">
      <div className="zone-name">{currentZone.name}</div>
      <div className="zone-theme">{currentZone.subtitle}</div>
    </div>
  );
}

function MusicToggle() {
  const { music } = useGame();
  return (
    <button
      onClick={music.toggle}
      className="music-toggle"
      title={music.isPlaying ? "Pause Music" : "Play Music"}
    >
      <img
        src={getAssetPath(
          music.isPlaying ? "/images/playing.svg" : "/images/paused.svg"
        )}
        alt={music.isPlaying ? "Pause" : "Play"}
        className="music-icon"
        width={24}
        height={24}
      />
    </button>
  );
}

// Main HUD component
export default function HUD() {
  return (
    <>
      <Scoreboard />
      <CurrentZone />
      <MusicToggle />
    </>
  );
}
