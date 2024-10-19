import LogoutButton from "@/components/logoutButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const user = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{user.data.user?.email}</h1>
      <LogoutButton />
    </div>
  );
}
