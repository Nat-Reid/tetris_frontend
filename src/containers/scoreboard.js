import React, { Component } from 'react';
import Score from '../components/Score'

class ScoreBoard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    } ;
  }

  render() {
    return (
      <div>
        <Score score={this.state.score} />
      </div>
    );
  }
}


export default ScoreBoard
