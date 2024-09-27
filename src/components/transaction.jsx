import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const positive = transaction.amount > 0;

    return (
        <li className="flex mr-6 relative h-[24px]">
            <div className="flex gap-1 w-full">
                <span className={`w-1 h-full ${positive ? 'bg-green-300' : 'bg-red-400'}`}></span>
                <div className="flex justify-between w-full gap-1">
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis w-full max-w-[224px]">
                        {transaction.text}
                    </span>
                    <span className="font-semibold">
                        {positive ? "+" : "-"} ${Math.abs(transaction.amount)}
                    </span>
                </div>
            </div>

            <button onClick={() => deleteTransaction(transaction.id)}
                    className="w-6 h-6 hover:cursor-pointer absolute -right-6">X
            </button>
        </li>
    )
}