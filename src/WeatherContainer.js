import React from "react"
import "./WeatherContainer.css"

class WeatherContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			name: "Fort Worth",
			description: "overcast clouds",
			temp: 66,
			humidity: 93.00
		}
	}

	render() {
		return (
			<div className="WeatherContainer">
				{this.state.name} : {this.state.description} , {this.state.temp.toFixed(0)}&deg;F at {this.state.humidity.toFixed(2)}%
			</div>
		)
	}
}

export default WeatherContainer