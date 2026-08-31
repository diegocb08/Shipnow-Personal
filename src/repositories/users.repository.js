import UserModel from "../models/user.model.js";

export const userRepository = {
    findAll: async () => {
        return await UserModel.find()
    },
    findById: async (id) => {
        return await UserModel.findById(id)
    },
    create: async (userData) => {
        return await UserModel.create(userData)
    },
    update: async (id, userData) => {
        return await UserModel.findByIdAndUpdate(id, userData, { new: true, runValidators: true })
    }
}