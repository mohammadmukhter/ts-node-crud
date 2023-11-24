import express from "express";
import { usersController } from "./users.controller";

const router = express.Router();

router.get("/", usersController.getAllUsers);

export default router;
