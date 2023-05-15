import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from "./Card";
import "./Expenses.css"

function Expenses(props) {
  return (
    <Card className='expenses'>
      {props.items.map((expense)=>(
        <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount} 
        date={expense.date} 
        location={expense.location}/>
      
      ))}
    </Card>
  )
}

export default Expenses
