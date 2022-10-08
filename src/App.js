// import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

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
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
