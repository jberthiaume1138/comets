import React from 'react';
import { Link } from 'react-router';

import styles from './style/Footer.scss';

import twitter from '../../images/twitter.svg';
import linkedin from '../../images/linkedin.png';

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
					<div className={styles.social}>
						<a href="https://twitter.com/carlfriedberg" target="_blank"><img src={twitter} height='35' /></a>
						<a href="https://www.linkedin.com/in/carlfriedberg/" target="_blank"><img src={linkedin} height='25' /></a>
					</div>
					<div className={styles.footerText}>Downtown New York since 1991</div>
				</div>
			</footer>
		);
	}
}
