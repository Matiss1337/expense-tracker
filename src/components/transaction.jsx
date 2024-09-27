import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const positive = transaction.amount > 0;

    return (
        <li className={`flex justify-between ${positive ? 'bg-green-300' : 'bg-red-400'}`}>
            <span>
                {transaction.text} {positive ? "+" : "-"}${Math.abs(transaction.amount)}
            </span>

            <button onClick={() => deleteTransaction(transaction.id)}
                className="bg-red-500 color-white w-4 h-4 rounded-md cursor-pointer">X</button>
        </li>
    )
}