import { orderService } from "../services/orders.service.js";

export const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders()
        res.json({ status: "success", payload: orders })
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}