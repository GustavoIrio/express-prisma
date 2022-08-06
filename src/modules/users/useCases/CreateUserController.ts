// Controller vai receber as informações da rota e passar para o UseCase

import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, phone, password } = req.body;

        const createUser = new CreateUser();

        const result = await createUser.create({ name, email, phone, password  });

        return res.status(201).json(result);
    }
}