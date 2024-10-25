import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { createClient } from "@/utils/supabase/server";
import quoteSchema from "../../validators/quoteSchema";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not logged in.");
  }

  const id = parseInt(params.id);

  const quote = await prisma.quote.findUnique({
    where: {
      id,
      authorId: user.id,
    },
    include: { author: true, likes: true },
  });

  if (!quote) {
    return NextResponse.json(
      {
        success: true,
        message: "Detail data quote not found!",
        data: null,
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Detail data quote",
      data: quote,
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

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not logged in.");
  }

  const id = parseInt(params.id);

  const requestData = await request.json();
  const validatedRequestData = quoteSchema.parse(requestData);

  const quote = await prisma.quote.update({
    where: {
      id,
      authorId: user.id,
    },
    data: {
      text: validatedRequestData.text,
      song: validatedRequestData.song,
      band: validatedRequestData.band,
      updatedAt: new Date(),
      authorId: user.id,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Quote updated successfully!",
      data: quote,
    },
    { status: 200 }
  );
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not logged in.");
  }

  const id = parseInt(params.id);

  await prisma.quote.delete({
    where: {
      id,
      authorId: user.id,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Quote deleted successfully!",
    },
    { status: 200 }
  );
}
