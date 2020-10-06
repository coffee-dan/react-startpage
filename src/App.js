import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'

import './components/Navbar.css';

function App() {
    return (
        <div>
            <Router>
                <nav className="Navbar">
                    <NavLink
                        exact to="/"
                        activeClassName="selected">
                        Schedule
                    </NavLink>
                    <NavLink
                        exact to="/"
                        activeClassName="selected">
                        Reference
                    </NavLink>
                    <NavLink
                        exact to="/"
                        activeClassName="selected">
                        Accounting
                    </NavLink>

                    <NavLink
                        className="NavbarCenter"
                        exact to="/"
                        activeClassName="selected">
                        Home
                    </NavLink>

                    <div className="NavbarRight">
                        <NavLink
                            exact to="/"
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
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App