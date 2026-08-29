import { orderService } from "../services/orders.service.js";

export const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders()
        res.json({ status: "success", payload: orders })
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}

export const getOrderById = async (req, res) => {
    try {
        const order = await orderService.getOrderById(req.params.oid)
        res.json({ status: "success", payload: order })
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
}

export const createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body)
        res.status(201).json({ status: "success", payload: order });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
}