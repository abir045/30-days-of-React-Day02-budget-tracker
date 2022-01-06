import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center bg-dark bg-gradient text-white fw-bold ">
      {props.name}
      <div className="bg-dark ">
        <span className="badge badge-primary badge-pill mr-3  ">
          {props.cost}$
        </span>
        <AiFillDelete size={"2em"} onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
