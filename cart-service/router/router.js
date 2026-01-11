import express from "express";
import { addToCart, deleteCartElement, getCartDetails, updateCartElement } from "../controller/cartController.js";

const router = express.Router();

router.post("/add", addToCart);
router.get("/all", getCartDetails);
router.post("/update/:id", updateCartElement);
router.delete("/delete/:id", deleteCartElement);

export default router;