"use client";
import { ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFetchUser } from "@/hooks/useGetUser";
import { postLikeQuote } from "@/lib/services/postLikeQuote";

interface Props {
  quote: Quote;
}

export default function QuoteLike({ quote }: Props) {
  const { user } = useFetchUser();

  return (
    <Button
      variant="ghost"
      size="sm"
      disabled={!user}
      onClick={async () => await postLikeQuote(quote.id)}
      className="text-primary"
    >
      <ThumbsUp className="h-6 w-6 mr-2" />
      {quote.likes?.length || 0}
    </Button>
  );
}
