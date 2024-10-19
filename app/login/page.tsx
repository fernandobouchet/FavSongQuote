import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginButton from "@/components/loginButton";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-2xl transition-colors duration-300">
        <CardHeader className="text-center relative">
          <CardTitle className="text-4xl font-bold mb-2">
            Favorite Song Phrases
          </CardTitle>
          <CardDescription className="text-lg text-slate-600 dark:text-slate-300">
            Share and discover the best phrases from your favorite songs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative h-80 overflow-hidden"></div>
          <Card className="bg-white dark:bg-slate-700 shadow-md">
            <CardContent className="pt-6">
              <p className="text-center mb-4 text-slate-600 dark:text-slate-300">
                Sign in to add your favorite phrases
              </p>
              <LoginButton />
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="text-center text-sm text-slate-500 dark:text-slate-400">
          Sharing music, one phrase at a time.
        </CardFooter>
      </Card>
    </div>
  );
}
