// JSON Editor
import React, { useState } from 'react'
import './styles/JSONEditor.css'
import data from '../../static/test.json'

export function JSONEditor() {
    const [ page, setPage ] = useState('')
    const [ catalogName, setCatalogName ] = useState('')
    const [ name, setName ] = useState('')
    const [ linkURL, setLinkURL ] = useState('')

    // flag checking if any of the form fields are empty
    let isInvalid = page ==='' || catalogName === '' || name === '' || linkURL === ''

    const handleSubmit = ( event ) => {
        event.preventDefault()
        
        let newData = data
        
        const newId = newData.personal.catalog.length
        newData[ catalogName ].catalog.push({ id: newId, url: linkURL, name: name })

        // dry run
        console.log( newData[ catalogName ].catalog )
        console.log( `Added :: ${name}/${linkURL} to ${page}/${catalogName}` )

        setPage('')
        setCatalogName('')
        setName('')
        setLinkURL('')
    }


    return (
        <form onSubmit={handleSubmit}>

            <input 
                className="form-element submit"
                disabled={ isInvalid } 
                type="submit" 
                value="Add Link" 
            />
            <select 
                className="form-element"
                value={ page }
                onChange={ ({ target }) => setPage( target.value ) }
            >
                <option value="">--select-page--</option>
                <option value="home">Home</option>
                <option value="reference">Reference</option>
                <option value="accounting">Accounting</option>
            </select>

            <select 
                className="form-element"
                value={ catalogName }
                onChange={ ({ target }) => setCatalogName( target.value ) }
            >
                <option value="">--select-catalog--</option>
                <option value="personal">Personal</option>
                <option value="general">General</option>
                <option value="academic">Academic</option>
            </select>


            <input 
                className="form-element"
                type="text"
                value={ name }
                onChange={ ({ target }) => setName( target.value ) }
                placeholder="Name//description"
                />

            <input
                className="form-element"
                type="text"
                value={ linkURL }
                onChange={ ({ target }) => setLinkURL( target.value ) }
                placeholder="Link URL"
            />

        </form>
    )
}