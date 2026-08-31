import { Router } from "express";
import UserModel from "../models/user.model.js";
import { createUser, getUserById, getUsers, updateUser } from "../ controllers/users.controller.js";

const router = Router();

router.get("/", getUsers)

router.get("/:uid", getUserById);

router.post("/", createUser);

router.put("/:uid", updateUser);

router.delete("/:uid", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.uid);

    if (!user) {
      return res.status(404).json({ status: "error", message: "Usuario no encontrado" });
    }

    res.json({ status: "success", payload: user });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});

export default router;
