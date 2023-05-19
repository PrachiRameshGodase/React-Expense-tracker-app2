import React, {useState} from 'react';
import "./ExpenseForm.css";


const ExpenseForm=(props)=> {
// document.getElementById("item").addEventListener("click",(event)=>{
//   console.log(event.target.value);
// })

const [enteredTitle, setEnteredTitle]=useState("");
const [enteredLocation, setEnteredLocation]=useState("");
const [enteredAmount, setEnteredAmount]=useState("");
const [enteredDate, setEnteredDate]=useState("");
const [isFormCanceled, setIsFormCanceled] = useState(false);


const titleChangeHandler=(event)=>{
    setEnteredTitle(event.target.value);
} 

const locationChangeHandler=(event)=>{
    setEnteredLocation(event.target.value);
}

const amountChangeHandler=(event)=>{
    setEnteredAmount(event.target.value);
}

const dateChangeHandler=(event)=>{
    setEnteredDate(event.target.value);
}
    
const submitHandler=(event)=>{
    event.preventDefault();

    const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate),
        location:enteredLocation
    };
    // console.log(expenseData);
    props.onSaveExpanseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredLocation("");

}
const cancelHandler = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredLocation('')
    setIsFormCanceled(true);
  };

  if (isFormCanceled) {
    return (
      <div>
        <button onClick={() => setIsFormCanceled(false)} className='new-expense__actions'>Add new expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                type='text' 
                value={enteredTitle} 
                onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Location</label>
                <input 
                type='text' 
                value={enteredLocation} 
                onChange={locationChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                type='number'
                min="0.01" 
                step="0.01" 
                value={enteredAmount}
                onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                type='date' 
                min="2018-01-01" 
                max="2023-12-31" 
                value={enteredDate}
                onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm;