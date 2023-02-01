import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Guess from "../Guess";
import GuessSlot from "../GuessSlot";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState({});
  const handleGuess = (guess) => {
    const newGuess = { id: Math.random(), label: guess };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameStatus({ win: true, attempt: guesses.length, completed: "true" });
    }
    if (nextGuesses.length > 5) {
      setGameStatus({ win: false, completed: "true", answer });
    }
  };
  return (
    <>
      <GuessSlot guesses={guesses} answer={answer} />
      <Guess
        handleGuess={handleGuess}
        disabled={gameStatus?.completed ? true : false}
      />
      {gameStatus?.completed && <Banner gameStatus={gameStatus} />}
    </>
  );
}

export default Game;
