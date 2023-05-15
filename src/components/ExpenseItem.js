import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from "./Card";
import "./ExpenseItem.css"

function ExpenseItem(props) {
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      
      <ExpenseDetails amount={props.amount}  location={props.location} title={props.title} />
      
    </Card>  
  )
}

export default ExpenseItem
