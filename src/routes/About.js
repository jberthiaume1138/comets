import React from 'react';

import styles from './style/About.scss';

import carl from '../images/carl.jpg';

export default class About extends React.Component {
	render() {
		return (
			<div className={styles.aboutWrapper}>
				<div className={styles.aboutContainer}>
					<div className={styles.aboutHeader}>
						<h2>About Comets</h2>
					</div>
					<p className={styles.about}>Comets.com (Comet & Company) is a Delaware corporation formed in 1991.  We specialize in providing hardware, software, and services to implement best-quality technology solutions.</p>
					<div>
						<img src={carl} />
					</div>
					<p className={styles.about}>Comet & Company is a leading New York City consulting and systems integration corporation. We specialize in complex networks, and HP OpenVMS We are often called in when there are subtle problems with the basic infrastructure; and when extensive trouble shooting and problem solving is required. We perform management consulting, training, disaster recovery, fault tolerance and performance analysis.</p>
					<p className={styles.about}>Carl Friedberg is the CEO. Carl earned a PhD in experimental high energy particle physics, and was a team member in the discovery of psi mesons and tau leptons, which generated two Nobel prizes for the team leaders. Carl has been using computers and high technology equipment for his entire working life. We'd be happy to meet with you and discuss how we can work together with your firm.
					I have a PhD in experimental high-energy particle physics. I was a member of the Berkeley/Stanford collaboration which discovered several new particles, eventually gaining two Nobel prizes (one for Bert Richter, for the charmed PSI; one for Martin Perl for the TAU LEPTON). For the last 30 years, I've been involved in helping many companies solve technology problems, primarily in the IT area. Those companies, large and small, have been in finance, banking, pharmaceuticals, media, and related areas. I was involved with the New York Software Industry Association (NYSIA), where I led a special interest group in wireless technology and applications. I love to solve problems.</p>
				</div>
				<div className={styles.sideBar}>
					<h3>sidebar</h3>
					<p>pull in component</p>
				</div>
			</div>
		);
	}
}
