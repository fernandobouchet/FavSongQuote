"use client";
import { Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import QuoteLike from "@/components/quoteCard/quoteLike";
import QuoteVideoLink from "@/components/quoteCard/quoteVideoLink";
import DeleteQuoteAlert from "@/components/deleteQuoteAlert";
import Image from "next/image";
import { getVideoCover } from "@/utils/functions";

interface Props {
  quote: Quote;
  isHome: boolean;
}

export default function QuoteCard({ quote, isHome }: Props) {
  return (
    <Card
      key={quote.id}
      className="flex flex-col h-full bg-[#040610] text-card-foreground relative border-none rounded-lg"
    >
      <Image
        src={getVideoCover(quote.videoUrl)}
        alt={`${quote.song} cover video.`}
        sizes="(min-width: 1028px) 33vw, 100vw"
        fill
        className="opacity-10 object-cover rounded-lg"
      />
      <CardContent className="p-6 text-center flex-grow z-10 backdrop-blur-sm rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <Music className="w-5 h-5 text-primary text-indigo-500" />
          <div className="flex gap-2">
            {isHome && <DeleteQuoteAlert quote={quote} />}
            <QuoteLike quote={quote} />
          </div>
        </div>
        <blockquote className="text-lg italic mb-4 text-gray-300">
          {`“ ${quote.text} ”`}
        </blockquote>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-gray-100">{quote.song}</p>
          <p className="text-sm text-gray-400">{quote.band}</p>
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
