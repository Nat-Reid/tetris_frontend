import React, { Component } from 'react';

class ShowScores extends Component{
  constructor(props) {
    super(props);
    this.state = {
      highScores: []
    };
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/scores")
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log("scores response",json)
      this.setState({highScores: json})
    });
  }

  renderScores = () =>{
    return this.state.highScores.map(score => {
      return <p>{score.score}</p>
    })
  }

  render() {
    return (
      <div>
        <h1>High Scores:</h1>
        {this.renderScores()}
      </div>
    );
  }
}

export default ShowScores
