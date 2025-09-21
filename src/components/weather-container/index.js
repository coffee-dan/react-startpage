import './styles/weather-container.css';

/* Use data passes from App.js which in turn comes from
 * openweathermap API call.
 */

// WEATHER CONTAINER COMPONENT
function WeatherContainer({ loading, data }) {
	let weatherText;
	if (loading) {
		weatherText = 'Retrieving weather data...';
	} else {
		const name = data.name;
		const description = data.weather[0].description;
		const temp = data.main.temp.toFixed(0);
		const humidity = data.main.humidity.toFixed(2);

		// weatherText =
		// 	name +
		// 	' : ' +
		// 	description +
		// 	' , ' +
		// 	temp +
		// 	'\u00b0F at ' +
		// 	humidity +
		// 	'%';

		weatherText = `${name}: ${description}, ${temp}\u00b0F at ${humidity}%`;
	}

	return <h1 className="weather-container">{weatherText}</h1>;
}

export default WeatherContainer;
