import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function firstUser() {
    const user = await prisma.user.create({
        data: {
            name: 'Maël Chariault',
            email: 'mael.chariault@deviteasy.fr',
        },
    })
    console.log(user)
}

