var express = require("express");
const router = express.Router();

const VentasController = require("../controllers/cVentas");

router.get("", VentasController.getVentas);
router.post("", VentasController.addVentas);
router.delete("/:id", VentasController.deleteVentas);
router.get("/:id", VentasController.getVentaId);
router.patch("/:id", VentasController.updateVentasById);

module.exports = router;
