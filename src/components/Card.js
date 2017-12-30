import React from 'react';

const Card = ({index, card, classList, setUpCardInteraction, cardClassList, faClassList}) => {
  return (
    <li onClick={e => setUpCardInteraction(card, e.target.id)} key={index} id={index} className={cardClassList}>{card.text}<i className={faClassList}></i></li>
  );
}

export default Card;
