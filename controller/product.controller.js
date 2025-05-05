
const Product = require("./product.model");

const getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const addProduct = async (req, res) => {
  try {
    let body = req.body;
    let error = validateProduct(body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    let product = await Product.create(body);
    res.status(200).json({ success: true, message: "Product added", data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    let productId = req.params.id;
    let product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    await Product.findByIdAndDelete(productId);
    res.status(200).json({ success: true, message: "Product deleted", data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const validateProduct = (product) => {
  if (!product) {
    return new Error("Please pass a valid product");
  }
  if (!product.name || !product.category || !product.price || !product.discount) {
    return new Error("All product fields are required");
  }
  return null;
};

module.exports = { getAllProducts, addProduct, deleteProduct };