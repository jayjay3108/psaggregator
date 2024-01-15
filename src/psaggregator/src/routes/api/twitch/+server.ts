import { json } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export async function GET() {
    const data = await prisma.twitchStatus.findFirst();

    return json(data);
}
