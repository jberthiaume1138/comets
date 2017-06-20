import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style/Nav.scss';

export default class Nav extends React.Component {
	render() {
		return (
			<nav>
				<div className={styles.navWrapper}>
					<a href="#about" activeClassName={styles.activeStyle}>About</a>
					<NavLink to="/services" activeClassName={styles.activeStyle} >Services</NavLink>
					<a href="#footer" activeClassName={styles.activeStyle}>Contact</a>
				</div>
			</nav>
		);
	}
}
