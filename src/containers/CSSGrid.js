import React, { Component } from 'react';
import Shape from '../components/Shape';
class CSSGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bob: null
		};
	}

	render() {
		return (
			<div className="grid">
				<Shape />
			</div>
		);
	}
}

export default CSSGrid;
