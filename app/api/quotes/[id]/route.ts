import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { createClient } from "@/utils/supabase/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const note = await prisma.quote.findUnique({
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
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    throw new Error("User is not logged in.");
  }

  const id = parseInt(params.id);

  const { content } = await request.json();

  const note = await prisma.quote.update({
    where: {
      id,
    },
    data: {
      ...content,
      updateAt: new Date(),
      authorId: data.user.id,
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

  await prisma.quote.delete({
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
