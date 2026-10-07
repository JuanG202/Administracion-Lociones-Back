const mongoose = require("mongoose");

const premiumSchema = new mongoose.Schema({
    cliente: String,
    locion: String,
    cantidad: Number,
    costo: Number,
    precio: Number,
    total: Number,
    estado: { type: String, enum: ["Pago", "Debe"], default: "Pago" },
    cuanto: Number,
    metodo: String,
    fecha: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Premium", premiumSchema);