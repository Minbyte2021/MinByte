var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();
require("dotenv").config();

var uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uhvsd.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
const option = {useNewUrlParser: true, useUnifiedTopology:  true}
const productsRoutes = require("./routes/products");
const ventasRoutes = require("./routes/ventas");
const categoriaRoutes = require("./routes/categoria");
const userRoutes = require("./routes/users");
const usuariosRoutes = require("./routes/usuarios");

app.use(express.json()); //
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(URI,option).then(() => {
  console.log("Conectado");
})
.catch((e)=>console.log("error db:",e));

app.use("/api/products", productsRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/categoria", categoriaRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
