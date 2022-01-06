import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import { BsFillSave2Fill } from "react-icons/bs";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="row mt-3">
          <div className="col-sm">
            <label className="text-white fst-italic" htmlFor="name">
              Name
            </label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="col-sm">
            <label className="text-white fst-italic" htmlFor="name">
              Cost
            </label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
          <div className="col-sm mt-4 mb-5">
            <button type="submit">
              <BsFillSave2Fill /> Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
