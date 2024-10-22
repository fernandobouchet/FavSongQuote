"use client";
import { Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import QuoteLike from "./quoteLike";
import QuoteDelete from "./quoteDelete";
import QuoteVideoLink from "./quoteVideoLink";

interface Props {
  quote: Quote;
  isHome: boolean;
}

export default function QuoteCard({ quote, isHome }: Props) {
  return (
    <Card
      key={quote.id}
      className="flex flex-col h-full bg-card text-card-foreground"
    >
      <CardContent className="p-6 text-center flex-grow">
        <div className="flex items-center justify-between mb-4">
          <Music className="w-5 h-5 text-primary" />
          <div className="flex gap-2">
            {isHome && <QuoteDelete quote={quote} />}
            <QuoteLike quote={quote} />
          </div>
        </div>
        <blockquote className="text-lg italic mb-4 text-gray-700 dark:text-gray-300">
          {`“ ${quote.text} ”`}
        </blockquote>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {quote.song}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {quote.band}
          </p>
        </div>
        {isHome && (
          <div className="pt-4">
            <QuoteVideoLink quote={quote} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
