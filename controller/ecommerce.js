import {Ecommerce} from '../model/ecommerce.js';

export const createProduct = async (req, res) => {
  try {
    const { productname, price, description, category, rating } = req.body;

    const product = await ecommerce.createProduct({ productname, price, description, category, rating });
    console.log("Product created:", product);
    res.status(201)
    .json({
        message: "Product created successfully",
        product
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.body;

  try {
    const product = await ecommerce.findProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product deleted successfully",
      product
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a product by ID
export const updateProduct = async (req, res) => {
  const { id, productname, price, description, category, rating } = req.body;

  try {
    const product = await ecommerce.findProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await ecommerce.updateProduct(id, { productname, price, description, category, rating });
    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all products
export const getProducts = async (req, res) => {
  try {
    const products = await ecommerce.find();
    res.status(200).json({
      message: "Products retrieved successfully",
      products
    });
  } 
    catch (error) {
    res.status(500).json({ message: error.message });
  }
};
