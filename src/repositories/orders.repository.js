import OrderModel from "../models/order.model.js";
import UserModel from "../models/user.model.js";
import StoreModel from "../models/store.model.js";


export const orderRepository = {
    findAll: async () => {
        return await OrderModel.find().populate("customer").populate("store");
    },
    findById: async (id) => {
        return await OrderModel.findById(id).populate("customer").populate("store");
    },
    create: async (orderData) => {
        return await OrderModel.create(orderData)
    },
    findCustomerById: async (id) => {
        return await UserModel.findById(id)
    },
    findStoreById: async (id) => {
        return await StoreModel.findById(id)
    }
} 