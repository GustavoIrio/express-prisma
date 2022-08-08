import { Router } from "express";
import { UserController } from "../modules/users/useCases/UserController";

const userController = new UserController();

const userRoutes = Router();

userRoutes.post("/", userController.create);
userRoutes.get("/", userController.findAll);

export { userRoutes };