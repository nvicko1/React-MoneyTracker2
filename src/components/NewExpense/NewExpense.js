import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import react, { useState } from 'react';

const NewExpense = function (props) {
  const [isEditing, setIsEditing] = useState(false);
  const startEditing = function () {
    setIsEditing(true);
  };
  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setIsEditing(false);
    props.onAddExpense(expenseData);
  };

  const closeExpense = function () {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add new expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeExpense={closeExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
