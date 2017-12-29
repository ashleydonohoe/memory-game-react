import React, { Component } from 'react';

class CardDeck extends Component {
  createCards = () => {
    const cards = this.props.shuffledCards;
    
    return cards.map((card, index) => {
      const faClass = "fa " + card;
       return (
         <li id={index} className="card">{card}<i className={faClass}></i></li>
       );
     });
  }

  render() {
    return (
      <ul id="deck">
      { this.createCards()}
      </ul>
    );
  }
}

export default CardDeck;
