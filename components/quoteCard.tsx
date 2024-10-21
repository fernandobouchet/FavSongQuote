"use client";
import { Music, ThumbsUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  quote: Quote;
}

export default function QuoteCard({ quote }: Props) {
  return (
    <Card key={quote.id} className="h-full bg-card text-card-foreground">
      <CardContent className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <Music className="w-8 h-8 text-primary" />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => console.log(quote.id)}
            className="text-primary"
          >
            <ThumbsUp className="h-4 w-4 mr-2" />
            {quote.likes?.length}
          </Button>
        </div>
        <blockquote className="text-lg italic mb-4 text-gray-700 dark:text-gray-300">
          {`"${quote.text}"`}
        </blockquote>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {quote.song}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {quote.band}
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <User className="h-4 w-4 mr-1" />
            {quote.author?.full_name}
          </div>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {quote.createdAt.toString()}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
