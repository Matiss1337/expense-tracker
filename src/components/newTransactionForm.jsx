import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const NewTransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction, resetAll } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount // Ensure it's a number
        };

        addTransaction(newTransaction);
        resetInputs();
    };

    function resetInputs() {
        setText('');
        setAmount(0);
    }

    function resetEverything() {
        console.log('reseting');
        resetInputs();
        resetAll();
    }

    const isDisabled = text.trim() === '' || amount === 0;

    return (
        <div>
            <h2 className='font-semibold text-[20px] pb-2'>Add New Transaction</h2>
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
                <div className='flex gap-2 w-full'>
                    <button
                        type='submit'
                        className={`bg-blue-500 w-full text-white px-4 py-2 rounded-md ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                        disabled={isDisabled}
                    >
                        Submit
                    </button>
                    <button
                        type='button'
                        onClick={resetEverything}
                        className="bg-red-600 w-full text-white px-4 py-2 rounded-md hover:bg-red-800 cursor-pointer"
                    >
                        Reset
                    </button>
                </div>

            </form>
        </div>
    );
};
