const express = require("express");

const router = express.Router();

const {
  obtenerVentas,
  crearVenta,
  actualizarVenta,
  eliminarVenta,
  marcarPago,
} = require("../controllers/ventaController");

router.get("/", obtenerVentas);

router.post("/", crearVenta);

router.put("/:id", actualizarVenta);

router.delete("/:id", eliminarVenta);

router.put("/pagar/:id", marcarPago);

module.exports = router;