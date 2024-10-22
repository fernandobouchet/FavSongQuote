"use client";

import { useState, useEffect } from "react";
import QuoteCard from "@/components/quoteCard/quoteCard";
import { getSomeQuotes } from "@/lib/services/getSomeQuotes";

export default function QuoteCardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const reqData = await getSomeQuotes();
      setData(reqData);
    };
    fetchQuotes();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [data.length]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full max-w-2xl mx-auto h-60 overflow-hidden">
        {data?.map((quote, index) => (
          <div
            key={quote.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            <QuoteCard quote={quote} isHome={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
