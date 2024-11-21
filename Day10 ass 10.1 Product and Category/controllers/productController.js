const Product = require("../models/Product");
const Category = require("../models/Category");

// Add Product
const addProduct = async (req, res) => {
  try {
    const { name, price, category, stock } = req.body;

    if (price <= 0) throw new Error("Price must be positive");

    const product = new Product({ name, price, category, stock });
    await product.save();

    if (category) {
      const cat = await Category.findById(category);
      if (cat) {
        cat.products.push(product._id);
        await cat.save();
      }
    }

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// List Products in Category
const listProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId).populate("products");
    if (!category) throw new Error("Category not found");
    res.status(200).json(category.products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.price && updates.price <= 0) {
      throw new Error("Price must be positive");
    }

    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);
    if (!product) throw new Error("Product not found");

    // Remove product from categories
    await Category.updateMany({ products: id }, { $pull: { products: id } });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addProduct,
  listProductsByCategory,
  updateProduct,
  deleteProduct,
};
