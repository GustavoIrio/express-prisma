import { Router } from "express";
import { productRoutes } from "./product.routes";
import { userRoutes } from "./user.routes";
const routes = Router();

routes.use("/users", userRoutes);
routes.use("/products", productRoutes);

export { routes };