// src/models/Cliente.js
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  metodoPago: { type: String, enum: ['Efectivo', 'PSE'] },
  // Añadir más campos según la estructura de tu base de datos
  email: String, // Añadido para reflejar un campo de email según lo sugerido
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
