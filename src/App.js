
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses=[{
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

  return (
    <div>
      <h2>Let's get started</h2>
      
      {expenses.map((expense)=>(
        <ExpenseItem title={expense.title}
         amount={expense.amount} 
         date={expense.date} 
         location={expense.location}/>
      
      ))}
    </div>
  );
}

export default App;
