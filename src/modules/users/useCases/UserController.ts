// Controller vai receber as informações da rota e passar para o UseCase

import { Request, Response } from "express";
import { UserService } from "./User";

export class UserController {

    async create(req: Request, res: Response) {
        const { name, email, phone, password } = req.body;

        const User = new UserService();

        const result = await User.create({ name, email, phone, password  });

        return res.status(201).json(result);
    }

    async findAll(req: Request, res: Response) {
        const User = new UserService();

        const result = await User.findAll();

        return res.status(201).json(result);

    }
}