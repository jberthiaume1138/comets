import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style/Banner.scss';

export default class Banner extends React.Component {
	render () {
		return (
			<div className={styles.bannerWrapper}>
				<div className={styles.containerName}>
					<Link to="/">
						<h1 className={styles.name}>Comet and Company</h1>
						<h5 className={styles.subheader}>Downtown NYC since 1991</h5>
					</Link>
        </div>
        <div className={styles.containerTagline}>
          <h3 className={styles.tagline}>For over 25 years Comet and Company has been providing cutting edge technology solutions in and around New York City. </h3>
					<span className={styles.downArrow}>></span>
        </div>
			</div>
		);
	}
}
