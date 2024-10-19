import { getAllQuotes } from "@/lib/services/getAllQuotes";
import QuoteCard from "@/components/quoteCard";

export default async function QuoteCardsContainer() {
  const quotes = await getAllQuotes();

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
      {quotes.map((quote: Quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
}
