// Signin Component
import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../context/firebase'
import './styles/signin.css'

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
			<h2>Admin Signin</h2>
			<form className="signin" onSubmit={handleSignin} method="POST">
				<input
					className="signin--element"
					placeholder="Email Address"
					value={emailAddress}
					onChange={({ target }) => setEmailAddress(target.value)}
				/>

				<input
					className="signin--element"
					type="password"
					value={password}
					autoComplete="off"
					placeholder="Password"
					onChange={({ target }) => setPassword(target.value)}
				/>

				<button className="submit" disabled={isInvalid} type="submit">
					Sign In
				</button>
			</form>
			{error && <div className="error">{error}</div>}
		</>
	)
}
