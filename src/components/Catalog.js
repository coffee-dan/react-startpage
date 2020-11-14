import React from "react"
import './Catalog.css'

function Catalog({ contents }) {
    
    return (
        <div className="catalog">
            <div className="catalog--title">{ contents.title }</div>
            <CatalogList itemList={ contents.catalog }/>
        </div>
    )
}

function CatalogList({ itemList }) {

    // The seemingly excessive usage of Object.values() here is to ensure
    // the itemList is in fact a list as there is currently an inconsistency in the
    // database stemming from the method used for adding items
    const catalogComponents = Object.values(itemList).map(
        item => <a key={ item.id } href={ item.url }>{ item.name }</a>
    )

    return (
        <div className="catalog--list">
            {catalogComponents}
        </div>
    )
}

export default Catalog
