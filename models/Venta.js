const mongoose = require("mongoose");

const ventaSchema = new mongoose.Schema({

    cliente: String,

    lote: String,

    locion: String,

    cantidad: Number,

    costo: Number,

    precio: Number,

    total: Number,

    estado: {
        type: String,
        enum: ["Pago", "Debe"],
        default: "Pago"
    },

    cuanto: Number,

    metodo: String,

    fecha: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Venta", ventaSchema);