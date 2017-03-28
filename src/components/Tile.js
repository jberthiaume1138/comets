import React from 'react';

import styles from './style/Tile.scss';

export default class Tile extends React.Component {
	
	render() {
		// let {contents} = this.props;
		// console.log(contents);
		console.log(this.props.title);
		return(
			<div>
				<h2>{this.props.id}: {this.props.title}</h2>
			</div>
		);
	}
}
