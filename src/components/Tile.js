import React from 'react';

import styles from './style/Tile.scss';

export default class Tile extends React.Component {
	render() {
		// let {contents} = this.props;
		// console.log(contents);

		console.log(this.props.title);
		return(
			<div className={styles.itemWrapper}>
				<div className={styles.imageWrapper} >
					{/* <img src={this.props.imagePath} className={styles.imageWrapper} /> */}
					icon
				</div>
				<h2>{this.props.title}</h2>
				<div>
					{this.props.description}
				</div>
			</div>
		);
	}
}
