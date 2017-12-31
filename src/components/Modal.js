import React from 'react';

const Modal = ({ visible, stars, moves, time, loadGame }) => {
  const modalClass = visible ? "" : "modal";
  console.log(modalClass);
  return (
    <div className={modalClass}>
      <h1>Congrats! You won!</h1>
      <p>It took you {moves} moves over a period of {time} seconds, and you earned {stars} stars!</p>
      <button id="play-again" onClick={loadGame}>Play again!</button>
  </div>
  );
}

export default Modal;
