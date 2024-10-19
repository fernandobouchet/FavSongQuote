"use client";
import { Disc, ThumbsUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  quote: Quote;
}

export default function QuoteCard({ quote }: Props) {
  return (
    <Card
      key={quote.id}
      className="bg-white dark:bg-gray-700 shadow-md masonry-item overflow-hidden"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20"></div>
        <CardContent className="relative p-6">
          <div className="flex items-center justify-between mb-4">
            <Disc className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => console.log(quote.id)}
              className="text-indigo-600 dark:text-indigo-400"
            >
              <ThumbsUp className="h-4 w-4 mr-2" />
              {quote.likes.length}
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
              {quote.author.full_name}
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {quote.createdAt.toLocaleDateString()}
            </span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
