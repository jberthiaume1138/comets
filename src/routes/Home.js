import React from 'react';

import styles from './style/Home.scss';

import ServicesTile from '../components/Tile';

export default class Home extends React.Component {
	render() {
		return (
			<div className={styles.homeContainer}>

				<div className={styles.tagline}>
					<h3 className={styles.subText}>Since 1991 Comet and Company has been providing cutting edge high-technology solutions in and around New York City. </h3>
				</div>

				<div className={styles.servicesWrapper}>
					<ServicesTile />
					<ServicesTile />
					<ServicesTile />

					<div className={[styles.inner, styles.left].join(' ')}>
						<p className={styles.text}>Left</p>
					</div>

					<div className={[styles.inner, styles.right].join(' ')}>
						<p className={styles.text}>Middle</p>
					</div>

					<div className={[styles.inner, styles.right].join(' ')}>
						<p className={styles.text}>Right</p>
					</div>

				</div>
			</div>
		);
	}
}
