import { storeRepository } from "../repositories/stores.repository.js";

export const storeService = {
    getAllStores: async () => {
        return await storeRepository.findAll()
    },
    getStoreById: async (id) => {
        const store = await storeRepository.findById(id)

        if (!store) {
            const error = new Error("Comercio no encontrado")
            error.statusCode = 404
            throw error
        }
        return store
    },

    createStore: async (storeData) => {
        return await storeRepository.create(storeData)
    },

    updateStore: async (id, storeData) => {
        const store = await storeRepository.update(id, storeData)
        if (!store) {
            const error = new Error("Comercio no encontrado")
            error.statusCode = 404
            throw error
        }
        return store
    },
    deleteStore: async (id) => {
        const store = await storeRepository.delete(id)
        if (!store) {
            const error = new Error("Comercio no encontrado")
            error.statusCode = 404
            throw error
        }
        return store
    }
}