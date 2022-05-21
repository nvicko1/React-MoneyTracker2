import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import react, { useState } from 'react';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses Found!</p>;

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          filterChangeHandler={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
