// Reference page - Bulk storage of more niche links
import React from 'react'
import { CatalogContainer, JSONEditor } from '../components'

// displays reference catalogs
export default function Reference() {
	const pageName = 'reference'

	return (
		<div className="body-container">
			<CatalogContainer page={pageName} />
			<JSONEditor location={pageName} />
		</div>
	)
}
