import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Nav from './layout/Nav';

import Home from '../routes/Home';
import About from '../routes/About';
import Services from '../routes/Services';


import styles from './layout/style/App.scss';

export default class App extends React.Component {
	render() {
		return (
			<div id="App">
				<Nav />
				<div>
					<header>
						<Switch>
							<Header />

						</Switch>

					</header>
					<main>
						<Route exact path='/' component={Home} />
						<Route path='/Services' component={Services} />
						<Route path='/About' component={About} />
					</main>
				</div>
				<Footer />
			</div>
		);
	}
}
