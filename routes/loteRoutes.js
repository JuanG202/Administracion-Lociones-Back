const express = require("express");

const router = express.Router();

const {
  obtenerLotes,
  crearLote,
  actualizarLote,
  eliminarLote,
} = require("../controllers/loteController");

router.get("/", obtenerLotes);

router.post("/", crearLote);

router.put("/:id", actualizarLote);

router.delete("/:id", eliminarLote);

module.exports = router;