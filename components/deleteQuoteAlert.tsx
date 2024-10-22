import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useFetchUser } from "@/hooks/useGetUser";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  quote: Quote;
}

export default function DeleteQuoteAlert({ quote }: Props) {
  const { user } = useFetchUser();
  const router = useRouter();

  if (!user) return;

  async function handlelike() {
    try {
      //const data = await deleteQuote(quote.id);
      if (true) {
        toast.success("Quote has been deleted!");
        router.refresh();
      } else {
        toast.error("Something bad happened, please try again later.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          disabled={!user || user.id !== quote.authorId}
          className="text-primary"
        >
          <Trash2 className="h-6 w-6" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the quote
            you have created and his likes.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handlelike}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/80 hover:bg-opacity-5"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
