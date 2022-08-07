import { Router } from "express";
import { CreateProductController } from "../modules/product/useCases/CreateProductController";

const createProductController = new CreateProductController();

const productRoutes = Router();

productRoutes.post("/", createProductController.handle);

export { productRoutes }