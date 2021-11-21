import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, SetisEditing] = useState(false);
  const saveExpenseDataHandler = (EnteredExpenseData) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    SetisEditing(false);
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    SetisEditing(true);
  };

  const cancelButtonHandler = () => {
    SetisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelButtonHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
