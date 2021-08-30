import { useState, useEffect } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

import Board from './components/UI/Board';
import classNames from "classnames";

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
  };

  // 15 Game Puzzle

  const checkNumber = (number) => {
    return number === 0 ? 'empty' : 'tile';
  }

  const startArray = [1, 2, 0, 4, 5, 6, 3, 8, 9, 10, 7, 12, 13, 14, 11, 15];
  const endArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

  const [currentArray, setNewArray] = useState(startArray);

  useEffect(() => {
    checkIfArraysAreEqual();
  });

  // Logic from the game

  const getCurrentIndex = (nuumber) => {
    return currentArray.findIndex(item => item === nuumber);
  }

  const swapNumbersInArray = (array, from, to) => {
    let newArray = [...array];
    [newArray[from], newArray[to]] = [newArray[to], newArray[from]];
    return newArray;
  }

  const handleClickedNumber = (clickedNumber) => {
    const zeroPosition = getCurrentIndex(0);
    const clickedPosition = getCurrentIndex(clickedNumber);
    const newArray = swapNumbersInArray(currentArray, zeroPosition, clickedPosition);
    setNewArray(newArray);
  }

  const checkIfArraysAreEqual = () => {
    if(JSON.stringify(currentArray) == JSON.stringify(endArray)) {
      alert('TA IGUAL');
    }
  }

  return (
    <div className="container">
      <Board>
        {currentArray.map((number, key) => {
          return (
            <div
              key={key}
              className={classNames(checkNumber(number))}
              onClick={() => handleClickedNumber(number)}>{number}</div>
          );
        })}
      </Board>
      {/* <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
        listOfExpenses={expensesList}>
      </Expenses> */}
    </div>
  );
}

export default App;
