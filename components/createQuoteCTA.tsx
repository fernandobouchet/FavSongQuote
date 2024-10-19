"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import CreateQuoteForm from "@/components/createQuoteForm";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function CreateQuoteCTA() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-1/2 mx-auto">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create quote
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Create quote</DialogTitle>
            <DialogDescription>
              Add your favorite song quote here. Click &quot;Add Quote&quot;
              when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <CreateQuoteForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Create quote
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Create quote</DrawerTitle>
          <DrawerDescription>
            Add your favorite song quote here. Click &quot;Add Quote&quot; when
            you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <CreateQuoteForm onClose={() => setOpen(false)} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
