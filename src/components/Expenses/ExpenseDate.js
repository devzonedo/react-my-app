import "./ExpenseDate.css";

function ExpenseDate(props) {


  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //console.log(props.date.getFullYear());
  //var dt = new Date(props.date);
  const year = props.date.getFullYear();

  console.log("-Date Obj------------------");
  console.log('props.date:'+props.date);
  console.log(month);
  console.log(day);
  console.log(year);
  console.log("-------------------");

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__yar">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
