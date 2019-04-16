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
		this.setShape();
		document.addEventListener('keydown', this.keyListener);
		this.intervalID = window.setInterval(this.moveDown, 500);
		console.log("current shapes in didmount", this.props.currentShapes)
	};

	moveLeft = () => {
		let left = this.state.coordArry.map((coord) => {
			return [ coord[0], coord[1] - 1 ];
		});
		if (!this.collision(left, this.props.currentShapes)) {
			return;
		}
		this.state.centerPoint[1]--;
		this.setState({
			coordArry: left
		});
	};

	keyListener = (event) => {
		switch (event.keyCode) { //deprecated use event.key
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
	}

	moveRight = () => {
		let right = this.state.coordArry.map((coord) => {
			return [ coord[0], coord[1] + 1 ];
		});
		if (!this.collision(right, this.props.currentShapes)) {
			return;
		}
		this.state.centerPoint[1]++;
		this.setState({
			coordArry: right
		});
	};

	moveDown = () => {
		let down = this.state.coordArry.map((coord) => {
			return [ coord[0] + 1, coord[1] ];
		});
		if (!this.collision(down, this.props.currentShapes)){
			clearInterval(this.intervalID)
			document.removeEventListener('keydown', this.keyListener)
			if (this.endGame()){
				console.log("GAME OVER")
				return;
			}else{
				this.props.newShape(this.state.coordArry)
				return
			}
		}
		this.state.centerPoint[0]++;
		this.setState({
			coordArry: down
		});
	};

	endGame(){
		return !this.state.coordArry.every(coord => coord[0] > 1)
	}
	rotate = () => {
		let rotated = this.state.coordArry.map((coord) => actualrotatefunc(this.state.centerPoint, coord));
		if (!this.collision(rotated, this.props.currentShapes)) {
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


	collision = (collisionCoords, currentShapes) => {
		return collisionCoords.every((coord) => actualcollisionfunc(coord));
		function actualcollisionfunc(coord) {
			return coord[1] >= 1 && coord[1] <= 10 && coord[0] <= 20 && currentShapes.every((tile) => !(coord[1] === tile[1] && coord[0] === tile[0])) //returns false is there is a collision
			}

	}

	setShape = () => {
		let square = [ [ 1, 5 ], [ 1, 6 ], [ 2, 5 ], [ 2, 6 ] ];
		let squareCenterPoint = [1.5, 5.5]
		let line = [ [ 1, 4 ], [ 1, 5 ], [ 1, 6 ], [ 1, 7 ] ];
		let lineCenterPoint = [1.5, 5.5]
		let LShape = [ [ 1, 4 ], [ 2, 4 ], [ 3, 4 ], [ 3, 5 ] ];
		let LShapeCenterPoint = [2, 4]
		let LreverseShape = [ [ 1, 5 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ];
		let LreverseShapeCenterPoint = [2, 5]
		let stair = [ [ 1, 5 ], [ 2, 5 ], [ 2, 4 ], [ 3, 4 ] ];
		let stairCenterPoint = [2, 5]
		let backwardsStair = [ [ 1, 4 ], [ 2, 4 ], [ 2, 5 ], [ 3, 5 ] ];
		let backwardsStairPoint = [2, 4]
		let Tshape = [ [ 1, 4 ], [ 1, 5 ], [ 1, 6 ], [ 2, 5 ] ];
		let TshapeCenterPoint = [1, 5]

		let shapesArry = [ [square, squareCenterPoint], [line, lineCenterPoint], [LShape, LShapeCenterPoint], [LreverseShape, LreverseShapeCenterPoint], [stair, stairCenterPoint], [backwardsStair, backwardsStairPoint], [Tshape, TshapeCenterPoint]];
		let randomItem = shapesArry[Math.floor(Math.random() * shapesArry.length)];
		

		this.setState({
			coordArry: randomItem[0],
			centerPoint: randomItem[1]
		});
	};

	render() {
		return (
			<Fragment>
				{this.state.coordArry.map((coord, index) => {
					return <Tile row={coord[0]} column={coord[1]} key={index} />;
				})}
			</Fragment>
		);
	}
}

export default Shape;
