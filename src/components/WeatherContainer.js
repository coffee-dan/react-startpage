import React from "react"

/* Use data passes from App.js which in turn comes from
 * openweathermap API call.
 */

function WeatherContainer(props) {
	let weatherText
	if (props.loading) {
		weatherText = "Retrieving weather data..."
	}
	else {
		const name = props.data.name
		const description = props.data.weather[0].description
		const temp = props.data.main.temp.toFixed(0)
		const humidity = props.data.main.humidity.toFixed(2)

		weatherText = name + " : " + description + " , " + temp + "\u00b0F at " + humidity + "%"
    }
	

	return (
		<div className="Container">
			{weatherText}
		</div>
	)
}

export default WeatherContainer