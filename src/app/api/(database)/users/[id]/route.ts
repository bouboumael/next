import { NextResponse } from "next/server";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
    request: any,
    context: any
) {
    const user: User | null = await prisma.user.findUnique({
        where: { id: Number(context.params.id) },
    });

    return NextResponse.json(user);
}
