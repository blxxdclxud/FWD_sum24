import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Comic from './components/Comic';
import Info from './components/Info';
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/comic" Component={Comic} />
                <Route path="/" Component={Info} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
