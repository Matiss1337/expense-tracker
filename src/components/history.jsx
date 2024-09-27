import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './transaction';

export const History = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className='flex flex-col mb-3 pb-2 border-b border-black'>
            <div>
                <span className="font-semibold text-[20px] pb-1 block">History</span>
            </div>
            {transactions.length === 0 ? (
                <div className="text-gray-500 italic">
                    No transactions available. Add your first transaction.
                </div>
            ) : (
                <ul className='flex flex-col gap-1'>
                    {transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </ul>
            )}
        </div>
    );
};