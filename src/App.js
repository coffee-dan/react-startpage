/* App exists as a sort of table of contents for the webpage
 * thus it should contain each of the main elements of the page */
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import {
	Schedule,
	Reference,
	Unsorted,
	Home,
	Notes,
	About,
	Admin,
} from './pages';

// APP COMPONENT
function App() {
	return (
		<Router>
			<nav className="navbar">
				<NavLink exact to="/schedule" activeClassName="selected">
					Schedule
				</NavLink>
				<NavLink exact to="/reference" activeClassName="selected">
					Reference
				</NavLink>
				<NavLink exact to="/unsorted" activeClassName="selected">
					Unsorted
				</NavLink>

				<NavLink
					className="navbar--center"
					exact
					to="/"
					activeClassName="selected"
				>
					Home
				</NavLink>

				<div className="navbar--right">
					<NavLink exact to="/notes" activeClassName="selected">
						Notes
					</NavLink>
					<NavLink exact to="/about" activeClassName="selected">
						About
					</NavLink>
				</div>
			</nav>

			<Switch>
				<Route exact path="/" component={Home} />

				<Route exact path="/schedule" component={Schedule} />

				<Route exact path="/reference" component={Reference} />

				<Route exact path="/unsorted" component={Unsorted} />

				<Route exact path="/about" component={About} />

				<Route exact path="/notes" component={Notes} />

				<Route exact path="/admin" component={Admin} />
			</Switch>
		</Router>
	);
}

export default App;
