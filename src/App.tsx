import React from 'react';

import {ContextProvider} from './Context';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

function App() {
    return (
        <ContextProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <CountryList />
                    </Route>
                    <Route exact path="/:id">
                        <CountryDetails />
                    </Route>
                </Switch>
            </Router>
        </ContextProvider>
    )
}

export default App