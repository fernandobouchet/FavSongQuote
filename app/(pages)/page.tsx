import CreateQuoteCTA from "@/components/createQuoteCTA";
import QuoteCardsContainer from "@/components/quoteCardsContainer";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 gap-16 sm:p-14">
      <CreateQuoteCTA />
      <QuoteCardsContainer />
    </div>
  );
}
