import express from "express";
import { getProducts, createProduct, deleteProduct, updateProduct } from "../controller/ecommerce.js";
const router = express.Router();

router.get('/products', getProducts);
router.post('/create-product', createProduct);
router.delete('/delete-product', deleteProduct);
router.put('/update-product', updateProduct);

export default router;