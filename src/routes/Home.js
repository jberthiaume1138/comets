import React from 'react';

import styles from './style/Home.scss';

export default class Home extends React.Component {
	render() {
		return (
			<div className={styles.homeContainer}>
				<div className={[styles.inner, styles.left].join(' ')}>
					<h3 className={styles.subText}>Some content about Comets</h3>
					<p className={styles.text}>Comet and Company specializes in providing hardware, software, and services to implement best-quality technology solutions. Comet and Company specializes in providing hardware, software, and services to implement best-quality technology solutions. Comet and Company specializes in providing hardware, software, and services to implement best-quality technology solutions.</p>
					<p className={styles.text}>Another line here about something</p>


				</div>
				<div className={[styles.inner, styles.right].join(' ')}>
					<p className={styles.text}>Just a sample of the services we can provide:</p>
					<ul className={styles.listWrapper}>
						<li className={styles.text}>Systems Administration</li>
						<li className={styles.text}>Networking</li>
						<li className={styles.text}>Software Support</li>
						<li className={styles.text}>OpenVMS</li>
					</ul>
				</div>
			</div>
		);
	}
}
