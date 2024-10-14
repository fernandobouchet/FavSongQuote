import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(request: NextRequest) {
  const { content } = await request.json();

  const note = await prisma.notes.create({
    data: { content },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Note created successfully!",
      data: note,
    },
    { status: 201 }
  );
}

export async function GET() {
  const notes = await prisma.notes.findMany();

  return NextResponse.json(
    {
      success: true,
      message: "List data notes",
      data: notes,
    },
    {
      status: 200,
    }
  );
}
