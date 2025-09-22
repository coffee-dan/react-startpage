import { useContext } from 'react';
import { CatalogContainer, JSONEditor } from '../components';
import { FirebaseContext } from '../context/firebase';
import { getAuth, signOut } from 'firebase/auth'
import useAuthListener from '../hooks/use-auth-listener';

// REFERENCE PAGE COMPONENT - Bulk storage of more niche links
function Reference() {
	const pageName = 'reference';
	// used for signout
	const { firebase } = useContext(FirebaseContext);
	const { authUser } = getAuth(firebase)
	// pull in user to check if admin is logged in
	const { user } = useAuthListener();

	return (
		<div className="body-container">
			<CatalogContainer page={pageName} />
			{user && user.uid === import.meta.env.VITE_ADMIN_UID ? (
				<>
					<JSONEditor location={pageName} />
					<p onClick={() => signOut(authUser)}>Sign out</p>
				</>
			) : null}
		</div>
	);
}

export default Reference;
