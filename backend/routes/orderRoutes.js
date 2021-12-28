import express from "express"
import asyncHandler from "express-async-handler"

const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  upadeOrderToPaid,
  getMyOrders,
  getOrders,
} from "../controllers/orderController.js"
import { protect, admin } from "../middleWare/authMiddleware.js"

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders)
router.route("/myorders").get(protect, getMyOrders)
router.route("/:id").get(protect, getOrderById)
router.route("/:id/pay").put(protect, upadeOrderToPaid)

export default router
