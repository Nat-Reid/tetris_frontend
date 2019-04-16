import React, { Component } from 'react';
import Score from '../components/Score'

class ScoreBoard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    } ;
  }
componentWillReceiveProps(nextProps) {
  this.calculateScore(nextProps)
  console.log(this.state)
}
  calculateScore = (nextProps) => {
    let addingScore = 0
    switch (nextProps.clearedRows.length) {
      case 1:
      addingScore = 40;
      break;
      case 2:
      addingScore = 100;
      break;
      case 3:
      addingScore = 300;
      break;
      case 4:
      addingScore = 1200;
      break;
    }
    this.setState((prevState) => {
      return {score: prevState.score + addingScore}
    })
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
