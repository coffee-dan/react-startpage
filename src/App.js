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
		this.setState({loading: true})
		fetch("http://api.openweathermap.org/data/2.5/weather?id=4691930&units=imperial&appid=bb617c8eebae0d1c79c479dd6ad0aab3")
			.then(response => response.json())
			.then(data => {
				this.setState({
					weatherData: data,
					loading: false
				})
				console.log(data)
			})
    }

	render() {
		const weatherComponent = !this.state.loading ? <WeatherContainer data={this.state.weatherData} /> : "Loading..."

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