"use client";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFetchUser } from "@/hooks/useGetUser";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteQuote } from "@/lib/services/deleteQuote";

interface Props {
  quote: Quote;
}

export default function QuoteDelete({ quote }: Props) {
  const { user } = useFetchUser();
  const router = useRouter();

  if (!user) return;

  async function handlelike() {
    try {
      const data = await deleteQuote(quote.id);
      if (data) {
        toast.success("Quote has been deleted!");
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
      disabled={!user || user.id !== quote.authorId}
      onClick={handlelike}
      className="text-primary"
    >
      <Trash2 className="h-6 w-6" />
    </Button>
  );
}
