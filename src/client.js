import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom';

import NotFound from './routes/NotFound';

// import Router from './Router';

import App from './components/App';
//
// class App extends React.Component {
// 	render() {
// 		return (
// 			<Router />
// 		);
// 	}
// }

ReactDOM.render(
	(
		<Router>
			<App/>
		</Router>
	),
	document.getElementById('root'));
