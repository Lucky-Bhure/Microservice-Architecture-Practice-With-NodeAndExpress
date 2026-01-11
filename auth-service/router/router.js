import express from "express"
import { registerUser, login } from "../controllers/UserController.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", registerUser);

export default router;