import React from 'react'

export const Balance = () => {
  return (
    <div className='flex flex-col block bg-yellow-200'>
        <div>
            <span>Your balance is:</span>
        </div>
        <div className='flex'>
            <span>$</span>
            <span id='balance'>400.00</span>           
        </div>
    </div>
  )
}