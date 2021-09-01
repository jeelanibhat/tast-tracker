import React from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import { ExpenseTrackerProvider } from "../ContextApi/ExpenseTrackerContext";

const MainTracker = () => {
  return (
    <ExpenseTrackerProvider>
      <div className="main-tracker-container">
        <h2 className="tracker-main-heading">
          Expense Tracker <hr></hr>
        </h2>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </ExpenseTrackerProvider>
  );
};
export default MainTracker;
