/* App exists as a sort of table of contents for the webpage
 * thus it should contain each of the main elements of the page
 */

import React from "react"

import Navbar from "./Navbar"
import WeatherContainer from "./WeatherContainer"
import CatalogContainer from "./CatalogContainer"
import TimeWaster from "./TimeWaster"

/* Grabs psuedo json data form catalogsData.js to be sent to 
 * CatalogContainer and further processed as it goes down the 
 * component hierarchy
 */
import catalogsData from "./catalogsData"

/* The use of a .env file to hide the Weather API key is only a 
 * stop gap measure, should not be maintained once past a development
 * stage. A backend server should hold onto secrets.
 */

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			weatherData: {},
			loading: true
        }
    }

	// When App mounts to DOM fetch weather data from openweathermap API
	componentDidMount() {
		// This loading set is not entirely necessary, only here for consistency
		this.setState({ loading: true })
		const APILink = "http://api.openweathermap.org/data/2.5/weather?id=4691930&units=imperial&appid=" + process.env.REACT_APP_WEATHER_API_KEY
		fetch(APILink)
			.then(response => response.json())
			.then(data => {
				this.setState({
					weatherData: data,
					loading: false
				})
			})
    }

	render() {
		const bodyStyles = {
			display: "flex",
			alignItems: "center",
			flexDirection: "column",
			justifyContent: "center"
		}

		return (
			<div>
				<Navbar />
				<div className="bodyContainer" style={bodyStyles}>
					<WeatherContainer data={this.state.weatherData} loading={this.state.loading}/>
					<CatalogContainer catalogs={catalogsData} />
					<TimeWaster />
				</div>
				
			</div>
		)
    }
}

export default App