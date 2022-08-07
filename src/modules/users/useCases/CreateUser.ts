import { User } from "@prisma/client";
import { prisma } from "../../../database/prismaCliente";
import { AppError } from "../../../errors/AppError";
import { CreateUserDTO } from "../dtos/CreateUser.dto";

export class CreateUser {
    async create({ name, email, phone, password }: CreateUserDTO): Promise<User> {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email,
            }
        })

        if(userAlreadyExists) {
            throw new AppError("Email already exists!");
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                phone,
                password,
            },
        })

        return user;
    }
}