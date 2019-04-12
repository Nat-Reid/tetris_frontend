import React, { Component, Fragment } from 'react';
import Tile from './Tile';

class Shape extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coordArry: [ [ 1, 4 ], [ 1, 5 ], [ 1, 6 ], [ 1, 7 ] ],
			centerPoint: [ 1.5, 5.5 ]
		};
	}
	componentDidMount = () => {
		document.addEventListener('keydown', (event) => {
			switch (event.keyCode) {
				case 37:
					this.moveLeft();
					break;
				case 39:
					this.moveRight();
					break;
				case 40:
					this.moveDown();
					break;
				case 32:
					this.rotate();
					break;
			}
		});
		let intervalID = window.setInterval(this.moveDown, 500);
	};

	moveLeft = () => {
		this.state.centerPoint[1]--;
		let left = this.state.coordArry.map((coord) => {
			return [ coord[0], coord[1] - 1 ];
		});
		if (!this.collision(left)) {
			return;
		}
		this.setState({
			coordArry: left
		});
	};

	moveRight = () => {
		this.state.centerPoint[1]++;
		let right = this.state.coordArry.map((coord) => {
			return [ coord[0], coord[1] + 1 ];
		});
		if (!this.collision(right)) {
			return;
		}
		this.setState({
			coordArry: right
		});
	};

	moveDown = () => {
		this.state.centerPoint[0]++;
		let down = this.state.coordArry.map((coord) => {
			return [ coord[0] + 1, coord[1] ];
		});
		if (!this.collision(down)) {
			return;
		}
		this.setState({
			coordArry: down
		});
	};

	rotate = () => {
		// this.setState((prevState) => {
		// 	return { coordArry: prevState.coordArry.map((coord) => actualrotatefunc(this.state.centerPoint, coord)) };
		// });
		let rotated = this.state.coordArry.map((coord) => actualrotatefunc(this.state.centerPoint, coord));
		if (!this.collision(rotated)) {
			return;
		}
		function actualrotatefunc([ cx, cy ], [ x, y ]) {
			let radians = Math.PI / 180 * 90,
				cos = Math.cos(radians),
				sin = Math.sin(radians),
				nx = cos * (x - cx) + sin * (y - cy) + cx,
				ny = cos * (y - cy) - sin * (x - cx) + cy;
			return [ nx, ny ];
		}
		this.setState({
			coordArry: rotated
		});
	};

	collision = (collisionCoords) => {
		// debugger;
		return collisionCoords.every((coord) => actualcollisionfunc(coord));

		function actualcollisionfunc(coord) {
			return coord[1] >= 1 && coord[1] <= 10 && coord[0] <= 20;
		}
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
