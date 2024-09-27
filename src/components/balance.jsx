import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className='flex flex-col block bg-yellow-200'>
            <div>
                <span>Your balance is:</span>
            </div>
            <div className='flex'>
                <span>$</span>
                <span>{total}</span>
            </div>
        </div>
    )
}