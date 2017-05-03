import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom';

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
			<App />
		</Router>
	),
	document.getElementById('root'));
