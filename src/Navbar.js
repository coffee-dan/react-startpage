import React from "react"
import './Navbar.css';

function Navbar() {
	return (
		<div className="Navbar">
			<a href="schedule.html">Schedule</a>
			<a href="reference.html">Reference</a>
			<a href="accounting.html">Accounting</a>
	
			<div className="NavbarCenter">
				<a className="Active" href="index.html">Home</a>
			</div>
	
			<div className="NavbarRight">
				<a href="notes.html">Notes</a>
				<a href="about.html">About</a>
			</div>
		</div>
	)
}

export default Navbar;

