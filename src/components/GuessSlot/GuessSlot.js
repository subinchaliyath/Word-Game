import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
const slots = range(NUM_OF_GUESSES_ALLOWED);

const populateData = (data, answer) => {
  if (data) {
    const { label } = data;
    const status = checkGuess(label, answer);
    return label.split("").map((char, index) => (
      <span className={`cell ${status[index]["status"]}`} key={index}>
        {char}
      </span>
    ));
  }
  return range(5).map((index) => <span className="cell" key={index}></span>);
};

function GuessSlot({ guesses, answer }) {
  return (
    <div className="guess-results">
      {slots.map((id) => (
        <p className="guess" key={id}>
          {populateData(guesses[id], answer)}
        </p>
      ))}
    </div>
  );
}

export default GuessSlot;
