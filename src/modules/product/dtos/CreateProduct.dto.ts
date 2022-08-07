import { Category } from "@prisma/client"

export interface CreateProductDTO {
    name: string
    description: string
    price: number
    category: string
}