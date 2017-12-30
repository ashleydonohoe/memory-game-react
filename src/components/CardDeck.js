import React, { Component } from 'react';
import Card from './Card';

class CardDeck extends Component {
  createCards = () => {
    const cards = this.props.shuffledCards;

    console.log(cards);

    return cards.map((card, index) => {
      const faClass = "fa " + card;
       return (
         <Card setUpCardInteraction={this.props.setUpCardInteraction} key={index} id={index} classList={faClass} />
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
