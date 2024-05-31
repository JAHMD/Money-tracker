"use client";

import { cn } from "@/lib/utils";
import { daysList } from "@/shared/days-list";
import { Expense } from "@/shared/utils";
import { useState } from "react";
import NewExpenseForm from "../NewExpenseForm";
import { Button, buttonVariants } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type AddExpenseButtonProps = {
  expensesList: Expense[];
};

export default function AddExpenseButton({
  expensesList,
}: AddExpenseButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen}>
      <DialogTrigger
        className={cn(
          "w-fit capitalize",
          buttonVariants({ variant: "default" }),
        )}
        onClick={() => {
          const date = new Date();

          const hasExpense = expensesList.some(
            (expense) => expense.date === date.toLocaleDateString(),
          );

          if (hasExpense) {
            setIsOpen(false);
            alert("You already have an expense for this day.");
          } else {
            setIsOpen(true);
          }
        }}
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
        <NewExpenseForm
          setIsLoading={setIsLoading}
          onClose={() => setIsOpen(false)}
          isLoading={isLoading}
          expensesList={expensesList}
        />
      </DialogContent>
    </Dialog>
  );
}
