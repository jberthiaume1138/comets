import React from 'react';

import './Header.scss';

export default class Header extends React.Component {
	render () {
		return (
			<header>
				<h1>HeaderTextHere</h1>
				<h4 className="thing">Some Sub-Header Stuff</h4>
			</header>
		);
	}
}
