"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Expense, getExpensesList } from "@/shared/utils";
import { useEffect, useState } from "react";
import AddExpenseButton from "../AddExpenseButton";

const tableHeadList = [
  {
    title: "day",
    key: "day",
  },
  {
    title: "date",
    key: "date",
  },
  {
    title: "amount",
    key: "amount",
    styles: "text-right",
  },
];

export function DailyExpensesTable() {
  const [expensesList, setExpensesList] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const totalAmount = expensesList.reduce((acc, cur) => acc + cur.amount, 0);

  useEffect(() => {
    setIsLoading(true);
    const storedExpensesList = getExpensesList();

    setExpensesList(storedExpensesList);
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="ml-auto flex items-center gap-4">
        <AddExpenseButton expensesList={expensesList} />
      </div>
      <Table>
        <TableCaption>A list of your recent expenses.</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHeadList.map((head) => (
              <TableHead
                key={head.key}
                className={cn("capitalize", head.styles)}
              >
                {head.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {expensesList.length > 0 ? (
            expensesList.map((expense, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{expense.dayName}</TableCell>
                <TableCell className="font-medium">{expense.date}</TableCell>
                <TableCell className="text-right">{expense.amount}</TableCell>
              </TableRow>
            ))
          ) : expensesList.length === 0 && isLoading ? (
            <TableRow>
              <TableCell colSpan={3}>Loading...</TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell colSpan={3}>No expenses found.</TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right">{totalAmount}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
