import React, { Component } from 'react';
import Score from '../components/Score'

class ScoreBoard extends Component{
  render() {
    return (
      <div>
        <Score score={this.props.score} />
      </div>
    );
  }
}


export default ScoreBoard
