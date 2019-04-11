import React, { Component } from 'react';
import ScoreBoard from './containers/scoreboard'
import CSSGrid from './containers/CSSGrid'
import './App.css';
import './Game.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScoreBoard />
        <CSSGrid />
      </div>
    );
  }
}

export default App;
