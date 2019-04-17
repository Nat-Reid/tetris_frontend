import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ScoreBoard from './containers/scoreboard'
import CSSGrid from './containers/CSSGrid'
import './App.css';
import './Game.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearedRows: [],
      score: 0
    }
    console.log("reloading app!")
  }
  // componentWillReceiveProps(nextProps) {
  //   this.calculateScore(nextProps)
  // }

  // getScore = (score) => {
  //   this.setState({ score })
  // }
  // , () => this.props.setFinalScore(this.state.score)


  gameOver = () => {
    this.props.setFinalScore(this.state.score)
    console.log("FINAL SCORE", this.state.score)
    
  }

  grabbingRows = (clearedrows) => {
    this.setState({
      clearedRows: clearedrows
    }, () => this.calculateScore())
  }

  calculateScore = (nextProps) => {
    let addingScore = 0
    switch (this.state.clearedRows.length) {
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
      return { score: prevState.score + addingScore }
    })
  }

  render() {
    return (
      <div className="App">
        <ScoreBoard clearedRows={this.state.clearedRows} score={this.state.score}/>
        <CSSGrid gameOver={this.gameOver} grabbingRows={this.grabbingRows}/>
      </div>
    );
  }
}

export default App;
