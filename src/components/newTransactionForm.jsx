import React, {useState} from 'react'

export const NewTransactionForm = () => {
const [name, setName] = useState('');
const [value, setValue] = useState(0);

  return (
    <div className='bg-rose-50 p-4 rounded'>
      <h2 className='text-lg font-bold mb-4'>Add New Transaction</h2>
      <span>{name} {value}</span>
      <form>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='name'>
            Transaction Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            type='text'
            name='name'
            placeholder='Enter transaction name...'
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='value'>
            Transaction Value
          </label>
          <input
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            type='number'
            name='value'
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
  )
}
