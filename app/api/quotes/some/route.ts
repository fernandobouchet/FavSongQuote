import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const notes = await prisma.quote.findMany({ take: 5 });

  return NextResponse.json(
    {
      success: true,
      message: "List data of 5 notes",
      data: notes,
    },
    {
      status: 200,
    }
  );
}
