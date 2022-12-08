import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.ja");
    console.log(selectedYear);
    setFilteredYear(selectedYear);

    //year found iterate props.items
    const filteredList =  props.items.filter(expense => expense.title === 'JAVA');
    console.log(filteredList)
    props.onUpdateExpense(filteredList);


  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        
      </Card>
    </div>
  );
}
export default Expenses;
