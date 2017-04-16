import React from 'react';
import { Link } from 'react-router';

import styles from './style/Footer.scss';

import twitter from '../../images/twitter.svg';
import linkedin from '../../images/linkedin.png';
import email from '../../images/email-icon.svg';

export default class Footer extends React.Component {
	render () {
		return (
      <footer>
				<div className={styles.footerWrapper}>
					<div className={styles.footerNav}>
						<Link to="/" >Home</Link>
						<Link to="about" activeClassName={styles.activeStyle}>About</Link>
						<Link to="services" activeClassName={styles.activeStyle} >Services</Link>
					</div>
					<div className={styles.social}>
						<a href="https://twitter.com/carlfriedberg" target="_blank"><img src={twitter} height='30' /></a>
						<a href="mailto:carl@comets.com"><img src={email} height='30' /></a>
						<a href="https://www.linkedin.com/in/carlfriedberg/" target="_blank"><img src={linkedin} height='30' /></a>
					</div>
					<div className={styles.footerText}>Downtown New York since 1991</div>
				</div>
			</footer>
		);
	}
}
