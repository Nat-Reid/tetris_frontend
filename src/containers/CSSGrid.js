import React, { Component } from 'react';
import Shape from '../components/Shape';
import Tile from '../components/Tile'
class CSSGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			renderShape: true,
			currentShapes: []
		};
	}

  newShape = (coordArray) => {
    console.log("NEW SHAPE FUNCTION")
    this.setState({
    	renderShape: false,
    	currentShapes: this.state.currentShapes.concat(coordArray)
    })
    this.setState({
    	renderShape: true
    })
    let clearedRows = []
    for (let row = 20; row >= 1; row--){
      if (this.checkRow(row)){
        this.clearRow(row)
        clearedRows.push(row)
      }
    }
    clearedRows.reverse()
    console.log("rows to be shifted", clearedRows)
    clearedRows.forEach(row => this.shiftRows(row));
  }

  clearRow = (row) => {
    let newCurrentShapes = this.state.currentShapes.filter(currentShape => currentShape[0] != row)
    this.setState({
      currentShapes: newCurrentShapes
    })
    console.log("Clearing Row!", row)
  }

  checkRow = (row) =>{
    for(let column = 1; column<=10; column++){ //all columns
      if (!this.state.currentShapes.find(cs => cs[0] === row && cs[1] === column)){ //if square empty
        return false
      }
    }
    console.log("row full, should be cleared!")
    return true
  }

  shiftRows(row){
    console.log("Shifting row", row)
    let newCurrentShapes = this.state.currentShapes.map(cs => {
      if (cs[0] < row){
        return [cs[0]+1, cs[1]]
      }else{
        console.log(cs)
        return cs
      }
    })
    this.setState({
      currentShapes: newCurrentShapes
    })
  }

	render() {
		return (
			<div className="grid">
			{this.state.renderShape ? <Shape currentShapes={this.state.currentShapes} newShape={this.newShape}/> : null }
			{this.state.currentShapes.map((coord, index) => {
					return <Tile row={coord[0]} column={coord[1]} key={index} />;
				})}
			</div>
		);
	}
}

export default CSSGrid;
