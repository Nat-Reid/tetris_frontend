import React, { Component } from 'react';

class Tile extends Component {
	render() {
		return <span className="tile" style={{ gridArea: `${this.props.y} / ${this.props.x} / span 1 / span 1` }} />;
	}
}

export default Tile;
