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
    fetch("http://localhost:3000/api/v1/scores", {
      method: "POST",
      body: {score: this.props.finalScore, user: this.state.initials}
    })
  }
  render() {
    return (
      <Form>
        <h1>Final Score {this.props.finalScore} !!!! YEAH</h1>
        <Form.Field>
          <label>Put In Your Initials! </label>
          <input type="text" value={this.state.initials} onChange={this.handleChange}/>
        </Form.Field>
        <Button onSubmit={this.handleSubmit}>Save Score1!!1!</Button>
      </Form>
    );
  }
}

export default SaveScore
