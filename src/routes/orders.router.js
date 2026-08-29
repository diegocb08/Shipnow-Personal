import { Router } from "express";
import OrderModel from "../models/order.model.js";
import UserModel from "../models/user.model.js";
import StoreModel from "../models/store.model.js";
import { createOrder, getOrderById, getOrders } from "../ controllers/orders.controller.js";

const router = Router();

router.get("/", getOrders);

router.get("/:oid", getOrderById);

router.post("/", createOrder);

router.put("/:oid/status", async (req, res) => {
  try {
    const order = await OrderModel.findByIdAndUpdate(
      req.params.oid,
      { status: req.body.status },
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({ status: "error", message: "Pedido no encontrado" });
    }

    res.json({ status: "success", payload: order });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});

router.delete("/:oid", async (req, res) => {
  try {
    const order = await OrderModel.findByIdAndDelete(req.params.oid);

    if (!order) {
      return res.status(404).json({ status: "error", message: "Pedido no encontrado" });
    }

    res.json({ status: "success", payload: order });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});

export default router;
