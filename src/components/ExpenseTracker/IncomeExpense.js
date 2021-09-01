import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../ContextApi/ExpenseTrackerContext";

const IncomeExpense = () => {
  const [incExpContext, setIncExpContext] = useContext(ExpenseTrackerContext);
  console.log("Income Expense Data::", incExpContext);

  // Get income data
  const filterIncome = incExpContext.filter(
    (filtered) => filtered.IncExp === "income"
  );
  const getIncome = filterIncome.map((incExp) => incExp.amount);
  const uptIncome = getIncome.map((intergerArr) => Number(intergerArr));

  const totalIncome = uptIncome.reduce(
    (total, totalIncome) => total + totalIncome,
    0
  );

  // Get expense data
  const filterExpense = incExpContext.filter(
    (filtered) => filtered.IncExp === "expense"
  );
  console.log("filter expense ::", filterExpense);

  const getExpense = filterExpense.map((incExp) => incExp.amount);
  console.log("getExpense  ::", getExpense);

  const uptExpense = getExpense.map((intergerArr) => Number(intergerArr));

  const totalExpense = uptExpense.reduce(
    (total, totalExpense) => total + totalExpense,
    0
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h5>Income</h5>
        <p id="money-plus" className="money plus">
          ${totalIncome}
        </p>
      </div>
      <div>
        <h5>Expense</h5>
        <p id="money-minus" className="money minus">
          ${totalExpense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
