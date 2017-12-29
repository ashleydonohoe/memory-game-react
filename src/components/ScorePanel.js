import React from 'react';

const ScorePanel = () => {
  return (
    <section className="score-panel">
        <ul className="stars">
            <li><i className="fa fa-star"></i></li>
            <li><i className="fa fa-star"></i></li>
            <li><i className="fa fa-star"></i></li>
        </ul>

        <span id="moves">0</span> Moves

        <div id="timer"></div>

        <div className="restart">
            <i className="fa fa-repeat"></i>
        </div>
    </section>
  );
}

export default ScorePanel;
