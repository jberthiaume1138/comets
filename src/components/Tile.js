import React from 'react';

import styles from './style/Tile.scss';

export default class Tile extends React.Component {
	render() {
		return(
			<div>
				<h2>{this.props.title}</h2>
				<p>{this.props.description}</p>
			</div>
		);
	}
}
