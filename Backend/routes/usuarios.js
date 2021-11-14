var express = require("express");
const router = express.Router();

const userController = require("../controllers/cUsuarios");

router.get("", userController.getUsuarios);
router.post("", userController.addUsuario);
router.delete("/:id", userController.deleteUsuario);
router.get("/:id", userController.getUsuatioId);
router.patch("/:id", userController.updateUsuarioById);

module.exports = router;
