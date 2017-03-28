import React from 'react';

import Tile from './Tile';

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
			<div>
				{hydrateServices()}
			</div>
		);
	}
}
