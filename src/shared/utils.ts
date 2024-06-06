export type Expense = {
  dayName: string;
  date: string;
  amount: number;
};

export type ExpensesObj = {
  [key: string]: Expense;
};

export function getStoredExpensesObj(): ExpensesObj {
  const storedItems = localStorage.getItem("expenses");

  return storedItems ? JSON.parse(storedItems!) : {};
}

export function upsertExpense(expense: Expense) {
  const storedExpenses = getStoredExpensesObj();
  const storedItem = storedExpenses[expense.date];

  if (storedItem) {
    expense.amount = storedItem.amount + expense.amount;
  }

  storedExpenses[expense.date] = expense;
  localStorage.setItem("expenses", JSON.stringify(storedExpenses));
}
