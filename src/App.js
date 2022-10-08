// import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 92.12,
      date: new Date(2021, 2, 21),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 294.99,
      date: new Date(2022, 5, 24),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 55.9,
      date: new Date(2021, 8, 21),
    }
  ];

  return (
    <div>
      <h2>This is a home page.</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
