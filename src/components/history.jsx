import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './transaction';

export const History = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className='flex flex-col bg-violet-200'>
            <div>
                <span>History</span>
            </div>
            <ul className='flex flex-col bg-blue-100'>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>

        </div>
    )
}
