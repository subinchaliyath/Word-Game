import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import PopulateCell from "../PopulateCell";

function GuessSlot({ validatedGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <PopulateCell key={num} value={validatedGuesses[num]} />
      ))}
    </div>
  );
}

export default GuessSlot;
