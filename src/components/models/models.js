const mongoose = require('mongoose');

// Cliente Schema
const clienteSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  metodoPago: { type: String, enum: ['Efectivo', 'PSE'] }
});

// Pedido Schema
const pedidoSchema = new mongoose.Schema({
  idCliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  idCafe: { type: mongoose.Schema.Types.ObjectId, ref: 'Cafe' },
  estadoPedido: String,
  metodoPago: { type: String, enum: ['Efectivo', 'Tarjeta'] }
});

// Factura Schema
const facturaSchema = new mongoose.Schema({
  idPedido: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido' },
  totalPagar: Number
});

// Inventario Schema
const inventarioSchema = new mongoose.Schema({
  idCafe: { type: mongoose.Schema.Types.ObjectId, ref: 'Cafe' },
  cantidad: Number
});

// Cafe Schema
const cafeSchema = new mongoose.Schema({
  nombreCafe: String,
  precio: Number,
  tipo: String
});

const Cliente = mongoose.model('Cliente', clienteSchema);
const Pedido = mongoose.model('Pedido', pedidoSchema);
const Factura = mongoose.model('Factura', facturaSchema);
const Inventario = mongoose.model('Inventario', inventarioSchema);
const Cafe = mongoose.model('Cafe', cafeSchema);

module.exports = { Cliente, Pedido, Factura, Inventario, Cafe };
