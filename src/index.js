import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import SaveScore from './SaveScore';
import ShowScores from './ShowScores';
import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';
// import Redirect from 'react'


class Routing extends Component {
  constructor(props){
    super(props)
    this.state = {
      finalScore: null
    }
  }

  setFinalScore = (finalScore) => {
    this.setState({ finalScore })
  }

  render(){

    return(
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => this.state.finalScore === null ? <App setFinalScore={this.setFinalScore} /> : <Redirect to='/savescore' />} />


            <Route path="/savescore" component={() => <SaveScore finalScore={this.state.finalScore} />}/>
            <Route path="/showscores" component={ShowScores}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
