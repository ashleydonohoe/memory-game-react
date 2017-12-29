import React, { Component } from 'react';
import './App.css';
import CardData from './CardData';

import Header from './components/Header';
import ScorePanel from './components/ScorePanel';
import CardDeck from './components/CardDeck';

class App extends Component {
  render() {
    console.log(CardData);
    return (
      <div className="container">
        <div id="game-play-area">
            <Header />
            <ScorePanel />
            <CardDeck />
        </div>
    </div>
    );
  }
}

export default App;
