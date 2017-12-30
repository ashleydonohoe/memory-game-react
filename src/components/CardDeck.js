import React, { Component } from 'react';
import Card from './Card';

class CardDeck extends Component {
  createCards = () => {
    const cards = this.props.shuffledCards;

    return cards.map((card, index) => {
      // Generate class list
      const faClass = `fa ${card.text}`;
      let cardClassList = "card";

      if(card.open && card.shown) {
        cardClassList += " open show";
      } else if(card.open) {
        cardClassList += " open";
      } else if (card.shown) {
        cardClassList += " show";
      }

      return (
         <Card faClassList={faClass} setUpCardInteraction={this.props.setUpCardInteraction} key={index} id={index} cardClassList={cardClassList} card={card} />
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
