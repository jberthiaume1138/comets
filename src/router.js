import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './components/Layout';

import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Services from './routes/Services';

const Routes = () => {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="about" component={About}></Route>
				<Route path="contact" component={Contact}></Route>
				<Route path="services" component={Services}></Route>
			</Route>
		</Router>
	);
};

export default Routes;
