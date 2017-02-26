import React from 'react';
import { Link } from 'react-router';

import styles from './style/Header.scss';

export default class Header extends React.Component {
	render () {
		return (
			<header className={styles.banner}>
				<Link to="/">
					<h1 className={styles.header}>Comet and Company</h1>
				</Link>
			</header>
		);
	}
}
