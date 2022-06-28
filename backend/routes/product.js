import express from "express";
import Product from "../models/product.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

// type -- fetch all products
// route -- GET /api/products
// access --public route
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products)
  })
);

// type -- fetch a single product
// route -- GET /api/products/:id
// access --public route
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "product not found" });
    }
  })
);

export default router;