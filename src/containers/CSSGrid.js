import React, { Component } from 'react';

class CSSGrid extends Component{
  constructor(props) {
    super(props);
    this.state = {
      bob: null
    } ;
  }

  renderTiles(){
    return new Array(200).fill(0).map((item,index) => {
      return <span className="tile" key={index}></span>
    })
  }

  render() {
    return (
      <div className="grid">
        {this.renderTiles()}
      </div>
    );
  }
}

export default CSSGrid
