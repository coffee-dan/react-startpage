import React, { useContext } from 'react';

import { CatalogContainer, JSONEditor } from '../components';
import { FirebaseContext } from '../context/firebase';
import useAuthListener from '../hooks/use-auth-listener';

// REFERENCE PAGE COMPONENT - Bulk storage of more niche links
function Reference() {
	const pageName = 'reference';
	// used for signout
	const { firebase } = useContext(FirebaseContext);
	// pull in user to check if admin is logged in
	const { user } = useAuthListener();

	return (
		<div className="body-container">
			<CatalogContainer page={pageName} />
			{user && user.uid === process.env.REACT_APP_ADMIN_UID ? (
				<>
					<JSONEditor location={pageName} />
					<p onClick={() => firebase.auth().signOut()}>Sign out</p>
				</>
			) : null}
		</div>
	);
}

export default Reference;
