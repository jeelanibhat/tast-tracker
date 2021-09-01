import React, { createContext, useState, useEffect } from "react";

// data
const initialState = [
  { id: 1, text: "Laptop", amount: 40, IncExp: "expense" },
  { id: 2, text: "salary", amount: 100, IncExp: "income" },
  { id: 3, text: "freelance", amount: 30, IncExp: "income" },
  { id: 4, text: "watch", amount: 10, IncExp: "expense" },
];

// create context
export const ExpenseTrackerContext = createContext(initialState);

export const ExpenseTrackerProvider = (props) => {
  const [incExpContext, setIncExpContext] = useState(initialState);
  const [transactionData, setTransactionData] = useState();

  // call fetch function
  useEffect(() => {
    fetchTransactions();
  }, []);

  // fetch transaction
  const fetchTransactions = async () => {
    const response = await fetch("http://localhost:5000/transactions");
    const resJson = await response.json();
    console.log("fetchTransactions ::", resJson);
    setTransactionData(resJson);
  };

  return (
    <ExpenseTrackerContext.Provider value={[incExpContext, setIncExpContext]}>
      {props.children}
    </ExpenseTrackerContext.Provider>
  );
};
