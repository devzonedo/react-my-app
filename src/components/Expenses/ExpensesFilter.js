import React, {useState} from "react";
import './ExpensesFilter.css';


const ExpensesFilter = (props) => {

const [enteredYear , setEnteredYear] = useState('');


    const filterChangeHandler = (event) => {
     console.log(event.target.value);
     setEnteredYear(event.target.value);

     const filterData = {
        year: event.target.value
     };

     console.log(filterData);

     props.onFilterExpenses(filterData);
    }


    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={enteredYear} onChange={filterChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;