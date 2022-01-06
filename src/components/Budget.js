import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  return (
    <div
      style={{ borderRadius: "25px" }}
      className="alert alert-secondary bg-primary bg-gradient text-center "
    >
      <span className="text-white ">Budget: {budget}$</span>
    </div>
  );
};

export default Budget;
