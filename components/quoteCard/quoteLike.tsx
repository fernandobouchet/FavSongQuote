import { ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useFetchUser } from "@/hooks/useGetUser";

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
      onClick={() => console.log(quote.id)}
      className="text-primary"
    >
      <ThumbsUp className="h-6 w-6 mr-2" />
      {quote.likes?.length || 0}
    </Button>
  );
}
