import React, { useContext, useState } from "react";
import { ExpenseTrackerContext } from "../ContextApi/ExpenseTrackerContext";

const Balance = () => {
  const [transaction, setTransaction] = useContext(ExpenseTrackerContext);
  console.log("Balance Data::", transaction);

  const mapBalance = transaction.map((uptBalance) => uptBalance.amount);
  const uptMapBalance = mapBalance.map((intergerArr) => Number(intergerArr));
  console.log("uptMapBalance -------- ", uptMapBalance);

  const Balance = uptMapBalance.reduce((total, amount) => total + amount, 0);
  return (
    <div>
      <h5>Your Balance</h5>
      <h3>${Balance}</h3>
    </div>
  );
};

export default Balance;
