// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import PrivadaComponent from './components/PrivadaComponent/PrivadaComponent'; // Importa el componente privado
import { useAuth } from './context/AuthContext';
import './App.css';

function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/acceso" />;
}

function App() {
    return (
        <Router>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Products />} />
                <Route path="/acceso" element={<Login />} />
                <Route path="/privada" element={
                    <PrivateRoute>
                        <PrivadaComponent />
                    </PrivateRoute>
                } />
            </Routes>
        </Router>
    );
}

export default App;
