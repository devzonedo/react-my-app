import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    
    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

//    const [userInput,setUserInput] = useState({
//         enteredTitle:'',
//         enteredAmount:'',
//         enteredDate:''
//     })


const amountChangeHander = (event) => {
    
    setEnteredAmount(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })

    // //use this approch depends state on previous state
    // setUserInput((prevState)=> {
    //     return{...prevState,enteredAmount:event.target.value}
    // })
    //console.log(userInput);
}

const titeChangeHandler = (event) => {
    
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })
}

const dateChangeHandler = (event) => {
    //const d = new Date(2021, 5, 12);
    console.log(event.target.value);
    // setEnteredDate(d);
    setEnteredDate(new Date(event.target.value));

    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    // })
}



const submitHandler = (event) => {
    event.preventDefault(); // to avoid page reload
    //const expenseData = userInput;

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: enteredDate
    }
   
    console.log(expenseData);


    props.onSaveExpenseData(expenseData);

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
    props.onHideButton(false);
}




const expenseHideHandler = () => {
    props.onHideButton(false)
}

    return(<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                type="text" 
                value={enteredTitle} 
                onChange={titeChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHander} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
            <div className='new-expense__actions'>
                <button onClick={expenseHideHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>)
}

export default ExpenseForm;