import { Product } from "@prisma/client";
import { prisma } from "../../../database/prismaCliente";
import { AppError } from "../../../errors/AppError";
import { CreateProductDTO } from "../dtos/CreateProduct.dto";

export class ProductService {
    async create({ name, description, price, category }: CreateProductDTO): Promise<Product> {
        const prodAlreadyExists = await prisma.product.findUnique({
            where: {
                name,
            }
        })

        if(prodAlreadyExists) {
            throw new AppError('Product already exists!')
        }

        const product = await prisma.product.create({
            data: {
                name,
                price,
                description,
                categories: {
                    connectOrCreate: {
                        where: { name: category },
                        create: { name: category }
                    }
                }
            },

        })

        return product;
    }

    async findAll(): Promise<Product[]> {
        return await prisma.product.findMany({
            include: {
                categories: {
                    select: {
                        name: true
                    }
                }
            }
        });
    }
}