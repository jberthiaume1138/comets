import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style/Header.scss';

export default class Header extends React.Component {
	render () {
		return (
			// <header>
				<div className={styles.headerWrapper}>
					<div className={styles.containerName}>
						<Link to="/">
							<h1 className={styles.name}>Comet and Company</h1>
							<h5 className={styles.subheader}>Downtown NYC since 1991</h5>
						</Link>
					</div>
				</div>
			// </header>
		);
	}
}
