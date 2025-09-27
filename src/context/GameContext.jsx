import { createContext, useMemo, useState } from "react";

import { SCREENS } from "../constants/screens";
import { getZoneById, ZONES } from "../data/zones";
import { useAudio } from "../hooks/useAudio";
import {
  clearAllQuestionCache,
  clearQuestionCache,
  fetchQuestions,
} from "../services/trivia";

/**
 * GAME CONTEXT - The Brain of Our Quiz Game
 *
 * This manages all the game's state and logic:
 * - 📊 GAME STATE: Core game data (screens, zone progress)
 * - ❓ QUIZ STATE: Quiz-specific data (questions, progress)
 * - 🎵 AUDIO: Background music controls
 * - ⚡ ACTIONS: Game logic functions (load questions, record answers, check completion)
 * - 🎛️ CONTROLS: Simple UI state setters (show/hide screens and modals)
 *
 * Think of this as the "save file" for our game - it remembers everything!
 *
 * TODO: Session 8 - Add scoring system and cache clearing
 *
 * ┌─────────────────────┬───────────────┬───────────────────────────────────┐
 * │     GAME STATE      │ Type          │ Description                       │
 * ├─────────────────────┼───────────────┼───────────────────────────────────┤
 * │ screen              │ string        │ Current screen to display         │
 * │ score               │ number        │ Player's current points           │
 * │ zoneProgress        │ object        │ Which zones are completed         │
 * │ activeZone          │ number/null   │ Current unlocked zone ID          │
 * │ currentZone         │ object/null   │ Full data for active zone         │
 * │ completedZones      │ number        │ Count of finished zones           │
 * └─────────────────────┴───────────────┴───────────────────────────────────┘
 *
 * ┌─────────────────────┬───────────────┬───────────────────────────────────┐
 * │     QUIZ STATE      │ Type          │ Description                       │
 * ├─────────────────────┼───────────────┼───────────────────────────────────┤
 * │ currentQuestions    │ array         │ Questions for current quiz        │
 * │ currentQuestion     │ number        │ Which question (0,1,2...)         │
 * │ correctAnswers      │ number        │ Correct answers this quiz         │
 * │ isQuizVisible       │ boolean       │ Is quiz modal open?               │
 * └─────────────────────┴───────────────┴───────────────────────────────────┘
 *
 * ┌─────────────────────┬───────────────┬───────────────────────────────────┐
 * │        AUDIO        │ Type          │ Description                       │
 * ├─────────────────────┼───────────────┼───────────────────────────────────┤
 * │ music               │ object        │ Background music controls         │
 * └─────────────────────┴───────────────┴───────────────────────────────────┘
 *
 * ┌─────────────────────────────────────┬───────────────────────────────────┐
 * │             ACTIONS                 │ What It Does                      │
 * ├─────────────────────────────────────┼───────────────────────────────────┤
 * │ loadQuestionsForZone(zoneId)        │ Prepare questions for a zone      │
 * │ recordCorrectAnswer()               │ Player got it right!              │
 * │ recordIncorrectAnswer()             │ Player got it wrong               │
 * │ nextQuestion()                      │ Move to next question             │
 * │ checkZoneCompletion()               │ Did player pass the zone?         │
 * │ resetGame()                         │ Start completely over             │
 * └─────────────────────────────────────┴───────────────────────────────────┘
 *
 * ┌─────────────────────────────────────┬───────────────────────────────────┐
 * │            CONTROLS                 │ What It Does                      │
 * ├─────────────────────────────────────┼───────────────────────────────────┤
 * │ setScreen(screenName)               │ Switch to different screen        │
 * │ setIsQuizVisible(boolean)           │ Show/hide quiz modal              │
 * └─────────────────────────────────────┴───────────────────────────────────┘
 */

// ============================================================================
// GAME SETTINGS - Change these to customize your game!
// ============================================================================
const PASS_PERCENTAGE = 0.6; // Need 60% correct to pass a zone
const POINTS_PER_CORRECT = 100;

export const GameContext = createContext();

export function GameProvider({ children }) {
  // ============================================================================
  // GAME STATE - These variables remember everything about the current game
  // ============================================================================
  const [score, setScore] = useState(0); // Tracks player's score
  const [screen, setScreen] = useState(SCREENS.SPLASH); // Which screen to show

  // Track which zones are completed - starts with all zones incomplete
  const [zoneProgress, setZoneProgress] = useState({
    0: { completed: false },
    1: { completed: false },
    2: { completed: false },
  });

  // ============================================================================
  // QUIZ STATE - Current quiz data and UI state
  // ============================================================================
  const [currentQuestions, setCurrentQuestions] = useState([]); // Array of questions
  const [currentQuestion, setCurrentQuestion] = useState(0); // Which question (0, 1, 2...)
  const [correctAnswers, setCorrectAnswers] = useState(0); // How many correct so far
  const [isQuizVisible, setIsQuizVisible] = useState(false); // Is quiz open?

  // ============================================================================
  // AUDIO STATE - Music and sound controls
  // ============================================================================
  const music = useAudio("/audio/dramatic-action.mp3");

  // Find the first zone that isn't completed yet
  const activeZone = useMemo(() => {
    for (let zoneId = 0; zoneId < ZONES.length; zoneId++) {
      if (!zoneProgress[zoneId].completed) {
        return zoneId;
      }
    }
    return null; // All zones completed
  }, [zoneProgress]);

  // Get the full zone data for the active zone
  const currentZone = useMemo(() => {
    return activeZone !== null ? getZoneById(activeZone) : null;
  }, [activeZone]);

  // Calculate how many zones have been completed
  const completedZones = useMemo(() => {
    return Object.values(zoneProgress).filter((zone) => zone.completed).length;
  }, [zoneProgress]);

  // ============================================================================
  // ACTIONS - Game logic functions
  // ============================================================================
  // Load questions for a specific zone
  const loadQuestionsForZone = async (zoneId) => {
    const questions = await fetchQuestions(zoneId);
    setCurrentQuestions(questions);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
  };

  // Handle correct answer: add points and track it
  const recordCorrectAnswer = () => {
    setScore((prev) => prev + POINTS_PER_CORRECT);
    setCorrectAnswers((prev) => prev + 1);
  };

  // Handle wrong answer: subtract points (but don't go below 0)
  const recordIncorrectAnswer = () => {
    setScore((prev) => Math.max(0, prev - POINTS_PER_CORRECT));
  };

  // Move to the next question
  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  // Check if player passed the current zone (needs 60% correct)
  const checkZoneCompletion = () => {
    if (activeZone === null || currentQuestions.length === 0) return;

    const questionsNeeded = Math.ceil(
      currentQuestions.length * PASS_PERCENTAGE
    );
    const passed = correctAnswers >= questionsNeeded;

    if (passed) {
      // Mark zone as completed
      setZoneProgress((prev) => ({
        ...prev,
        [activeZone]: { completed: true },
      }));

      clearQuestionCache(activeZone); // Clear zone questions from cache (localStorage)

      // Check if this was the final zone
      if (activeZone === ZONES.length - 1) {
        setScreen(SCREENS.GAME_OVER);
      }
    }
  };

  // Reset everything to start over
  const resetGame = () => {
    setScore(0);
    setZoneProgress({
      0: { completed: false },
      1: { completed: false },
      2: { completed: false },
    });
    setIsQuizVisible(false);
    setCurrentQuestions([]);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    clearAllQuestionCache();
  };

  return (
    <GameContext
      value={{
        // GAME STATE
        screen,
        score,
        zoneProgress,
        activeZone,
        currentZone,
        completedZones,
        // QUIZ STATE
        currentQuestions,
        currentQuestion,
        correctAnswers,
        isQuizVisible,
        // AUDIO STATE
        music,
        // ACTIONS
        loadQuestionsForZone,
        recordCorrectAnswer,
        recordIncorrectAnswer,
        nextQuestion,
        checkZoneCompletion,
        resetGame,
        // CONTROLS
        setScreen,
        setIsQuizVisible,
      }}
    >
      {children}
    </GameContext>
  );
}

// ============================================================================
// DEBUGGING TIP: console.log('Game State:', useGame());
// ============================================================================
