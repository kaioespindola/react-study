import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    const years = [
        {
            value: '2022',
            label: '2022'
        },
        {
            value: '2021',
            label: '2021'
        },
        {
            value: '2020',
            label: '2020'
        },
        {
            value: '2019',
            label: '2019'
        },
    ]

    const handleChangeYearFilter = (event) => {
        props.onChangeDateFilter(event.target.value);
    }

    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select onChange={handleChangeYearFilter}>
            {years.map((year, id) => {
                return <option key={id} value={year.value}>{year.label}</option>
            })}
            </select>
        </div>
        </div>
    )

};

export default ExpensesFilter;