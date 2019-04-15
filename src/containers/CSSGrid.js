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
}
	render() {
		return (
			<div className="grid">
			{this.state.renderShape ? <Shape currentShapes={this.state.currentShapes} newShape={this.newShape}/> : null }
			{this.state.currentShapes.map((coord, index) => {
					return <Tile y={coord[0]} x={coord[1]} key={index} />;
				})}
			</div>
		);
	}
}

export default CSSGrid;
