"use client";

import { daysList } from "@/shared/days-list";
import { Expense, getExpensesList } from "@/shared/utils";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import ExpenseFormInput from "./ExpenseFormInput";

type NewExpenseFormProps = {
  expensesList: Expense[];
  setIsLoading: (value: boolean) => void;
  onClose: () => void;
  isLoading: boolean;
};

export default function NewExpenseForm(props: NewExpenseFormProps) {
  const router = useRouter();
  const [amount, setAmount] = useState(0);

  const { expensesList, setIsLoading, onClose, isLoading } = props;
  const date = new Date();
  const dayName = daysList[date.getDay()];

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const expenseObj = {
      dayName,
      date: date.toLocaleDateString(),
      amount,
    };

    expensesList.push(expenseObj);
    localStorage.setItem("expenses", JSON.stringify(expensesList));

    router.refresh();
    onClose();
    setIsLoading(false);
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
        disabled={isLoading}
        className="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-primary"
      >
        Add Expense
      </Button>
    </form>
  );
}
