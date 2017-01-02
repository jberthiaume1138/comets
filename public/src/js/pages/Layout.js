import React from 'react';
import { Link } from 'react-router';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Nav/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}
