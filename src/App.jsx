import { useState } from 'react'
import { Header } from './components/header'
import { Balance } from './components/balance'
import { IncomeExpense } from './components/incomeExpense'
import { History } from './components/history'
import { NewTransactionForm } from './components/newTransactionForm'

import { GlobalProvider } from './context/GlobalState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <div className='flex justify-center items-center h-[100vh]'>
        <div className='border border-gray-950 rounded-md p-4'>
          <Header/>
          <Balance/>
          <IncomeExpense/>
          <History/>
          <NewTransactionForm/>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
