import React from 'react';
import { Link } from 'react-router';

import styles from './style/Footer.scss';

export default class Footer extends React.Component {
	render () {
		return (
      <footer>
				<div className={styles.footerWrapper}>
					<div className={styles.footerNav}>
						<Link to="about" activeClassName={styles.activeStyle}>About</Link>
						<Link to="services" activeClassName={styles.activeStyle} >Services</Link>
						<Link to="contact" activeClassName={styles.activeStyle}>Contact</Link>
					</div>
					<p className={styles.footerText}>Downtown New York since 1991</p>
				</div>
			</footer>
		);
	}
}
