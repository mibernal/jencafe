// src/db/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./db');  // Aquí estás importando la configuración de mongoose
const { Cliente, Pedido, Factura, Inventario, Cafe } = require('./models');  // Importa los modelos correctamente

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas de tu API
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/cafes', async (req, res) => {
    try {
      const cafes = await Cafe.find();
      res.json(cafes);
    } catch (error) {
      res.status(500).send(error);
    }
  });

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Lógica de autenticación
    // Supongamos que es un login sencillo para este ejemplo
    if (username === 'admin' && password === 'admin') {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});
