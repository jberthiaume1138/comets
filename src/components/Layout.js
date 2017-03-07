import React from 'react';
import { Link } from 'react-router';

import Header from './layout/Header';
import Footer from './layout/Footer';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<main>
					{this.props.children}
				</main>
				<Footer/>
			</div>
		);
	}
}
