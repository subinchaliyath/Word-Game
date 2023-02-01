import React, { useState } from "react";

function Guess({ handleSubmitGuess, disabled }) {
  const [guess, setGuess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length === 5) {
      handleSubmitGuess(guess);
      setGuess("");
      return;
    }
    window.alert("please enter 5 letter word");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
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
    </form>
  );
}

export default Guess;
