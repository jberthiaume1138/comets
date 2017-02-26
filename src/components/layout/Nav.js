import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
	render() {
		return (
			<nav>
				<Link to="about">About</Link>
				<Link to="services">Services</Link>
				<Link to="contact">Contact</Link>
			</nav>
		);
	}
}
