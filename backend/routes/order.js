import express from "express";
import {
  createOrderItems,
  getAllOrders,
  getMyOrders,
  getOrderById,
  updateOrderPayment,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, createOrderItems)
  .get(protect, admin, getAllOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderPayment);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
