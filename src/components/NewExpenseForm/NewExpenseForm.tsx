"use client";

import { daysList } from "@/shared/days-list";
import { Expense, upsertExpense } from "@/shared/utils";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import ExpenseFormInput from "./ExpenseFormInput";

export default function NewExpenseForm() {
  const [amount, setAmount] = useState(0);

  const date = new Date();
  const dayName = daysList[date.getDay()];

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const expense: Expense = {
      dayName,
      date: date.toLocaleDateString(),
      amount,
    };

    upsertExpense(expense);
    location.reload();
  };

  return (
    <form className="mt-6 flex flex-col gap-6" onSubmit={submitHandler}>
      <ExpenseFormInput label="day" value={dayName} disabled />
      <ExpenseFormInput
        label="date"
        value={date.toLocaleDateString()}
        disabled
      />
      <ExpenseFormInput
        label="amount"
        value={amount.toString()}
        setValue={setAmount}
      />

      <Button
        type="submit"
        className="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-primary"
      >
        Add Expense
      </Button>
    </form>
  );
}
