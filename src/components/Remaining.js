import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alerType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div
      style={{ borderRadius: "25px" }}
      className={`alert ${alerType} text-center`}
    >
      <span className="text-center">Remaining : {budget - totalExpenses}$</span>
    </div>
  );
};

export default Remaining;
