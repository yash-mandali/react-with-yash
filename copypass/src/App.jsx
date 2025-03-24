import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex bg-gray-500 py-30 justify-center w-70% h-screen rounded'>
        <h2 className='text-white  text-2xl'>copy your password</h2>
          
      </div>
    </>
  )
}

export default App
