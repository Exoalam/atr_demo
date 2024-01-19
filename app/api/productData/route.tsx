import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest){
    const items = await prisma.items.findMany();
    return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
    const update = await request.json();
    console.log(update)
    return NextResponse.json(update);
}