import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import "./ExpenseItem.css"

function ExpenseItem(props) {
  
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      
      <ExpenseDetails amount={props.amount}  location={props.location} title={props.title} />
      
    </div>
  )
}

export default ExpenseItem
