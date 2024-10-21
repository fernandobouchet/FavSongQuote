import { getAllQuotes } from "@/lib/services/getAllQuotes";
import QuoteCard from "@/components/quoteCard";

export default async function QuoteCardsContainer() {
  const quotes = await getAllQuotes();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {quotes?.map((quote: Quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
}
