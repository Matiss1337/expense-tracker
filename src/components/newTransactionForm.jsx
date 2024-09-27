import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const NewTransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount // Ensure it's a number
        };

        console.log(newTransaction);
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    };

    return (
        <div className='bg-rose-50 p-4 rounded'>
            <h2 className='text-lg font-bold mb-4'>Add New Transaction</h2>
            <form onSubmit={onSubmit}>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700' htmlFor='name'>
                        Transaction Name
                    </label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.currentTarget.value)}
                        type='text'
                        name='name'
                        placeholder='Enter transaction name...'
                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700' htmlFor='amount'>
                        Transaction Value
                    </label>
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.currentTarget.value)}
                        type='number'
                        name='amount'
                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
                    />
                </div>
                <button
                    type='submit'
                    className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
