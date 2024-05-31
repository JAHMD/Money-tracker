export type Expense = {
  dayName: string;
  date: string;
  amount: number;
};

export function getExpensesList(): Expense[] {
  const storedItems = localStorage.getItem("expenses");
  const expensesList: Expense[] = storedItems ? JSON.parse(storedItems!) : [];

  return expensesList;
}
