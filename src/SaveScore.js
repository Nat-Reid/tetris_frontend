import React, { Component } from 'react';
import {Form, Button} from 'semantic-ui-react'

class SaveScore extends Component{
  constructor(props) {
    super(props);
    this.state = {
      initials: ""
    } ;
  }

  handleChange = (ev) => {
    this.setState({initials: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    fetch("https://reactetris-backend.herokuapp.com/api/v1/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify( {score: this.props.finalScore, initials: this.state.initials})
    })
    .then(res => {
      window.location.href = "https://reactetris.herokuapp.com/showscores"
    })
  }
  render() {
    if (this.props.finalScore === null){
      window.location.href = "https://reactetris.herokuapp.com/"
      return
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Final Score {this.props.finalScore} !!!! YEAH</h1>
        <Form.Field>
          <label>Put In Your Initials! </label>
          <input type="text" value={this.state.initials} onChange={this.handleChange}/>
        </Form.Field>
        <Button>Save Score</Button>
      </Form>
    );
  }
}

export default SaveScore
