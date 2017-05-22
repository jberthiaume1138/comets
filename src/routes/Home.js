import React from 'react';

import styles from './style/Home.scss';

import Banner from '../components/Banner';
import TileGroup from '../components/TileGroup';

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			services: [
				{
					id: 1,
					title: 'Systems Administration',
					description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
					imagePath: 'images/sysadmin.svg'
				},
				{
					id: 2,
					title: 'Networking and Security',
					description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
					imagePath: 'images/networking.svg'
				},
				{
					id: 3,
					title: 'Software Development',
					description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
					imagePath: 'images/software.svg'
				}
			]
		};
	}

	render() {
		let {services} = this.state;

		return (
			<div className={styles.homeContainer}>
				<Banner />
				<div className={styles.tagline}>
					<h3 className={styles.subText}>For over 25 years Comet and Company has been providing cutting edge technology solutions in and around New York City. </h3>
				</div>
				<div className={styles.servicesWrapper}>
					<TileGroup services={services} />
				</div>
			</div>
		);
	}
}
