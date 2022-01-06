import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div
      style={{ borderRadius: "25px" }}
      className="alert alert-primary bg-warning bg-gradient text-center"
    >
      <span className="text-center">Spent so far: {totalExpenses}$</span>
    </div>
  );
};

export default ExpenseTotal;
