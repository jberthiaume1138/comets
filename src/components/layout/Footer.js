import React from 'react';

import styles from './style/Footer.scss';

export default class Footer extends React.Component {
	render () {
		return (
      <footer>
				<p className={styles.footerText}>Downtown New York since 1991</p>
			</footer>
		);
	}
}
