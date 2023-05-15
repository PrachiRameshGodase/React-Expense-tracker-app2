import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from "../UI/Card";
import "./ExpenseItem.css"

const ExpenseItem=(props) =>{

  // const [title,setTitle]=useState(props.title);

  // const [amount,setAmount]=useState(props.amount);

  // const clickHandler=()=>{
  //   setTitle("Updated!");
  //   console.log(title);
  // }
  // const deleteExpense=()=>{ 
  //   setAmount("100")
  //   console.log(amount);
  // }
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      
      {/* <ExpenseDetails amount={amount}  location={props.location} title={title} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpense}>Delete Expense</button> */}
      <ExpenseDetails 
      title={props.title}  
      location={props.location} 
      amount={props.amount}/>
      
    </Card>  
  )
}

export default ExpenseItem
