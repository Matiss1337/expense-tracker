import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className='flex flex-col mb-3 pb-1 border-b border-black'>
            <div>
                <span>Your balance is:</span>
            </div>
            <div className='flex gap-1 font-semibold text-center text-[18px]'>
                <span>$</span>
                <span>{total}</span>
            </div>
        </div>
    )
}