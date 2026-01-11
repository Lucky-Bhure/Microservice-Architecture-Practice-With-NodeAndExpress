import express from "express"
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productsController.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/all", getProducts);
router.get("/details/:id", getProduct);
router.delete("/delete/:id", deleteProduct);
router.post("/update/:id", updateProduct);


export default router;