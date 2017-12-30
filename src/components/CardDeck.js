import React, { Component } from 'react';
import Card from './Card';

class CardDeck extends Component {
  createCards = () => {
    const cards = this.props.shuffledCards;

    return cards.map((card, index) => {
      // Generate class list
      let classList = "fa " + card.text;

      if(card.open && card.shown) {
        classList += " open show";
      } else if(card.open) {
        classList += " open";
      } else if (card.shown) {
        classList += " show";
      }

      return (
         <Card setUpCardInteraction={this.props.setUpCardInteraction} key={index} id={index} classList={classList} card={card} />
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
