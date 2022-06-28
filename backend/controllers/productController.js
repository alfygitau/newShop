import Product from "../models/product.js";
import asyncHandler from "express-async-handler";

// type -- fetch all products
// route -- GET /api/products
// access --public route
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// type -- fetch a single product
// route -- GET /api/products/:id
// access --public route
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
