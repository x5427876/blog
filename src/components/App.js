import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </Router>
    )
}

export default App