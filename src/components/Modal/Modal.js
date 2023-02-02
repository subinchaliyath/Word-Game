import React, { useState } from "react";

function Modal({ children, setShow }) {
  return (
    <>
      <div
        className="overlay"
        onClick={() => {
          setShow(false);
        }}
      ></div>
      <div className="modal">
        <span
          className="close"
          onClick={() => {
            setShow(false);
          }}
        >
          x
        </span>
        {children}
      </div>
    </>
  );
}

export default Modal;
