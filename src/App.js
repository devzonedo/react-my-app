import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";



const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'JAVA',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  }
  // ,
  // { id: 'e2', title: 'JS', amount: 799.49, date: new Date(2021, 2, 12) },
  // {
  //   id: 'e3',
  //   title: 'PHP',
  //   amount: 294.67,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   id: 'e4',
  //   title: '.NET',
  //   amount: 450,
  //   date: new Date(2021, 5, 12),
  // },
];





function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

const addExpenseHandler = expense => {
  console.log('In App.js');
  console.log(expense);
  setExpenses((prevExpenses)=>{
    return [expense,...prevExpenses];
  });
}



const updateExpenseHandler = expenses => {
  setExpenses(expenses);
}

  return (

    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses} onUpdateExpense={updateExpenseHandler} />

    </div>
  );
}

export default App;
