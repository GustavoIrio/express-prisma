import { Router } from "express";
import { ProductController } from "../modules/product/useCases/ProductController";

const createProductController = new ProductController();

const productRoutes = Router();

productRoutes.post("/", createProductController.create);
productRoutes.get("/", createProductController.findAll);


export { productRoutes }