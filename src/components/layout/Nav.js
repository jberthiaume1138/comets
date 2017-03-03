import React from 'react';
import { Link } from 'react-router';

import style from './style/Nav.scss';

export default class Nav extends React.Component {
	render() {
		return (
			<nav>
				<Link to="about" activeClassName={style.activeStyle}>About</Link>
				<Link to="services" activeClassName={style.activeStyle} >Services</Link>
				<Link to="contact" activeClassName={style.activeStyle}>Contact</Link>
			</nav>
		);
	}
}
