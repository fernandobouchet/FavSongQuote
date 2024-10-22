import Link from "next/link";
import { Button } from "../ui/button";
import { Youtube } from "lucide-react";
import { useFetchUser } from "@/hooks/useGetUser";

interface Props {
  quote: Quote;
}

export default function QuoteVideoLink({ quote }: Props) {
  const { user } = useFetchUser();

  if (!user) return;

  return (
    <Button asChild variant="outline" className="w-full mb-4">
      <Link href={quote.videoUrl} target="_blank" rel="noopener noreferrer">
        <Youtube className="mr-2 h-4 w-4" />
        Watch song video on YouTube
      </Link>
    </Button>
  );
}
