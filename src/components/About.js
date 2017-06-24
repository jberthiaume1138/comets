import React from 'react';

import styles from './style/About.scss';

// import Sidebar from '../components/Sidebar';
import carl from '../images/carl.jpg';

export default class About extends React.Component {
	render() {
		return (
			<div className={styles.aboutWrapper} id="about">
				<div className={styles.aboutHeader}>
					<p className={styles.about}>Founded in 1991, Comet & Company is a leading New York City based consulting and systems integration corporation. Specializing in hardware, software, networking and services, we perform management consulting, training, disaster recovery, fault tolerance and performance analysis.</p>
				</div>

				<div className={styles.aboutContainer}>
					<div className={styles.aboutContent}>
						<div className={styles.aboutImage}>
							<img src={carl} />
						</div>
						<div className={styles.about}>
							<p className={styles.aboutText}>Comets founder and CEO Carl Friedberg earned a PhD in experimental high-energy particle physics, and was a member of the Berkeley/Stanford collaboration which discovered several new particles, eventually gaining two Nobel prizes for the team leaders - one for Bert Richter, for the charmed PSI; one for Martin Perl for the TAU Lepton.</p>
						</div>
					</div>
					<div className={styles.aboutContent}>
						<p className={styles.aboutText}>For over 30 years, I have been involved in helping many companies solve technology problems, primarily in the IT area. Those companies, large and small, have been in finance, banking, pharmaceuticals, media, and related areas. I was involved with the New York Software Industry Association (NYSIA), where I led a special interest group in wireless technology and applications.</p>
					</div>
					<div className={styles.aboutContent}>
						<p className={styles.aboutText}>I love to solve problems.</p>
					</div>
				</div>

			</div>
		);
	}
}
