import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.ja");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };


  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })





  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {<ExpenseList items={filteredExpenses}/>}


     

        {/* {filteredExpenses.length === 0 && <p>No expenses item found</p>}
        {filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
        } */}




        {
        /* {filteredExpenses.length === 0 ? <p> No expense item found </p> : 
        (
          filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
        )
        }  
        */
        }

       

        
      </Card>
    </div>
  );
}
export default Expenses;
