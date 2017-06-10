import React from 'react';

import styles from './style/Sidebar.scss';

export default class Sidebar extends React.Component {
	render() {
		return (
			<aside className={styles.sidebarWrapper}>
				<div>
					<h4>Call Us Today</h4>
					<p>212 123 4567</p>
				</div>
			</aside>
		);
	}
}
