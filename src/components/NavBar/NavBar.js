import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/acceso">Acceso de Usuarios</Link>
        </nav>
    );
}

export default NavBar;
