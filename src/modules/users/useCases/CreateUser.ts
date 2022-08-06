import { User } from "@prisma/client";
import { prisma } from "../../../database/prismaCliente";
import { CreateUserDTO } from "../dtos/CreateUser.dto";

export class CreateUser {
    async create({ name, email, phone, password }: CreateUserDTO): Promise<User> {
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