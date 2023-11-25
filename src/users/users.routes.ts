import express from "express";
import { usersController } from "./users.controller";

const router = express.Router();

router.post("/", usersController.createUser);
router.get("/", usersController.getAllUsers);
router.get("/:userId", usersController.getSingleUser);
router.put("/:userId", usersController.updateSingleUser);
router.delete("/:userId", usersController.deleteSingleUser);

export default router;
