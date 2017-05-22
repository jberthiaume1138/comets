import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Title from './layout/Title';
import Footer from './layout/Footer';
import Nav from './layout/Nav';

import Home from '../routes/Home';
import About from '../routes/About';
import Services from '../routes/Services';
import NotFound from '../routes/NotFound';

import styles from './layout/style/App.scss';

export default class App extends React.Component {
	render() {
		return (
			<div id="App" className={styles.appWrapper}>
				<header>
					<Title />
					<Nav />
				</header>
				<main>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/services' component={Services}/>
						<Route path='/about' component={About}/>
						<Route component={NotFound}/>
					</Switch>
				</main>
				<Footer />
			</div>
		);
	}
}
