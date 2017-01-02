import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
	render() {
		return (
			<nav>
				<Link to="about">About</Link>
				<Link to="portfolio">Portfolio</Link>
				<Link to="Contact">Contact</Link>
			</nav>
		);
	}
}
