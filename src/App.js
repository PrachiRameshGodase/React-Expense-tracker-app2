import React, {useState} from "react";
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const DUMMY__EXPENSES=[{
  id:"e1",
  title:"Toilet Paper",
  amount:"94.12",
  date:new Date(2020,7,14),
  location:"Store"
},
{
  id: "e2", 
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "Shooping Mall",
},
{
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Office",
},
{
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "Carpenter",
}]




const App=()=>{
  const [expenses, setExpenses]=useState(DUMMY__EXPENSES)

  
 const addExpenseHandler=(expense)=>{
    // console.log("In App.js");
    // console.log(expense);
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
    
  
  }
  // return React.createElement("div",{},
  // React.createElement("h2",{},"Let's get started!"),React.createElement(Expenses,{items:expenses}))
  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
 