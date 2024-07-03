import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
