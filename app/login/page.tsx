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
      <Card className="w-full max-w-4xl backdrop-blur-md shadow-2xl transition-colors duration-300">
        <CardHeader className="text-center relative">
          <CardTitle className="text-4xl font-bold mb-2">
            Favorite Song Phrases
          </CardTitle>
          <CardDescription className="text-lg">
            Share and discover the best phrases from your favorite songs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative h-80 overflow-hidden"></div>
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <p className="text-center mb-4">
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
