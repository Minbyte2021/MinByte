var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();
require("dotenv").config();

const productsRoutes = require("./routes/products");
const ventasRoutes = require("./routes/ventas");
const categoriaRoutes = require("./routes/categoria");
const userRoutes = require("./routes/users");
const usuariosRoutes = require("./routes/usuarios");

app.use(express.json()); //
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECT).then(() => {
  console.log("Conectado");
});

app.use("/api/products", productsRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/categoria", categoriaRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
