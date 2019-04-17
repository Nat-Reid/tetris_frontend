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
    clearedRows: []
  }
}

  grabbingRows = (clearedrows) => {
    this.setState({
      clearedRows: clearedrows
    })
  }
  render() {
    return (
      <div className="App">
        <ScoreBoard clearedRows={this.state.clearedRows}/>
        <CSSGrid grabbingRows={this.grabbingRows}/>
      </div>
    );
  }
}

export default App;
