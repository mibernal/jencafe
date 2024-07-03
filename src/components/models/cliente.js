// src/models/Cliente.js
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  // Otros campos
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
