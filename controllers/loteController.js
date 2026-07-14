const Lote = require("../models/Lote");

const obtenerLotes = async (req, res) => {
  try {
    const lotes = await Lote.find().sort({ createdAt: 1 });

    res.json(lotes);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

const crearLote = async (req, res) => {
  try {
    const { nombre } = req.body;

    const existe = await Lote.findOne({ nombre });

    if (existe) {
      return res.status(400).json({
        mensaje: "El lote ya existe",
      });
    }

    const lote = new Lote({
      nombre,
    });

    await lote.save();

    res.status(201).json(lote);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

const actualizarLote = async (req, res) => {
  try {
    const lote = await Lote.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(lote);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

const eliminarLote = async (req, res) => {
  try {
    await Lote.findByIdAndDelete(req.params.id);

    res.json({
      mensaje: "Lote eliminado",
    });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

module.exports = {
  obtenerLotes,
  crearLote,
  actualizarLote,
  eliminarLote,
};