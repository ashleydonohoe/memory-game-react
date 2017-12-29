import React, { Component } from 'react';

class ScorePanel extends Component {
  renderStarRating(stars) {
    if(stars == 3) {
      return (
        <div><li><i className="fa fa-star"></i></li><li><i className="fa fa-star"></i></li><li><i className="fa fa-star"></i></li></div>
      );
    } else if (stars == 2) {
      return (
        <div><li><i className="fa fa-star"></i></li><li><i className="fa fa-star"></i></li></div>
      )
    } else {
      return (
        <div><li><i className="fa fa-star"></i></li></div>
      )
    }
  }

  render() {
    const { stars, time, moves} = this.props;

    return (
      <section className="score-panel">
          <ul className="stars">
              {this.renderStarRating(stars)}
          </ul>

          <span id="moves">{moves}</span> Moves

          <div id="timer"><strong>Time:</strong> {time} seconds</div>

          <div className="restart">
              <i className="fa fa-repeat"></i>
          </div>
      </section>
    );
  }
}

export default ScorePanel;
