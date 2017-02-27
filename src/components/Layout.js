import React from 'react';
import { Link } from 'react-router';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Nav from './layout/Nav';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Nav/>
				<main>
					{this.props.children}
				</main>
				<Footer/>
			</div>
		);
	}
}
