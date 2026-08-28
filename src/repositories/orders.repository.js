import OrderModel from "../models/order.model.js";


export const orderRepository = {
    findAll: async () => {
        return await OrderModel.find().populate("customer").populate("store");
    }
}