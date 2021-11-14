const Producto = require("../models/mProducts");

exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.addProduct = (req, res) => {
  const productosAdd = new Producto({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url,
    categoria: req.body.categoria,
    disponible: req.body.disponible,
  });

  productosAdd.save().then((createdProduct) => {
    console.log(createdProduct);
    res.status(201).json("Created satisfied");
  });
};

exports.getProductId = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } else {
      res.status(404).json("No Encontrado");
    }
  });
};

exports.getProductosDisponibles = (req, res) => {
  Producto.find({ disponible: true }).then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.deleteProduct = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Producto.findByIdAndDelete(
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

exports.updateProductById = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Producto.findByIdAndUpdate(
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
