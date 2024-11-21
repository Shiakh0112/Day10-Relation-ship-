const express = require("express");
const {
  addProduct,
  listProductsByCategory,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/", addProduct);
router.get("/category/:categoryId", listProductsByCategory);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
