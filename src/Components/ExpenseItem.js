import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated through useState!");

    console.log("Clicked!!!");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__amount">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}

export default ExpenseItem;
