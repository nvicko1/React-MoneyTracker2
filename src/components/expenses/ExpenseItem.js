import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';
function ExpenseItem(props) {
  // let title = props.title;

  const [title, setTitle] = useState(props.title);
  console.log('expense item evalueted');
  const clickHandler = () => {
    setTitle('updated');
    console.log(title);
  };
  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change</button>
    </Card>
  );
}

export default ExpenseItem;
