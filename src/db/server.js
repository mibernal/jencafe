const express = require('express');
const mongoose = require('./db');
const { Cliente, Pedido, Factura, Inventario, Cafe } = require('./models');

const app = express();
app.use(express.json());

// CRUD para Clientes

// Crear Cliente
app.post('/clientes', async (req, res) => {
  const cliente = new Cliente(req.body);
  await cliente.save();
  res.status(201).send(cliente);
});

// Leer todos los Clientes
app.get('/clientes', async (req, res) => {
  const clientes = await Cliente.find();
  res.send(clientes);
});

// Leer un Cliente por ID
app.get('/clientes/:id', async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  if (!cliente) return res.status(404).send();
  res.send(cliente);
});

// Actualizar Cliente
app.put('/clientes/:id', async (req, res) => {
  const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!cliente) return res.status(404).send();
  res.send(cliente);
});

// Eliminar Cliente
app.delete('/clientes/:id', async (req, res) => {
  const cliente = await Cliente.findByIdAndDelete(req.params.id);
  if (!cliente) return res.status(404).send();
  res.send(cliente);
});

// CRUD para Inventario

// Crear Inventario
app.post('/inventarios', async (req, res) => {
  const inventario = new Inventario(req.body);
  await inventario.save();
  res.status(201).send(inventario);
});

// Leer todos los Inventarios
app.get('/inventarios', async (req, res) => {
  const inventarios = await Inventario.find().populate('idCafe');
  res.send(inventarios);
});

// Leer un Inventario por ID
app.get('/inventarios/:id', async (req, res) => {
  const inventario = await Inventario.findById(req.params.id).populate('idCafe');
  if (!inventario) return res.status(404).send();
  res.send(inventario);
});

// Actualizar Inventario
app.put('/inventarios/:id', async (req, res) => {
  const inventario = await Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!inventario) return res.status(404).send();
  res.send(inventario);
});

// Eliminar Inventario
app.delete('/inventarios/:id', async (req, res) => {
  const inventario = await Inventario.findByIdAndDelete(req.params.id);
  if (!inventario) return res.status(404).send();
  res.send(inventario);
});

// Iniciar el servidor
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
