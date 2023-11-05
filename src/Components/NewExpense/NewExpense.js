import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import '../../Style/NewExpense.css';

const NewExpense = (props) => {
  const [openNewExpensesForm, setOpenNewExpensesForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setOpenNewExpensesForm(false);
  };

  const startEditingHandler = () => {setOpenNewExpensesForm(true);}

  const stopEditingHandler = () => {setOpenNewExpensesForm(false);}

  return (
    <div className='new-expense'>
      {!openNewExpensesForm &&
        <button onClick={startEditingHandler}>Add new expense</button>
      }
      {openNewExpensesForm && 
        <ExpenseForm 
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler} />
      }
      
    </div>
  );
};

export default NewExpense;