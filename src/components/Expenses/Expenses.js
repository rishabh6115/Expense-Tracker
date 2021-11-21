import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="main-expense">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
