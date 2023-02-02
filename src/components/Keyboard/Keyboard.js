import React from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

const Keyboard = ({ validatedGuesses, setGuess, guess }) => {
  let statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`letter ${statusByLetter[letter]}`}
              onClick={() => {
                if (guess.length >= 5) {
                  window.alert("please enter 5 letter word");
                  return;
                }
                setGuess(guess + letter.toUpperCase());
              }}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
