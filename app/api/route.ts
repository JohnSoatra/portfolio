import Vars from "@/constants/vars";
import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/context/prisma";

const POST = async(request: NextRequest): Promise<NextResponse<boolean>> => {
    const { name, link }: Json = await request.json();

    if (
        name === undefined ||
        name.trim().length < Vars.Name.MinLength ||
        name.trim().length > Vars.Name.MaxLength
    ) {
        return NextResponse.json(false);
    }

    if (
        link !== undefined &&
        link !== '' &&
        !(
            link.trim().startsWith('http://') ||
            link.trim().startsWith('https://')
        )
    ) {
        return NextResponse.json(false);
    }

    try {
        await prismaClient.visitor.upsert({
            where: {
                id: '1'
            },
            create: {
                id: '1',
                name: name,
                link: link,
            },
            update: {
                name: name,
                link: link,
                updated_at: new Date()
            }
        });

        return NextResponse.json(true);
    } catch {
        return NextResponse.json(false);
    }
}

const GET = async(): Promise<NextResponse<LastVisitor|null>> => {
    try {
        const visitor = await prismaClient.visitor.findUnique({
            where: {
                id: '1'
            },
            select: {
                name: true,
                link: true
            }
        });

        return NextResponse.json(visitor);
    } catch {
        return NextResponse.json(null);
    }
}

export {
    POST,
    GET
}