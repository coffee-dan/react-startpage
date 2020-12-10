// JSON Editor form component
import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../context/firebase'
import './styles/json-editor.css'

// \TODO create authentication system
// 		\TODO level 1: admin sign in. json editor locked to admin access
// 		\TODO level 2: level 1 + guest sign in that grants access to json editor
//					on a toy version of startpage. possibly temporary edits
// 		\TODO level 3: level 2 + full sign up sign in

// \TODO test switching to formik

export default function JSONEditor({ location }) {
	const [page, setPage] = useState(location)
	const [catalogName, setCatalogName] = useState('')
	const [name, setName] = useState('')
	const [linkURL, setLinkURL] = useState('')

	// pull in realtime database
	const { database } = useContext(FirebaseContext)

	// flag checking if any of the form fields are empty
	let isInvalid =
		page === '' || catalogName === '' || name === '' || linkURL === ''

	const handleSubmit = (event) => {
		event.preventDefault()

		const rootRef = database.ref()
		// Adding link to database
		const newItemRef = rootRef
			.child(`${page}/${catalogName}/catalog`)
			.push()
		newItemRef.set({
			id: 11,
			name: name,
			url: linkURL,
		})

		// dry run
		console.log(`Added ${name} - ${linkURL} to ${page}/${catalogName}`)

		setPage(location)
		setCatalogName('')
		setName('')
		setLinkURL('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="form-element submit"
				disabled={isInvalid}
				type="submit"
				value="Add Link"
			/>
			<select
				className="form-element"
				value={page}
				onChange={({ target }) => setPage(target.value)}
			>
				<option value="home">Home</option>
				<option value="reference">Reference</option>
			</select>

			<select
				className="form-element"
				value={catalogName}
				onChange={({ target }) => setCatalogName(target.value)}
			>
				{/* Currently using brute force hardcoded solution for
                    ensuring only valid page/catalog combinations are selected
                    \TODO Implement this behavior using simple data driven solution */}
				<option value="">--select-catalog--</option>
				{page === 'home' ? (
					<>
						<option value="personal">Personal</option>
						<option value="general">General</option>
						<option value="academic">Academic</option>
					</>
				) : (
					<>
						<option value="art">Art</option>
						<option value="information">Information</option>
						<option value="nix">Nix</option>
						<option value="resources">Resources</option>
						<option value="sources">Sources</option>
						<option value="tools">Tools</option>
					</>
				)}
			</select>

			<input
				className="form-element"
				type="text"
				value={name}
				onChange={({ target }) => setName(target.value)}
				placeholder="URL Name"
			/>

			<input
				className="form-element"
				type="text"
				value={linkURL}
				onChange={({ target }) => setLinkURL(target.value)}
				placeholder="URL"
			/>
		</form>
	)
}
