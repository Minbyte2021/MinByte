const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const usuario = mongoose.Schema({
  Documento: { type: Number, required: true, unique: true },
  NombreApellido: { type: String, required: true },
  Telefono: { type: Number },
  Correo: { type: String, required: true },
  Sucursal: { type: String, required: true },
  Rol: { type: String, required: true },
});

usuario.plugin(uniqueValidator);

module.exports = mongoose.model("Usuario", usuario);
