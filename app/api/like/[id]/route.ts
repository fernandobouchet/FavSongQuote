import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { createClient } from "@/utils/supabase/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    throw new Error("User is not logged in.");
  }

  const id = parseInt(params.id);

  const quote = await prisma.quote.findUnique({
    where: {
      id,
    },
    include: {
      likes: true,
    },
  });

  const previousLike = quote?.likes.find(
    (like) => like.userId === data.user.id
  );

  if (previousLike) {
    await prisma.like.delete({
      where: {
        id: previousLike.id,
      },
    });
  } else {
    await prisma.like.create({
      data: {
        quoteId: id,
        userId: data.user.id,
      },
    });
  }

  return NextResponse.json(
    {
      success: true,
      message: "Like updated successfully!",
    },
    { status: 200 }
  );
}
