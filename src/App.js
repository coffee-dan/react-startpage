import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom'

import Contact from './components/Contact'
import Home from './components/Home'

import './components/Navbar.css';

function App() {
    return (
        <div>
            <Router>
                <nav>
                    <ul className="Navbar">
                        <li className="NavbarCenter">
                            <NavLink
                                exact to="/"
                                activeClassName="selected">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                exact to="/contact"
                                activeClassName="selected">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/contact">
                        <Contact />
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