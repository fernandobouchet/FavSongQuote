import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const note = await prisma.notes.findUnique({
    where: {
      id,
    },
  });

  if (!note) {
    return NextResponse.json(
      {
        success: true,
        message: "Detail data note not found!",
        data: null,
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Detail data note",
      data: note,
    },
    {
      status: 200,
    }
  );
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const { content } = await request.json();

  const note = await prisma.notes.update({
    where: {
      id,
    },
    data: {
      content,
      updateAt: new Date(),
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Note updated successfully!",
      data: note,
    },
    { status: 200 }
  );
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  await prisma.notes.delete({
    where: {
      id,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Note deleted successfully!",
    },
    { status: 200 }
  );
}
