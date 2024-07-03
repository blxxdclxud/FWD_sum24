// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Comic from './components/Comic';
import Info from './components/Info';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/comic" component={Comic} />
                <Route path="/" exact>
                    <Info />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
