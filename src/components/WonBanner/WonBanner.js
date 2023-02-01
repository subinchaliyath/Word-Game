import React from "react";
import Banner from "../Banner";

function WonBanner({ attempt, handleRestart, label = "Restart game" }) {
  return (
    <Banner callback={handleRestart} label={label} variant="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {attempt} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
