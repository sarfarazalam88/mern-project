import express from "express";
import { addProduct, deleteData, getData, getDataById, updateData } from "../Controllers/product.js";
const router = express.Router();
router.post("/addproduct", addProduct)
router.get("/all", getData)
router.get('/:id', getDataById)
router.put("/:id", updateData)
router.delete("/:id", deleteData)
export default router;