// Reference page
import React, { useEffect, useState, useContext } from "react"
import { CatalogContainer } from '../components'
import { FirebaseContext } from '../context/firebase'

/* Grabs json data form bookmarks.json to be sent to 
 * CatalogContainer and further processed as it goes down the 
 * component hierarchy
 */
// import bookmarks from '../static/bookmarks.json'

export default function Reference() {
    const [ remoteBookmarks, setRemoteBookmarks ] = useState({})
    const [ bookmarksLoading, setBookmarksLoading ] = useState( true )

    // pull in realtime database
    const { database } = useContext( FirebaseContext )
    useEffect(() => {
        // get reference to root of database
        const rootRef = database.ref()
        
        rootRef.orderByKey().on('value', snapshot => {
            console.log('grabbing data...')
            let root = snapshot.val()
            console.log('saving data...')
            setRemoteBookmarks( root )
    
            // console.log( remoteBookmarks )
            setBookmarksLoading( false )
        })
    }, [])

    return (
        <div className="body-container">
            <CatalogContainer catalogs={ remoteBookmarks.reference } loading={ bookmarksLoading } />
        </div>
    )
}
