import React from 'react';

import styles from './style/Home.scss';

import ServicesTile from '../components/TileGroup';

export default class Home extends React.Component {
	// this.state = {
	//
	// };
	//
	// const services = [
	// 	{
	// 		title: 'System Administration',
	// 		description: 'From datacenter construction to business continuity to workstation provisioning, Comets has your systems needs covered.'
	// 	},
	// 	{
	// 		title: 'Networking',
	// 		description: 'Whether the job is configuring a LAN, wirelss network, security infrastructure etc.'
	// 	},
	// 	{
	// 		title: 'Software',
	// 		description: 'We can both help with roll out of a comerical product as well as custom develop to your needs.'
	// 	}
	// ];

	render() {

		return (
			<div className={styles.homeContainer}>

				<div className={styles.tagline}>
					<h3 className={styles.subText}>For over 30 years Comet and Company has been providing cutting edge high-technology solutions in and around New York City. </h3>
				</div>

				<div className={styles.servicesWrapper}>
					<ServicesTile caption="middle" description='SysAdmin'/>
					<ServicesTile caption="left" description='Networking' />
					<ServicesTile caption="right" description='Software' />

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
