import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GameProvider } from "./context/GameContext";
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameProvider>
      {" "}
      {/* Provides game state to all components */}
      <App /> {/* Our main app component */}
    </GameProvider>
  </React.StrictMode>
);
