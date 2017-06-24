import React from 'react';

import Tile from './Tile';

import styles from './style/TileGroup.scss';

export default class TileGroup extends React.Component {

	render() {

		var {services} = this.props;

		var hydrateServices = () => {
			return services.map((item) => {
				return (
					<Tile key={item.id} {...item} />
				);
			});

		};

		return(
			<div className={styles.TileGroupWrapper}>
				<div className={styles.TileGroupHeader}>
					<h3>Our Services Include:</h3>
				</div>
				<div className={styles.TileGroupContent}>
					{hydrateServices()}
				</div>
				<div className={styles.TileGroupContent}>
					<p>
						Click here for more services. Some more text here about things that are useful.
					</p>
				</div>
			</div>
		);
	}
}
