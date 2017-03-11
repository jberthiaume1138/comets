import React from 'react';

import styles from './style/About.scss';

export default class About extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<p className={styles.about}>Comets.com (Comet & Company) is a Delaware corporation formed in 1991.  We specialize in providing hardware, software, and services to implement best-quality technology solutions.</p>
				<p className={styles.about}>Carl Friedberg is the CEO. Carl earned a PhD in experimental high energy particle physics, and was a team member in the discovery of psi mesons and tau leptons, which generated two Nobel prizes for the team leaders. Carl has been using computers and high technology equipment for his entire working life. We'd be happy to meet with you and discuss how we can work together with your firm.</p>
			</div>
		);
	}
}
