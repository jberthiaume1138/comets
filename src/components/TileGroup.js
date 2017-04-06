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
				{hydrateServices()}
			</div>
		);
	}
}
