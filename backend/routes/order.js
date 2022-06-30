import express from "express";
import {
  createOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderPayment,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createOrderItems);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderPayment);

export default router;
