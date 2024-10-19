import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: NextRequest) {
  const { content } = await request.json();
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    throw new Error("User is not logged in.");
  }

  const note = await prisma.quote.create({
    data: { ...content, authorId: data.user.id },
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
  const notes = await prisma.quote.findMany();

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
