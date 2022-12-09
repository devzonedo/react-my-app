import React from "react";
import './ExpenseAdd.css';

const ExpenseAdd = (props) => {


    const changeBtnStatusHandler = () =>{
        props.onShowAddExpenseHandler(true);
    }


return(
    <div className="new-expense">
     <div className='new-expense__actions'>
                <button type='submit' onClick={changeBtnStatusHandler}>Add Expense</button>
            </div>
    </div>
)
}

export default ExpenseAdd;