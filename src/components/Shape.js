import React, { Component, Fragment } from 'react';
import Tile from './Tile';

class Shape extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coordArry: [ [ 1, 5 ], [ 1, 6 ], [ 2, 5 ], [ 2, 6 ] ],
			centerPoint: [ 1.5, 5.5 ]
		};
	}
	componentDidMount = () => {
		document.addEventListener('keydown', (event) => {
			switch(event.keyCode){
				case 37 :
					this.moveLeft();
					break;
				case 39 :
					this.moveRight();
					break;
				case 40 :
					this.moveDown();
					break;
				case 32 :
					this.rotate();
					break;
			}
		});
	}

	moveLeft = () => {
		console.log('in the move left function');
		this.state.centerPoint[1]--;
		let left = this.state.coordArry.map((coord) => {
			return [ coord[0], coord[1] - 1 ];
		});
		this.setState({
			coordArry: left
		});
	};

	moveRight = () => {
		console.log('in the move right function');
		this.state.centerPoint[1]++;
		let right = this.state.coordArry.map((coord) => {
			return [ coord[0], coord[1] + 1 ];
		});
		this.setState({
			coordArry: right
		});
	};

	moveDown = () => {
		this.state.centerPoint[0]++;
		console.log('in the move right function');
		let down = this.state.coordArry.map((coord) => {
			return [ coord[0] + 1, coord[1] ];
		});
		this.setState({
			coordArry: down
		});
	};

	rotate = (cx,cy,x,y) => {
    let radians = (Math.PI / 180) * 90,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
	}

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
