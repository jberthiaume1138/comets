import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style/Nav.scss';

export default class Nav extends React.Component {
	render() {
		return (
			<nav>
				<div className={styles.navWrapper}>
					<NavLink to="about" activeClassName={styles.activeStyle}>About</NavLink>
					<NavLink to="services" activeClassName={styles.activeStyle} >Services</NavLink>
					<NavLink to="contact" activeClassName={styles.activeStyle}>Contact</NavLink>
				</div>
			</nav>
		);
	}
}
