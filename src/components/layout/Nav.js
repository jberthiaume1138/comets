import React from 'react';
import { Link } from 'react-router';

import style from './style/Nav.scss';

export default class Nav extends React.Component {
	render() {
		return (
			<nav>
				<Link to="about" activeClassName={style.activeStyle}>About</Link>
				<Link to="services"  activeStyle={{ color: 'green' }}>Services</Link>
				<Link to="contact">Contact</Link>
			</nav>
		);
	}
}
