import { orderRepository } from "../repositories/orders.repository.js";

export const orderService = {
    getOrders: async () => {
        return await orderRepository.findAll()
    }
}