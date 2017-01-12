import React from 'react';

import styles from './Header.scss';

export default class Header extends React.Component {
	render () {
		return (
			<header className={styles.myHeader}>
				<h1 className={styles.myH1}>HeaderTextHere!!!</h1>
				<h4 className={styles.myThing}>Some Sub-Header Stuff</h4>
			</header>
		);
	}
}
