import React from 'react'
import { CatalogContainer } from '../components'

/* Grabs json data form bookmarks.json to be sent to 
 * CatalogContainer and further processed as it goes down the 
 * component hierarchy
 */
import bookmarks from '../static/bookmarks.json'

export default function Reference() {

    return (
        <div className="body-container">
            <CatalogContainer catalogs={ bookmarks.reference } />
        </div>
    )
}