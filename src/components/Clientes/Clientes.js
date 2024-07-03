import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/clientes')
      .then(response => {
        setClientes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente._id}>{cliente.nombre} - {cliente.direccion}</li>
        ))}
      </ul>
    </div>
  );
}

export default Clientes;
