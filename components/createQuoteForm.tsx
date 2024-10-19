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
import { PlusCircle } from "lucide-react";

const formSchema = z.object({
  text: z
    .string()
    .min(10, {
      message: "Quote must be at least 10 characters.",
    })
    .max(50, {
      message: "Quote must be at 50 characters max.",
    }),
  song: z.string().min(2, {
    message: "Song name must be at least 2 characters.",
  }),
  band: z.string().min(2, {
    message: "Band or artist name must be at least 2 characters.",
  }),
});

export default function CreateQuoteForm() {
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
      const res = await fetch(`${location.origin}/api/quotes`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        console.log("Success!");
      } else {
        console.log("Oops! Error.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
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
          <PlusCircle className="mr-2 h-4 w-4" /> Add Quote
        </Button>
      </form>
    </Form>
  );
}
