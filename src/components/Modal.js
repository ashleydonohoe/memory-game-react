import React from 'react';

const Modal = ({ visible }) => {
  return (
    <div className={visible ? "" : "modal"}>
      <h1>Congrats! You won!</h1>
      <p>It took you <span id="numberOfMoves"></span> moves over a period of <span id="numberOfSeconds"></span> seconds, and you earned <span id="numberOfStars"></span> stars!</p>
      <button id="play-again">Play again!</button>
  </div>
  );
}

export default Modal;
