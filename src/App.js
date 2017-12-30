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

  // Checks if cards match
  checkForMatch = () => {

  }

  // Sets up interaction for cards
  setUpCardInteraction = (id, card) => {
    const { openCards } = this.state;
    // const { openCards}
    // // If less than two cards open and the card clicked isn't already open, add the card to the array for open cards
    // if(openCards.length < 2 && !gameCards[i].classList.contains('open')) {
    //     gameCards[i].classList.add('show');
    //     gameCards[i].classList.add('open');
    //     openCards.push({content: gameCards[i].textContent, id: event.target.id});
    //
    //     // If two cards are open, check for match
    //     this.checkForMatch();
    // }
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
