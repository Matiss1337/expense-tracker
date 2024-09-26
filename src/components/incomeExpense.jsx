import React from 'react'

export const IncomeExpense = () => {
  return (
    <div className='flex bg-red-100'>
      <div>
        <span>Income</span>
        <div className='flex'>
            <span>+$</span>
            <span>400.00</span>           
        </div>
      </div>

      <div>
        <span>Expense</span>
        <div className='flex'>
            <span>-$</span>
            <span>400.00</span>           
        </div>
      </div>
    </div>
  )
}
