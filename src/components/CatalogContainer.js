// CatalogContainer Component
import React from "react"
import Catalog from './Catalog'

// Takes in object containing catalogs for a particular page
// this is converted into an array of only the values the key-value pairs
export default function CatalogContainer({ catalogs, loading }) {	

	return !loading ? (
		<div className="catalog--container">
			{Object.values( catalogs ).map(
				catalog => <Catalog key={ catalog.id } contents={ catalog } />
			)}
		</div>
	) : (
		<p>loading...</p>
	)
}
