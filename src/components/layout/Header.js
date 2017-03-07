import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

import styles from './style/Header.scss';

export default class Header extends React.Component {
	render () {
		return (
			<header className={styles.banner}>
				<div className={styles.containerName}>
					<Link to="/">
						<h1 className={styles.name}>Comet</h1>
						<p className={styles.subName}>and Company</p>
					</Link>
				</div>
				<div className={styles.containerNav}>
					<Nav/>
				</div>
			</header>
		);
	}
}
