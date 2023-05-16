import React, {useState} from 'react'
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import ExpensesList from './ExpensesList';
import "./Expenses.css"



const Expenses=(props) =>{
const [filteredYear,setFilteredYear]=useState("2020");

const filteresChangeHandler=(selectedYear)=>{
  setFilteredYear(selectedYear)
};

const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});




// let expenseContent=<p>No expense found.</p>
// if(filteredExpenses.length >0){
//   expenseContent=filteredExpenses.map((expense)=>(
//     <ExpenseItem 
//     key={expense.id}
//     title={expense.title}
//     amount={expense.amount} 
//     date={expense.date} 
//     location={expense.location}/>
  
//   ) 
// )
// }
  
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteresChangeHandler}/>
 
      {filteredExpenses.length===1 && <h2 className='expenses-list__fallback'>Only single Expense here Please add more...</h2>} 
      <ExpensesList items={filteredExpenses}/>
    
    </Card>
  )
}

export default Expenses
