import react from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = function (props) {
  let expensesContent = <p>No expenses Found!</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">found no expenses!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
