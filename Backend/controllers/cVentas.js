const Ventas = require("../models/mVentas");

exports.getVentas = (req, res) => {
  Ventas.find().then((postResult) => {
    res.status(200).json(postResult);
  });
};

exports.addVentas = (req, res) => {
  const ventasAdd = new Ventas({
    Fecha_Venta: req.body.Fecha_Venta,
    Producto: req.body.Producto,
    Referencia: req.body.Referencia,
    Precio: req.body.Precio,
    Descripcion: req.body.Descripcion,
    Sucursal: req.body.Sucursal,
    Vendedor: req.body.Vendedor,
    Categoria: req.body.Categoria,
  });

  ventasAdd.save().then((createdVenta) => {
    console.log(createdVenta);
    res.status(201).json("Venta registrada");
  });
};

exports.getVentaId = (req, res) => {
  Ventas.findById(req.params.id).then((ventaResult) => {
    if (ventaResult) {
      res.status(200).json(ventaResult);
    } else {
      res.status(404).json("Venta no encontrada");
    }
  });
};

exports.deleteVentas = (req, res) => {
  Ventas.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Ventas.findByIdAndDelete(
        { _id: req.params.id },
        req.body,
        function (err) {
          res.status(200).json("Deleted");
        }
      );
    } else {
      res.status(404).json("No Encontrado");
    }
  });
};

exports.updateVentasById = (req, res) => {
  Ventas.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Ventas.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        function (err) {
          res.status(200).json("Update");
        }
      );
    } else {
      res.status(404).json("No Update");
    }
  });
};
