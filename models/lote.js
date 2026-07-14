const mongoose = require("mongoose");

const loteSchema = new mongoose.Schema(
{
    nombre:{
        type:String,
        required:true,
        unique:true
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("Lote", loteSchema);