var express = require("express");
const router = express.Router();

const ProductController = require("../controllers/cProducts");

router.get("", ProductController.getProducts);
router.post("", ProductController.addProduct);
router.delete("/:id", ProductController.deleteProduct);
router.get("/:id", ProductController.getProductId);
router.patch("/:id", ProductController.updateProductById);

module.exports = router;
