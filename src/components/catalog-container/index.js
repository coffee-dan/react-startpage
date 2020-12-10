// CatalogContainer Component
import React, { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../../context/firebase'
import Catalog from './catalog'

// Takes in name of a page, then retrieves the catalogs for that page
// from the database and finally sends that data to the catalog component
// to be rendered properly
export default function CatalogContainer({ page }) {
	const [remoteBookmarks, setRemoteBookmarks] = useState({})
	const [bookmarksLoading, setBookmarksLoading] = useState(true)

	// pull in realtime database
	const { database } = useContext(FirebaseContext)
	useEffect(() => {
		// get reference to root of database
		const rootRef = database.ref()

		rootRef.orderByKey().on('value', (snapshot) => {
			console.log('querying realtime database...')
			let root = snapshot.val()
			setRemoteBookmarks(root)

			if (remoteBookmarks !== {}) {
				console.log('Reference good response!')
				setBookmarksLoading(false)
			}
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return !bookmarksLoading ? (
		<div className="catalog--container">
			{Object.keys(remoteBookmarks[page]).map((key) => (
				<Catalog
					key={key}
					contents={remoteBookmarks[page][key]}
					location={`${page}/${key}`}
				/>
			))}
		</div>
	) : (
		<p>loading...</p>
	)
}
