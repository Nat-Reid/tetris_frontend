import React, { Component } from 'react';

class Tile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "#E0FBFC"
		}
	}
	
	render() {
		return <span className="tile"  style={{ gridArea: `${this.props.row} / ${this.props.column} / span 1 / span 1`, backgroundColor: this.state.color }} />;
	}
}

export default Tile;
