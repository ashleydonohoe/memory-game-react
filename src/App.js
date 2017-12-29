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
    // Start the timer
    // Used as reference for clearing and setting timer: https://www.w3schools.com/js/js_timing.asp
    this.setState({
      timer: setInterval(this.updateTimer, 1000)
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

  render() {
    return (
      <div className="container">
        <div id="game-play-area">
            <Header />
            <ScorePanel time={this.state.time} stars={this.state.numberOfStars} moves={this.state.numberOfMoves} />
            <CardDeck />
        </div>
    </div>
    );
  }
}

export default App;
