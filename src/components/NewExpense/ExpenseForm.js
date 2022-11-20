import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    
    // const [enteredTitle , setEnteredTitle] = useState('');
    // const [amount , setAmount] = useState('');
    // const [date, setDate] = useState('');


   const [userInput,setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    })

const amountChangeHander = (event) => {
    setUserInput({
        ...userInput,
        enteredAmount:event.target.value
    })
}

const titeChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredTitle:event.target.value
    })
}

const dateChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredDate:event.target.value
    })
}

    return(<form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titeChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHander} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>)
}

export default ExpenseForm;