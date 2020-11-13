/* App exists as a sort of table of contents for the webpage
 * thus it should contain each of the main elements of the page
 */

import React, { useEffect, useState, useContext } from "react"
import { WeatherContainer, CatalogContainer } from '../components'
import { FirebaseContext } from '../context/firebase'

/* Grabs json data form bookmarks.json to be sent to 
 * CatalogContainer and further processed as it goes down the 
 * component hierarchy
 */
// import bookmarks from '../static/bookmarks.json'
import mailput from "../img/mailput.gif"

/* The use of a .env file to hide the Weather API key is only a 
 * stop gap measure, should not be maintained once past a development
 * stage. A backend server should hold onto secrets.
 */


export default function Home() {
    const [ weatherData, setWeatherData ] = useState({})
    const [ weatherLoading, setWeatherLoading ] = useState( true )
    const [ remoteBookmarks, setRemoteBookmarks ] = useState({})
    const [ bookmarksLoading, setBookmarksLoading ] = useState( true )

    // pull in realtime database
    const { database } = useContext( FirebaseContext )
    useEffect(() => {        
        // get reference to root of database
        const rootRef = database.ref()
        
        rootRef.on('value', snapshot => {
            console.log('querying realtime database...')
            let root = snapshot.val()
            setRemoteBookmarks( root )
            
            if (remoteBookmarks !== {} ) {
                console.log( 'Home good response!' )
                console.log( remoteBookmarks )
                setBookmarksLoading( false )
            }
        })


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // When App mounts to DOM fetch weather data from openweathermap API
    useEffect(() => {
        // This weatherLoading set is not entirely necessary, only here for consistency
        setWeatherLoading( true )
        const APILink = "https://api.openweathermap.org/data/2.5/weather?id=4691930&units=imperial&appid=" + process.env.REACT_APP_WEATHER_API_KEY
        fetch( APILink )
            .then( response => response.json() )
            .then( data => {

                if ( data.cod === 200 ) {
                    setWeatherData( data )
                    setWeatherLoading( false )
                } else {
                    console.log( `${data.cod}: ${data.message}` )
                }

            })
            .catch( error => {
                console.log( 'Error fetching and parsing data', error )
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="body-container">
            <WeatherContainer data={ weatherData } loading={ weatherLoading } />
            <CatalogContainer catalogs={ remoteBookmarks.home } loading={ bookmarksLoading } />
            <img src={ mailput } alt="Animated gif of email moving transferring between two computer terminals." />
        </div>
    )
}
