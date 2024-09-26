import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div>
        <h1>Vite + React</h1>
        <div className="card">
          <button className='cursor-pointer' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
