import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom'

import Schedule from './components/Schedule'
import Reference from './components/Reference'
import Accounting from './components/Accounting'
import Home from './components/Home'
import Notes from './components/Notes'
import About from './components/About'


import './components/Navbar.css';

function App() {
    return (
        <Router>
            <nav className="navbar">
                <NavLink
                    exact to="/schedule"
                    activeClassName="selected">
                    Schedule
                </NavLink>
                <NavLink
                    exact to="/reference"
                    activeClassName="selected">
                    Reference
                </NavLink>
                <NavLink
                    exact to="/accounting"
                    activeClassName="selected">
                    Accounting
                </NavLink>

                <NavLink
                    className="navbar--center"
                    exact to="/"
                    activeClassName="selected">
                    Home
                </NavLink>

                <div className="navbar--right">
                    <NavLink
                        exact to="/notes"
                        activeClassName="selected">
                        Notes
                    </NavLink>
                    <NavLink
                        exact to="/about"
                        activeClassName="selected">
                        About
                    </NavLink>
                </div>
                
            </nav>

            <Switch>                    
                <Route exact path="/" component={Home} />
                
                <Route exact path="/schedule" component={Schedule} />

                <Route exact path="/reference" component={Reference} />
                
                <Route exact path="/accounting" component={Accounting} />

                <Route exact path="/about" component={About} />

                <Route exact path="/notes" component={Notes} />
            </Switch>
        </Router>
    )
}

export default App