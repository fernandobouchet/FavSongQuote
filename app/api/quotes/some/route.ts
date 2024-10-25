import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const quotes = await prisma.quote.findMany({
    take: 5,
    include: { likes: true },
  });

  return NextResponse.json(
    {
      success: true,
      message: "List data of 5 notes",
      data: quotes,
    },
    {
      status: 200,
    }
  );
}
