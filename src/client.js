import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom';

import NotFound from './routes/NotFound';

import App from './components/App';

ReactDOM.render(
	(
		<Router>
			<App/>
		</Router>
	),
	document.getElementById('root'));
