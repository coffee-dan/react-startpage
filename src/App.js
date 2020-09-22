/* App exists as a sort of table of contents for the webpage
 * thus it should contain each of the main elements of the page
 */

import React from "react"
import Navbar from "./Navbar"
import CatalogContainer from "./CatalogContainer"
import catalogsData from "./catalogsData"
import TimeWaster from "./TimeWaster"

function App() {
	const bodyStyles = {
		width: "100%",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center"
    }

	return (
		<div>
			<Navbar />
			<div style={bodyStyles}>
				<CatalogContainer catalogs={catalogsData} />
				<TimeWaster />
			</div>
		</div>
	);
}

export default App