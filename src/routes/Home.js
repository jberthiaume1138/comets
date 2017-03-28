import React from 'react';

import styles from './style/Home.scss';

import TileGroup from '../components/TileGroup';

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			services: [
				{
					title: 'System Administration',
					description: 'From datacenter construction to business continuity to workstation provisioning, Comets has your systems needs covered.'
				},
				{
					title: 'Networking',
					description: 'Whether the job is configuring a LAN, wirelss network, security infrastructure etc.'
				},
				{
					title: 'Software',
					description: 'We can both help with roll out of a commerical product as well as custom develop to your needs.'
				}
			],
			food: 'cheese'
		};
	}

	render() {
		// console.log(this.state);
		let {services, food} = this.state;

		// console.log('This is the food: ' + food);

		return (
			<div className={styles.homeContainer}>
				<div className={styles.tagline}>
					<h3 className={styles.subText}>For over 30 years Comet and Company has been providing cutting edge high-technology solutions in and around New York City. </h3>
				</div>

				<div className={styles.servicesWrapper}>
					<TileGroup services={services} />

					{/* <div className={[styles.inner, styles.left].join(' ')}>
						<p className={styles.description}>Left</p>
						</div>

						<div className={[styles.inner, styles.right].join(' ')}>
						<p className={styles.description}>Middle</p>
						</div>

						<div className={[styles.inner, styles.right].join(' ')}>
						<p className={styles.description}>Right</p>
					</div> */}

				</div>
			</div>
		);
	}
}
