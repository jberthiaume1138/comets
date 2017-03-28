import React from 'react';

import Tile from './Tile';

export default class TileGroup extends React.Component {

	render() {

		// console.log(this.props);
		var {services} = this.props;
		// services.map(function(item) {
		// 	return console.log(item);
		// });
		// console.log(services);

		var hydrateServices = () => {
			// return services.map((item) => {return (<Tile key={2} {...services} />)	});

			return services.map(function(item) {
				// console.log(item);
				var title = item.title;
				// console.log(title);
				return (
					<Tile key={1} title={title} />
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
