import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
      <h2 className="text-2xl font-semibold">Loading...</h2>
      <p className="mt-2">Please wait while we prepare the content</p>
    </div>
  );
}
