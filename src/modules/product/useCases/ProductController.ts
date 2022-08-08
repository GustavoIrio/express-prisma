import { Request, Response } from "express";
import { ProductService } from "./Product";

export class ProductController {
    async create(req: Request, res: Response) {
        const { name, price, description, category } = req.body;

        const productService = new ProductService();

        const result = await productService.create({ name, price, description, category });

        return res.status(201).json(result);
    }
    
    async findAll(req: Request,res: Response) {
        const productService = new ProductService();
        
        const result = await productService.findAll();

        return res.status(201).json(result);
    }
}