import { useContext } from 'react';
import { Signin } from '../components';
import { FirebaseContext } from '../context/firebase';
import { getAuth, signOut } from 'firebase/auth'
import useAuthListener from '../hooks/use-auth-listener';

/* The use of a .env file to hide the Weather API key is only a
 * stop gap measure, should not be maintained once past a development
 * stage. A backend server should hold onto secrets.
 */

// ADMIN PAGE COMPONENT - signin for editing
function Admin() {
	const { firebase } = useContext(FirebaseContext);
	const { authUser } = getAuth(firebase)
	const { user } = useAuthListener();

	return (
		<div className="body-container home-page">
			{user && user.uid === process.env.REACT_APP_ADMIN_UID ? (
				<p onClick={() => signOut(authUser)}>Sign out</p>
			) : (
				<Signin />
			)}
		</div>
	);
}

export default Admin;
