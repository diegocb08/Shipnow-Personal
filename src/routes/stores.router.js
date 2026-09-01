import { Router } from "express";
import { createStore, deleteStore, getAllStores, getStoreById, updateStore } from "../ controllers/stores.controller.js";

const router = Router();

router.get("/", getAllStores)

router.get("/:sid", getStoreById);

router.post("/", createStore);

router.put("/:sid", updateStore);

router.delete("/:sid", deleteStore);

export default router;
