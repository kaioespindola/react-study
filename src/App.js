import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const App = () => {

  const startExpenses = [
    {
      title: 'RTX 3060',
      amount: 4000.00,
      date: new Date(2021, 2, 28)
    },
    {
      title: 'RTX 3060 ti',
      amount: 4000.00,
      date: new Date(2020, 2, 28)
    },
    {
      title: 'RTX 3070',
      amount: 6000.00,
      date: new Date(2019, 2, 28)
    },
    {
      title: 'RTX 3080',
      amount: 9000.00,
      date: new Date(2019, 2, 28)
    }
  ];

  const [expensesList, updateExpenses] = useState(startExpenses);

  const addExpenseHandler = (expense) => {
    updateExpenses((prevState) => {
      return [
        ...prevState,
        {
          title: expense.enteredTitle,
          amount: expense.enteredAmount,
          date: new Date(2021, 2, 28)
        }
      ]
    })
  }

  const startArray = [1, 2, 0, 4, 5, 6, 3, 8, 9, 10, 7, 12, 13, 14, 11, 15];

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
        listOfExpenses={expensesList}>
      </Expenses>
    </div>
  );
}

export default App;
