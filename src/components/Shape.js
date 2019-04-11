import React, { Component, Fragment } from 'react';
import Tile from './Tile';

class Shape extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coordArry: [ [ 1, 5 ], [ 1, 6 ], [ 2, 5 ], [ 2, 6 ] ]
		};
	}
	componentDidMount = () => {
		document.addEventListener('keydown', (event) => {
			if (event.keyCode === 37) {
				this.moveLeft();
			} else if (event.keyCode === 39) {
				this.moveRight();
			} else if (event.keyCode === 40) {
				this.moveDown();
			}
		});
	};
	moveLeft = () => {
		console.log('in the move left function');
		let left = this.state.coordArry.map((coord) => {
			return [ coord[0], coord[1] - 1 ];
		});
		this.setState({
			coordArry: left
		});
	};

	moveRight = () => {
		console.log('in the move right function');
		let right = this.state.coordArry.map((coord) => {
			return [ coord[0], coord[1] + 1 ];
		});
		this.setState({
			coordArry: right
		});
	};

	moveDown = () => {
		console.log('in the move right function');
		let down = this.state.coordArry.map((coord) => {
			return [ coord[0] + 1, coord[1] ];
		});
		this.setState({
			coordArry: down
		});
	};

	render() {
		return (
			<Fragment>
				{this.state.coordArry.map((coord, index) => {
					return <Tile y={coord[0]} x={coord[1]} key={index} />;
				})}
			</Fragment>
		);
	}
}

export default Shape;
