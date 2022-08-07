import { Request, Response } from "express";
import { CreateProduct } from "./CreateProduct";

export class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category } = req.body;

        const createProduct = new CreateProduct();

        const result = await createProduct.create({ name, price, description, category });

        return res.status(201).json(result);
    }
}