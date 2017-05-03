import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Nav from './layout/Nav';

import Home from '../routes/Home';
import About from '../routes/About';
import Services from '../routes/Services';


import styles from './layout/style/Layout.scss';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<Header />
				<div>
					<Route exact path='/' component={Home} />
					<Route path='/About' component={About} />
					<Route path='/Services' component={Services} />
				</div>
				<Footer />
			</div>
		);
	}
}
