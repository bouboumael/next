import {NextResponse} from "next/server";
import {PrismaClient, User} from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    const users: User[]  = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST({ body }: {body: User}) {
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
        },
    });
    return NextResponse.json(newUser);
}

export async function PUT({ body }: {body: User}) {
    const updatedUser = await prisma.user.update({
        where: { id: body.id },
        data: {
            name: body.name,
            email: body.email
        },
    });
    return NextResponse.json(updatedUser);
}

export async function DELETE({ body }: {body: User}) {
    const deletedUser = await prisma.user.delete({
        where: { id: body.id },
    });
    return NextResponse.json(deletedUser);
}

