// This hook is motivated by the desire to leave all authentication to
// firebase authenticator - taken from netflix-zero project
import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

export default function useAuthListener() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('authUser'))
	)
	const { firebase } = useContext(FirebaseContext)

	// create listener for changed in user state in the event the user
	// needs to be signed out
	useEffect(() => {
		const listener = firebase.auth().onAuthStateChanged((authUser) => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser))
				setUser(authUser)
			} else {
				localStorage.removeItem('authUser')
				setUser(null)
			}
		})

		return () => listener()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// need to return a user so that it can be passed along routes
	return { user }
}
