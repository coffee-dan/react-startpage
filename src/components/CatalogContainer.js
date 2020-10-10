import React from "react";
import Catalog from './Catalog';

function CatalogContainer(props) {
	const catalogComponents = props.catalogs.map(
		catalog => <Catalog key={catalog.id} contents={catalog}/>
	)

	return (
		<div className="CatalogContainer">
			{catalogComponents}
		</div>
	);
}

export default CatalogContainer;