import React, { useState, useContext } from 'react'
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

    const { database } = useContext( FirebaseContext )
    const catalogRef = database.ref( location )

    return (
        <div className="catalog--list">
            
            {itemList != null ? (
                Object.keys( itemList ).map(
                    key => (
                        <CatalogItem 
                            // key needs to be sent down twice due to react reserving
                            // 'key' as a special prop that cannot be accessed in the child
                            key={ key } 
                            id={ key }
                            item={itemList[ key ]} 
                            location={ `${location}/${key}` } 
                            catalogRef={ catalogRef }
                        />
                    )
                )
            ) : (
                <h1>This catalog is empty</h1>
            )}
        </div>
    )
}


function CatalogItem({ id, item, location, catalogRef }) {
    const [ modifyMode, setModifyMode ] =  useState( false )
    const [ newName, setNewName ] = useState('')
    
    // \TODO Create cache system so that the most recent modification or deletion
    // can be undone

    const onDelete = () => {
        catalogRef.child( id ).remove()
        console.log(`Deleted ${location}`)        
    }


    // \TODO implement an auto focus system so that when the text box show it the
    //      user can immediately start typing
    const onModify = ( event ) => {
        event.preventDefault()

        if (modifyMode) {
            if (newName !== '') {
                catalogRef.child( id ).update({
                    "name": newName
                })
            }

            setNewName('')
        }

        setModifyMode( !modifyMode )

        console.log(`Modified ${location}`)
    }

    return (
        <div className="item">
            <button className="item--modify" onClick={ onModify } >~</button>
            {
                modifyMode ? (
                    <input 
                        className="item--modify-input"
                        id={ `${location}` }
                        type="text"
                        value={ newName }
                        onChange={ ({ target }) => setNewName( target.value ) }
                        placeholder='type new name'
                    />
                ) : (
                    <a className="item--link" key={ item.id } href={ item.url }>{ item.name }</a>
                )
            }
            <button className="item--delete" onClick={ onDelete } >x</button>
        </div>
    )
}

export default Catalog
