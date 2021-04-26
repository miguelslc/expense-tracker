import React  ,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalStatus';
import {numberWithCommas} from '../utils/format';

export const Balance =() => {
    const {transactions} = useContext(GlobalContext);
    //Dejo todos los valores en un array
    const amounts = transactions.map(transaction => transaction.amount);
    //Sumo los valores del array y lo dejo en una variable
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2).replace(".", ",");;
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${numberWithCommas(total)}</h1>
        </div>
    )
}

