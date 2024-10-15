"use client";
import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const loginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `/api/auth/callback`,
      },
    });
  };

  return (
    <div>
      LoginPage
      <button onClick={loginWithGoogle}>LOGIN</button>
    </div>
  );
}
