// Signin Component
import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../context/firebase'

export default function Signin() {
	// Pull in firebase for authentication
	const { firebase } = useContext(FirebaseContext)
	const [error, setError] = useState('')
	const [emailAddress, setEmailAddress] = useState('')
	const [password, setPassword] = useState('')

	let isInvalid = password === '' || emailAddress === ''

	const handleSignin = (event) => {
		event.preventDefault()

		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.catch((error) => {
				setPassword('')
				setError(error.message)
			})
	}

	return (
		<>
			<h1>Admin Signin</h1>
			{error && <div>{error}</div>}
			<form onSubmit={handleSignin} method="POST">
				<input
					placeholder="Email Address"
					value={emailAddress}
					onChange={({ target }) => setEmailAddress(target.value)}
				/>

				<input
					type="password"
					value={password}
					autoComplete="off"
					placeholder="Password"
					onChange={({ target }) => setPassword(target.value)}
				/>

				<button disabled={isInvalid} type="submit">
					Sign In
				</button>
			</form>
		</>
	)
}
