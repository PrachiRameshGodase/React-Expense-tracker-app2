import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from "../UI/Card";
import "./ExpenseItem.css"

const ExpenseItem=(props) =>{

  const clickHandler=()=>{
    console.log("clicked...");
  }
  const deleteExpense=()=>{ 
    console.log("deleteExpense");
  }
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      
      <ExpenseDetails amount={props.amount}  location={props.location} title={props.title} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpense}>Delete Expense</button>
      
    </Card>  
  )
}

export default ExpenseItem
