import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {

    const originalList = props.listOfExpenses;

    const [listOfExpenses, updateExpenses] = useState(props.listOfExpenses);

    const changeDateFilterHandler = (year) => {
        const filteredExpenses = originalList.filter(expense => {
            return expense.date.getFullYear().toString() === year;
        })
        updateExpenses(filteredExpenses);
    }

    return(
        <div>
            <Card>
                <ExpenseFilter onChangeDateFilter={changeDateFilterHandler}/>
            </Card>

            <Card>
                {listOfExpenses.map((item, index) => {
                    return(
                        <ExpenseItem
                            key={index}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}>
                        </ExpenseItem>
                    )
                })}
            </Card>
        </div>

    )
}

export default Expenses;