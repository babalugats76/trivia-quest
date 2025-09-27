export default function GameButton({ text, onClick, variant = "primary" }) {
  const buttonClass = `game-button ${variant}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}
