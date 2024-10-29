"use client";
import { ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFetchUser } from "@/hooks/useGetUser";
import { postLikeQuote } from "@/lib/services/postLikeQuote";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  quote: Quote;
}

export default function QuoteLike({ quote }: Props) {
  const { user } = useFetchUser();
  const router = useRouter();

  async function handlelike() {
    try {
      const data = await postLikeQuote(quote.id);
      if (data) {
        toast.success("Quote like has been updated!");
        router.refresh();
      } else {
        toast.error("Something bad happened, please try again later.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      disabled={!user}
      onClick={handlelike}
      className="text-indigo-500"
    >
      <ThumbsUp className="h-6 w-6 mr-2" />
      {quote.likes?.length || 0}
    </Button>
  );
}
