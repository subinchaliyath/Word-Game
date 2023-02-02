import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

import Guess from "../Guess";
import GuessSlot from "../GuessSlot";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  console.log(answer);
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length > 5) {
      setGameStatus("lost");
    }
  };

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  }
  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));
  return (
    <>
      <GuessSlot validatedGuesses={validatedGuesses} answer={answer} />
      <Guess
        handleSubmitGuess={handleSubmitGuess}
        disabled={gameStatus?.completed ? true : false}
        validatedGuesses={validatedGuesses}
      />
      {gameStatus === "won" && (
        <WonBanner handleRestart={handleRestart} attempt={guesses.length} />
      )}
      {gameStatus === "lost" && (
        <LostBanner handleRestart={handleRestart} answer={answer} />
      )}
    </>
  );
}

export default Game;
