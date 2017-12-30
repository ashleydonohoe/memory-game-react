import React, { Component } from 'react';
import './App.css';
import CardData from './CardData';

import Header from './components/Header';
import ScorePanel from './components/ScorePanel';
import CardDeck from './components/CardDeck';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledCards: [],
      openCards: [],
      numberOfLockedCards: 0,
      numberOfMoves: 0,
      numberOfStars: 3,
      time: 0,
      timer: null
    };

    this.updateCardState = this.updateCardState.bind(this);
  }

  componentDidMount() {
    const shuffledCards = this.shuffleCards(CardData);
    // Start the timer
    // Used as reference for clearing and setting timer: https://www.w3schools.com/js/js_timing.asp
    this.setState({
      timer: setInterval(this.updateTimer, 1000),
      shuffledCards
    });
  }

  componentWillUnmount() {
    this.setState({
      timer: clearInterval(this.state.timer)
    });
  }


  // Shuffle function from http://stackoverflow.com/a/2450976
  shuffleCards = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Updates the time in the state each second
  updateTimer = () => {
    const newTime = this.state.time + 1;
    this.setState({
      time: newTime
    });
  }

  // updates the star rating in score Panel
  updateStarRating() {
    const { numberOfMoves, numberOfStars } = this.state;
    if(numberOfMoves < 12) {
      this.setState({
        numberOfStars: 3
      });
    } else if (numberOfMoves >= 12 && numberOfMoves < 18) {
      this.setState({
        numberOfStars: 2
      });
    } else {
      this.setState({
        numberOfStars: 1
      });
    }
  }

  // Check if game is over
  checkForGameEnd() {
    const { numberOfLockedCards, shuffledCards } = this.state;
    if(numberOfLockedCards === shuffledCards.length) {
      this.resetGame();
    }
  }

  // Checks if cards match
  checkForMatch = () => {
    const { openCards, numberOfMoves, numberOfLockedCards } = this.state;

    if(openCards.length === 2) {
      console.log("Check for match!");

      // Increase # of moves
      this.setState({
        numberOfMoves: numberOfMoves + 1
      });

      // updateStarRating
      this.updateStarRating();

      // Check if both open cards have the same symbol
      if(openCards[0].text === openCards[1].text) {
        // Keep cards locked and update number of locked cards
        this.setState({
          numberOfLockedCards: numberOfLockedCards + 2
        }, this.checkForGameEnd);
      } else {
        // They are not a match, so don't show/lock cards
        console.log("they are not a match");
        setTimeout(() => {
          this.updateCardState(openCards, false);
        }, 500);
      }

      // Clear open cards pair
      this.setState({
        openCards: []
      });
    }

  }

  // Update card state
  updateCardState = (cards, flag) => {
    let newShuffledCardData = this.state.shuffledCards;
    // Find the card in the state array
    const newCardData = this.state.shuffledCards.forEach((oldCard, index) => {
      cards.forEach((card) => {
        if(oldCard.id === card.id) {
          let card = newShuffledCardData[index];
          card.open = flag;
          card.shown = flag;
          newShuffledCardData[index] = card;
        }
      })
    });

    // Update state of cardData and opencards
    this.setState({
      shuffledCards: newShuffledCardData
    }, this.checkForMatch);
  }

  // Update the card classes and status
  updateCardData(card) {
    const cards = [card];
    this.updateCardState(cards, true);
  }

  // Sets up interaction for cards
  setUpCardInteraction = (card, id) => {
    const { openCards} = this.state;

    // If there are less than 2 open cards and the card selected is not open already
    if(openCards.length < 2 && !card.open) {

      // Push card to open cards
      const updatedOpenedCards = openCards.concat(card);

      this.setState({
        openCards: updatedOpenedCards
      }, this.updateCardData(card));
    }
  }

  // Resets game state
  resetGame = () => {
    this.setState({
      shuffledCards: [],
      openCards: [],
      numberOfLockedCards: 0,
      timer: clearInterval(this.state.timer),
      time: 0,
      numberOfMoves: 0,
      numberOfStars: 3
    });
  }

  render() {
    return (
      <div className="container">
        <div id="game-play-area">
            <Header />
            <ScorePanel time={this.state.time} stars={this.state.numberOfStars} moves={this.state.numberOfMoves} onGameReset={this.resetGame} />
            <CardDeck shuffledCards={this.state.shuffledCards} setUpCardInteraction={this.setUpCardInteraction.bind(this)} />
        </div>
    </div>
    );
  }
}

export default App;
