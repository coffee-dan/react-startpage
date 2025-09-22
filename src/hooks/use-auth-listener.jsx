import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// This hook is motivated by the desire to leave all authentication to
// firebase authenticator - taken from netflix-zero project

function useAuthListener() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('authUser'))
	);
	const { firebase } = useContext(FirebaseContext);
	const auth = getAuth(firebase)

	// create listener for changed in user state in the event the user
	// needs to be signed out
	useEffect(() => {
		const listener = onAuthStateChanged(auth, (user) => {
			if (user) {
				localStorage.setItem('authUser', JSON.stringify(user));
				setUser(user);
			} else {
				localStorage.removeItem('authUser');
				setUser(null);
			}
		});

		return () => listener();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// need to return a user so that it can be passed along routes
	return { user };
}

export default useAuthListener;
