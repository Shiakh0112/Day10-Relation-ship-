const express = require("express");
const {
  addCategory,
  updateCategoryDescription,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/", addCategory);
router.put("/:id", updateCategoryDescription);

module.exports = router;
