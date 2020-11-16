// Reference page
import React from "react"
import { CatalogContainer } from '../components'
import { JSONEditor } from "../components/JSONEditor"

// displays reference catalogs
export default function Reference() {
    const pageName = 'reference'

    return (
        <div className="body-container">
            <CatalogContainer page={ pageName } />
            <JSONEditor location={ pageName } />
        </div>
    )
}
