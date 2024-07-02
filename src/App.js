import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Login from './components/Login/Login';

function App() {
    return (
        <Router>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Products />} />
                <Route path="/acceso" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
