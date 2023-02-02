import React, { useState } from "react";

import Keyboard from "../Keyboard";
import Modal from "../Modal";

function Guess({ handleSubmitGuess, disabled, validatedGuesses }) {
  const [guess, setGuess] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length === 5) {
      handleSubmitGuess(guess);
      setGuess("");
      return;
    }
    setShow(true);
  };
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <div className="guess-submit">
          <input
            required
            id="guess-input"
            type="text"
            value={guess}
            maxLength={5}
            disabled={disabled}
            onChange={(e) => {
              const upperCaseValue = e.target.value.toUpperCase();
              setGuess(upperCaseValue);
            }}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <Keyboard
        validatedGuesses={validatedGuesses}
        setGuess={setGuess}
        guess={guess}
      />
      {show && (
        <Modal setShow={setShow}>
          <h5>please enter a 5 letter word</h5>
        </Modal>
      )}
    </>
  );
}

export default Guess;
