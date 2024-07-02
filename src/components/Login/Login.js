import React from 'react';

function Login() {
    return (
        <section className="content">
            <h2>Acceso de Usuarios</h2>
            <form>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </section>
    );
}

export default Login;
