import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../ContextApi/ExpenseTrackerContext";

const Transaction = () => {
  const [transaction, setTransaction] = useContext(ExpenseTrackerContext);
  console.log("transaction:", transaction);

  const deleteMethod = (transId) => {
    console.log("transid:", transId);
    setTransaction(
      transaction.filter((singleTrans) => singleTrans.id !== transId)
    );
  };

  return (
    <>
      {transaction.length > 0 ? (
        transaction.map((trans) => (
          <li
            key={trans.id}
            className={trans.IncExp === "income" ? "plus" : "minus"}
          >
            {trans.text} <span>${trans.amount}</span>
            <button
              className="delete-btn"
              onClick={() => deleteMethod(trans.id)}
            >
              x
            </button>
          </li>
        ))
      ) : (
        <b className="text-danger">No data available</b>
      )}
    </>
  );
};

export default Transaction;
