import AddExpenseButton from "@/components/AddExpenseButton";
import { DailyExpensesTable } from "@/components/DailyExpensesTable/DailyExpensesTable";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getExpensesList } from "@/shared/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Expenses",
  description: "Daily Expenses page",
};

export default function DailyExpensesPage() {
  return (
    <section className="container flex h-full flex-col gap-10 py-10">
      {/* <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
        </TabsList>
      </Tabs> */}
      <DailyExpensesTable />
    </section>
  );
}
