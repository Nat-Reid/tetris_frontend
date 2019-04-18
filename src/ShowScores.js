import React, { Component } from 'react';

class ShowScores extends Component{
  constructor(props) {
    super(props);
    this.state = {
      highScores: []
    };
  }

  componentDidMount(){
    fetch("https://reactetris-backend.herokuapp.com/api/v1/scores")
    .then(response => {
      return response.json()
    })
    .then(json => {
      let sorted = json.sort(function (a, b) { return b.score - a.score });
      console.log(sorted)
      this.setState({highScores: json})
    });
  }

  renderScores = () =>{
    return this.state.highScores.map(score => {
      return <p>{score.user.initials} | {score.score}</p>
    })
  }

  render() {
    return (
      <div>
        <a style={{ float: "right" }} href="https://reactetris.herokuapp.com">Play Again!</a>
        <h1>High Scores:</h1>
        {this.renderScores()}
      </div>
    );
  }
}

export default ShowScores
