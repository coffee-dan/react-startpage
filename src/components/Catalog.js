import React, { useContext } from 'react'
import { FirebaseContext } from '../context/firebase'
import './Catalog.css'

function Catalog({ contents, location }) {
    
    return (
        <div className="catalog">
            <div className="catalog--title">{ contents.title }</div>
            <CatalogList itemList={ contents.catalog } location={ `${location}/catalog` } />
        </div>
    )
}

function CatalogList({ itemList, location }) {
    // itemList can come in as an hash table or array of items for the catalog
    // location holds a string path describing where the node is located

    // The seemingly excessive usage of Object.values() here is to ensure
    // the itemList is in fact a list as there is currently an inconsistency in the
    // database stemming from the method used for adding items
    return (
        <div className="catalog--list">
            
            {itemList != null ? (
                Object.keys( itemList ).map(
                    key => (
                        <CatalogItem key={ key } item={itemList[ key ]} location={ `${location}/${key}` } />
                    )
                )
            ) : (
                <h1>This catalog is empty</h1>
            )}
        </div>
    )
}


function CatalogItem({ item, location }) {
    // const [ modifyMode, setModifyMode ] =  useState( false )
    // const [ newName, setNewName ] = useState('')
    
    // \TODO Create cache system so that the most recent modification or deletion
    // can be undone

    const { database } = useContext( FirebaseContext )

    const onDelete = () => {
        const itemRef = database.ref( location )

        itemRef.remove()
        console.log(`Deleted ${location}`)
        
    }

    return (
        <div className="item">
            <button className="item--modify" >~</button>
            <a className="item--link" key={ item.id } href={ item.url }>{ item.name }</a>
            <button className="item--delete" onClick={ onDelete } >x</button>
        </div>
    )
}

export default Catalog
