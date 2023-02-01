import React from "react";

function Banner({ gameStatus }) {
  return (
    <>
      {gameStatus.win ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {gameStatus.attempt + 1} guesses</strong>.
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{gameStatus.answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
