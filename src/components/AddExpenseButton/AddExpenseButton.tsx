"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import NewExpenseForm from "../NewExpenseForm";
import { buttonVariants } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function AddExpenseButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "w-full capitalize sm:w-fit",
          buttonVariants({ variant: "default" }),
        )}
      >
        new record
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new expense</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <NewExpenseForm />
      </DialogContent>
    </Dialog>
  );
}
