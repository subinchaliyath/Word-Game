import React from "react";

function Banner({ children, callback, label, variant }) {
  return (
    <div className={`${variant} banner`}>
      {children}
      {callback && <button onClick={callback}>{label}</button>}
    </div>
  );
}

export default Banner;
