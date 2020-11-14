// Home page
import React, { useEffect, useState } from "react"
import { WeatherContainer, CatalogContainer } from '../components'
import { JSONEditor } from "../components/JSONEditor"
import mailput from "../img/mailput.gif"

/* The use of a .env file to hide the Weather API key is only a 
 * stop gap measure, should not be maintained once past a development
 * stage. A backend server should hold onto secrets.
 */
export default function Home() {
    const [ weatherData, setWeatherData ] = useState({})
    const [ weatherLoading, setWeatherLoading ] = useState( true )

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
            <CatalogContainer page='home' />
            <img src={ mailput } alt="Animated gif of email moving transferring between two computer terminals." />
            <JSONEditor />
        </div>
    )
}
