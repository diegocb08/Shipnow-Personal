import { orderRepository } from "../repositories/orders.repository.js";

export const orderService = {
    getOrders: async () => {
        return await orderRepository.findAll()
    },
    getOrderById: async (id) => {
        const order = await orderRepository.findById(id)

        if (!order) {
            const error = new Error("Pedido no encontrado")
            error.statusCode = 404
            throw error
        }
        return order
    },
    createOrder: async (orderData) => {
        const { customer, store, items, deliveryAddress, priority } = orderData

        if (!customer || !store || !items || !deliveryAddress) {
            const error = new Error("Faltan datos obligatorios")
            error.statusCode = 400
            throw error
        }

        if (!Array.isArray(items) || items.length === 0) {
            const error = new Error("El pedido debe tener al menos un producto")
            error.statusCode = 400
            throw error
        }

        const userFound = await orderRepository.findCustomerById(customer)

        if (!userFound) {
            const error = new Error("Usuario no encontrado")
            error.statusCode = 404
            throw error
        };

        const storeFound = await orderRepository.findStoreById(store);

        if (!storeFound) {
            const error = new Error("Comercio no encontrado")
            error.statusCode = 404
            throw error
        }

        const total = items.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);

        const newOrder = {
            ...orderData,
            total,
            status: "created",
            priority: "normal"
        }

        return await orderRepository.create(newOrder)
    }
}
