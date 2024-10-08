import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    const income = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)
        .toFixed(2);

    const expense = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0)
        .toFixed(2);

    return (
        <div className='flex mb-3'>
            <div className='flex flex-col w-1/2 text-center pb-1 border-b-2 border-green-300'>
                <span>Income</span>
                <span>${income}</span>
            </div>

            <div className='flex flex-col w-1/2 text-center pb-1 border-b-2 border-red-500'>
                <span>Expense</span>
                <span>${expense}</span>
            </div>
        </div>
    );
}
