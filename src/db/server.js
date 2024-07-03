const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./db'); 
const { Cliente, Pedido, Factura, Inventario, Cafe } = require('../components/models');
const { ObjectId } = require('mongodb');

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

// Función para insertar documentos en la base de datos
async function insertarDocumentos() {
    const id_de_cafe_1 = new ObjectId();
    const id_de_cafe_2 = new ObjectId();
    const id_de_cliente_1 = new ObjectId();
    const id_de_cliente_2 = new ObjectId();
    const id_de_pedido_1 = new ObjectId();
    const id_de_pedido_2 = new ObjectId();

    try {
        await Inventario.insertMany([
            { idCafe: id_de_cafe_1, cantidad: 50 },
            { idCafe: id_de_cafe_2, cantidad: 100 }
        ]);

        await Pedido.insertMany([
            { idCliente: id_de_cliente_1, idCafe: id_de_cafe_1, estadoPedido: "Pendiente", metodoPago: "Efectivo" },
            { idCliente: id_de_cliente_2, idCafe: id_de_cafe_2, estadoPedido: "Completado", metodoPago: "Tarjeta" }
        ]);

        await Factura.insertMany([
            { idPedido: id_de_pedido_1, totalPagar: 10000 },
            { idPedido: id_de_pedido_2, totalPagar: 8000 }
        ]);

        console.log('Documentos insertados correctamente');
    } catch (error) {
        console.error('Error al insertar documentos:', error);
    }
}

// Llama a la función para insertar documentos
insertarDocumentos();
