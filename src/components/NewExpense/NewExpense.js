import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){



    const saveExpenseDataHandler = (enteredExpenseData) => {

        console.log('>>saveExpenseDataHandler');
        console.log(Math.random.toString());
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 101)
        };
        props.onAddExpense(expenseData);
    }



    return(<div className="new-expense">
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>)
}

export default NewExpense;