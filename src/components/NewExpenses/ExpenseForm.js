import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const titleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const [EnteredAmount, setEnteredAmount] = useState("");
  const amountChange = (e) => {
    setEnteredAmount(e.target.value);
  };

  const [EnteredDate, setEnteredDate] = useState("");
  const dateChange = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={EnteredTitle} onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={EnteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={EnteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
