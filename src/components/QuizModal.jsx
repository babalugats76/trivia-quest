import { useState } from "react";

import { CORRECT_FEEDBACK, INCORRECT_FEEDBACK } from "../constants/messages";
import { useGame } from "../hooks/useGame";

/**
 * QUIZ MODAL - Interactive Trivia Questions
 *
 * TODO: Session 7 - Create AnswerChoices component and add custom feedback messages
 */

function ProgressHeader({ currentQuestion, totalQuestions, subtitle }) {
  return (
    <div className="progress-header">
      <div className="subtitle">{subtitle}</div>
      <div className="progress-text">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>
    </div>
  );
}

function QuestionHeader({ question }) {
  return (
    <div className="question-header">
      <h2 className="question-text">{question.question}</h2>
    </div>
  );
}

function AnswerChoices({
  answers,
  onAnswerClick,
  chosenAnswer,
  correctAnswer,
}) {
  const getButtonStyle = (answerIndex) => {
    if (chosenAnswer === null) return "answer-button";
    if (answerIndex === correctAnswer) return "answer-button correct";
    if (answerIndex == chosenAnswer) return "answer-button incorrect";
    return "answer-button";
  };
  return (
    <div className="answers-grid">
      {answers.map((answer, index) => (
        <button
          key={index}
          className={getButtonStyle(index)}
          onClick={() => onAnswerClick(index)}
          disabled={chosenAnswer !== null}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

function AnswerPlaceholder() {
  return (
    <div className="result">
      <span className="placeholder-text">
        Select an answer to see your result
      </span>
    </div>
  );
}

function AnswerFeedback({ hasAnswered, isCorrect, correctAnswerText }) {
  if (!hasAnswered) {
    return <AnswerPlaceholder />;
  }

  const messages = isCorrect ? CORRECT_FEEDBACK : INCORRECT_FEEDBACK;
  const message = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="result">
      <strong>{message}</strong>
      {!isCorrect && <div>The answer was: {correctAnswerText}</div>}
    </div>
  );
}

function ContinueButton({ hasAnswered, isOnFinalQuestion, onContinue }) {
  return (
    <button
      className={hasAnswered ? "next-button" : "next-button disabled"}
      onClick={onContinue}
      disabled={!hasAnswered}
    >
      {isOnFinalQuestion ? "Finish Quiz" : "Next Question"}
    </button>
  );
}

export default function QuizModal() {
  const {
    isQuizVisible,
    setIsQuizVisible,
    currentQuestions,
    currentQuestion,
    nextQuestion,
    recordCorrectAnswer,
    recordIncorrectAnswer,
    checkZoneCompletion,
    currentZone,
  } = useGame();

  const [chosenAnswer, setChosenAnswer] = useState(null);

  const shouldShowModal =
    isQuizVisible && currentQuestions && currentQuestions.length > 0;
  const question = shouldShowModal ? currentQuestions[currentQuestion] : null;
  const isLastQuestion = shouldShowModal
    ? currentQuestion === currentQuestions.length - 1
    : false;

  const handleAnswerClick = (answerIndex) => {
    if (chosenAnswer !== null) return;

    setChosenAnswer(answerIndex);
    const isCorrect = answerIndex === question.correct;

    if (isCorrect) {
      recordCorrectAnswer();
    } else {
      recordIncorrectAnswer();
    }
  };

  const handleContinue = () => {
    if (isLastQuestion) {
      checkZoneCompletion();
      setIsQuizVisible(false);
    } else {
      nextQuestion();
    }
    setChosenAnswer(null);
  };

  return shouldShowModal ? (
    <div className="quiz-modal">
      <div className="quiz-content">
        <button
          className="close-button"
          onClick={() => setIsQuizVisible(false)}
          title="Close quiz"
        >
          x
        </button>

        <ProgressHeader
          currentQuestion={currentQuestion}
          totalQuestions={currentQuestions.length}
          subtitle={currentZone?.subtitle || "Quiz Questions"}
        />

        <QuestionHeader question={question} />

        <AnswerChoices
          answers={question.answers}
          onAnswerClick={handleAnswerClick}
          chosenAnswer={chosenAnswer}
          correctAnswer={question.correct}
        />

        <AnswerFeedback
          hasAnswered={chosenAnswer !== null}
          isCorrect={chosenAnswer === question.correct}
          correctAnswerText={question.answers[question.correct]}
        />

        <ContinueButton
          hasAnswered={chosenAnswer !== null}
          isOnFinalQuestion={isLastQuestion}
          onContinue={handleContinue}
        />
      </div>
    </div>
  ) : null;
}
