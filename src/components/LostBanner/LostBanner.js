import React from "react";
import Banner from "../Banner";
function LostBanner({ answer, handleRestart, label = "Restart game" }) {
  return (
    <Banner callback={handleRestart} variant="sad" label={label}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
