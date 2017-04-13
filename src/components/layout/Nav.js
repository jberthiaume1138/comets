import React from 'react';
import { Link } from 'react-router';

import styles from './style/Nav.scss';

export default class Nav extends React.Component {
	render() {
		return (
			<nav>
				<div className={styles.navWrapper}>
					<Link to="about" activeClassName={styles.activeStyle}>About</Link>
					<Link to="services" activeClassName={styles.activeStyle} >Services</Link>
					<Link to="contact" activeClassName={styles.activeStyle}>Contact</Link>
				</div>
			</nav>
		);
	}
}
