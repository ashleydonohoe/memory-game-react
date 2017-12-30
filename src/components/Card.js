import React from 'react';

const Card = ({index, card, classList, setUpCardInteraction}) => {
  return (
    <li onClick={setUpCardInteraction(index, card)} key={index} id={index} className="card">{card.text}<i className={classList}></i></li>
  );
}

export default Card;
