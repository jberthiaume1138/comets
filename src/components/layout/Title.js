import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style/Title.scss';

export default class Header extends React.Component {
	render () {
		return (
			<div className={styles.titleWrapper}>
				<Link to="/">
					<h1 className={styles.name}>Comets</h1>
				</Link>
			</div>
		);
	}
}
