"use client";
import { Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import QuoteLike from "./quoteLike";

interface Props {
  quote: Quote;
}

export default function QuoteCard({ quote }: Props) {
  return (
    <Card key={quote.id} className="h-full bg-card text-card-foreground">
      <CardContent className="relative p-6 text-center">
        <div className="flex items-center justify-between mb-4">
          <Music className="w-5 h-5 text-primary" />
          <QuoteLike quote={quote} />
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
      </CardContent>
    </Card>
  );
}
