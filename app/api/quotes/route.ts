import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { createClient } from "@/utils/supabase/server";
import quoteSchema from "../validators/quoteSchema";

export async function POST(request: NextRequest) {
  const requestData = await request.json();
  const validatedRequestData = quoteSchema.parse(requestData);

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not logged in.");
  }

  const quote = await prisma.quote.create({
    data: {
      text: validatedRequestData.text,
      song: validatedRequestData.song,
      band: validatedRequestData.band,
      videoUrl: validatedRequestData.videoUrl,
      authorId: user.id,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Quote created successfully!",
      data: quote,
    },
    { status: 201 }
  );
}

export async function GET() {
  const quotes = await prisma.quote.findMany({
    include: { likes: true },
  });

  return NextResponse.json(
    {
      success: true,
      message: "List data quotes",
      data: quotes,
    },
    {
      status: 200,
    }
  );
}
