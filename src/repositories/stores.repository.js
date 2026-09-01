import StoreModel from "../models/store.model.js";

export const storeRepository = {
    findAll: async () => {
        return await StoreModel.find()
    },
    findById: async (id) => {
        return await StoreModel.findById(id)
    },

    create: async (storeData) => {
        return await StoreModel.create(storeData)
    },

    update: async (id, storeData) => {
        return await StoreModel.findByIdAndUpdate(id, storeData, {
            new: true,
            runValidators: true
        })
    },
    delete: async (id) => {
        return await StoreModel.findByIdAndDelete(id)
    }
}