import React, { useState } from "react";
import Modal from "../Modal";

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
  const [show, setShow] = useState(false);

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
                  setShow(true);
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
      {show && (
        <Modal setShow={setShow}>
          <h5>please enter a 5 letter word</h5>
        </Modal>
      )}
    </div>
  );
};

export default Keyboard;
