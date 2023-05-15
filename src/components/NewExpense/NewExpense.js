import React from 'react';
import ExpenseForm from './ExpenseForm.js';
import "./NewExpense.css";



const NewExpense=(props) =>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpanseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;