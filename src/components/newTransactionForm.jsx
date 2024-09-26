import React from 'react'

export const NewTransactionForm = () => {
  return (
    <div className='bg-rose-50 p-4 rounded'>
      <h2 className='text-lg font-bold mb-4'>Add New Transaction</h2>
      <form>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='name'>
            Transaction Name
          </label>
          <input
            type='text'
            name='name'
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='value'>
            Transaction Value
          </label>
          <input
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
