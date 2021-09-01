import React, { useState, useContext } from "react";
import { ExpenseTrackerContext } from "../ContextApi/ExpenseTrackerContext";

const AddTransaction = () => {
  // const [data, setData] = useContext(ExpenseTrackerContext);
  const [transaction, setTransaction] = useContext(ExpenseTrackerContext);
  console.log("original transaction:", transaction);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [IncExp, setIncExp] = useState("");

  const setIncomeExpense = (e) => {
    if (e.target.id === "income") {
      setIncExp("income");
    } else if (e.target.id === "expense") {
      setIncExp("expense");
    }
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter your Transaction details!");
      document.getElementById("text").focus();
      return;
    } else if (!amount) {
      alert("Please enter amount details!");
      document.getElementById("amount").focus();
      return;
    } else if (!IncExp) {
      alert("Please select Income or Expense!");
      return;
    }
    // saveData(data);
    // ------------ Static method ----------------
    const id = Math.floor(Math.random() * 1000) + 1;
    const newData = { id, text, amount, IncExp };
    console.log("new Data:", newData);
    setTransaction([...transaction, newData]);

    setText("");
    setAmount("");

    alert("Data stored successsfully!");
    console.log("text, amount, IncExp ::", text, amount, IncExp);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <div>
          <label className="mr-2 cursor" htmlFor="income">
            Income
          </label>
          <input
            className="mr-3 cursor"
            type="radio"
            id="income"
            name="IncExp"
            onChange={setIncomeExpense}
          />
          <label className="mr-2 cursor" htmlFor="expense">
            Expense
          </label>
          <input
            type="radio"
            className="cursor"
            id="expense"
            name="IncExp"
            onChange={setIncomeExpense}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
