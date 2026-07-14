require("dotenv").config();

const express = require("express");
const cors = require("cors");

const conectarDB = require("./config/db");

const ventaRoutes = require("./routes/ventaRoutes");
const loteRoutes = require("./routes/loteRoutes");

const app = express();

conectarDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Perfumes Granja funcionando 🚀");
});

app.use("/api/ventas", ventaRoutes);

app.use("/api/lotes", loteRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});