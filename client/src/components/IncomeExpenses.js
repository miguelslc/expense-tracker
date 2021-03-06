import React  ,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalStatus';
import {numberWithCommas} from '../utils/format';

export  const IncomeExpenses  = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    //Entradas
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
    .replace(".", ",");

    //Salidas
    const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2)
    .replace(".", ",");

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${numberWithCommas(expense)}</p>
            </div>
        </div>
    )
}
