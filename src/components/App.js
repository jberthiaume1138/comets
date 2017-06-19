import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Title from './layout/Title';
import Footer from './layout/Footer';
import Nav from './layout/Nav';

import Home from '../routes/Home';
import Services from '../routes/Services';
import NotFound from '../routes/NotFound';

import About from './About';
import TileGroup from '../components/TileGroup';

import styles from './style/App.scss';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			services: [
				{
					id: 1,
					title: 'Systems Administration',
					description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
					imagePath: 'images/sysadmin.svg'
				},
				{
					id: 2,
					title: 'Networking and Security',
					description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
					imagePath: 'images/networking.svg'
				},
				{
					id: 3,
					title: 'Software Development',
					description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
					imagePath: 'images/software.svg'
				}
			]
		};
	}

	render() {
		let {services} = this.state;

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
						<Route component={NotFound}/>
					</Switch>
				</main>
				<About />
				<TileGroup services={services} />
				<Footer />
			</div>
		);
	}
}
