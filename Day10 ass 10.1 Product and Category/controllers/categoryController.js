const Category = require("../models/Category");

// Add Category
const addCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Category
const updateCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const category = await Category.findByIdAndUpdate(
      id,
      { description },
      { new: true }
    );

    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addCategory, updateCategoryDescription };
