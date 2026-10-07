const Premium = require("..models/Premium");

const obtener = async (req, res) => {
  try {
    res.json(await Premium.find().sort({ createdAt: -1 }));
  } catch (e) {
    res.status(500).json({ mensaje: e.message });
  }
};

const crear = async (req, res) => {
  try {
    const item = new Premium(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (e) {
    res.status(500).json({ mensaje: e.message });
  }
};

const actualizar = async (req, res) => {
  try {
    const item = await Premium.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(item);
  } catch (e) {
    res.status(500).json({ mensaje: e.message });
  }
};

const eliminar = async (req, res) => {
  try {
    await Premium.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Eliminado" });
  } catch (e) {
    res.status(500).json({ mensaje: e.message });
  }
};

module.exports = { obtener, crear, actualizar, eliminar };