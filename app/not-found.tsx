import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <FileQuestion className="mx-auto h-24 w-24 text-destructive mb-6" />
        <h2 className="text-3xl font-semibold mb-4">Not Found</h2>
        <p className="text-lg mb-8">Could not find requested resource</p>
        <Button asChild size="lg" className="text-lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
