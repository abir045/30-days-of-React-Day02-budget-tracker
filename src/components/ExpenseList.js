import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <div className="list-group">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
            key={expense.id}
          />
        );
      })}
    </div>
  );
};

export default ExpenseList;
