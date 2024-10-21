"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { postNewQuote } from "@/lib/services/postNewQuote";

const formSchema = z.object({
  text: z
    .string()
    .min(10, {
      message: "Quote must be at least 10 characters.",
    })
    .max(80, {
      message: "Quote must be at 80 characters max.",
    }),
  song: z.string().min(2, {
    message: "Song name must be at least 2 characters.",
  }),
  band: z.string().min(2, {
    message: "Band or artist name must be at least 2 characters.",
  }),
});

interface Props {
  onClose: () => void;
}

export default function CreateQuoteForm({ onClose }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
      song: "",
      band: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = await postNewQuote(values);
      if (data) {
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full px-4 lg:py-4"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quote</FormLabel>
              <FormControl>
                <Input placeholder="Add your favorite song quote" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="song"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Song</FormLabel>
              <FormControl>
                <Input placeholder="Name of the song" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="band"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Band</FormLabel>
              <FormControl>
                <Input placeholder="Name of the band / artist" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Add Quote
        </Button>
      </form>
    </Form>
  );
}
