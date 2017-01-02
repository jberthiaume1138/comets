import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="portfolio" name={Portfolio} component={Portfolio}></Route>
			<Route path="about" name={About} component={About}></Route>
			<Route path="about" name={Contact} component={Contact}></Route>
		</Route>
	</Router>,
    app
);
