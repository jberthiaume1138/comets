import React from 'react';

import styles from './style/Contact.scss';

export default class Contact extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<p>Voice: +1 (212) 233-5470

					Cell: +1 (917) 861-7819

					e-mail: info@comets.com

					Headquartered in the New York Financial District at:

					165 William Street 9

				New York NY 10038</p>
			</div>

		);
	}
}
