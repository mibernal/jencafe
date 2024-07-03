
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            setError('Por favor ingrese ambos campos.');
            return;
        }

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la autenticación');
            }
            return response.json();
        })
        .then(data => {
            console.log('Autenticación exitosa', data);
            login();  // Actualiza el estado de autenticación
        })
        .catch(error => {
            console.error('Error al autenticar:', error);
            setError('Error en la autenticación');
        });
    };

    return (
        <section className="content">
            <h2>Acceso de Usuarios</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Ingresar</button>
                {error && <p>{error}</p>}
            </form>
        </section>
    );
}

export default Login;
