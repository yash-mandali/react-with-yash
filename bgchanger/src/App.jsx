import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("orange")

  return (
    <>
      <div className='w-70%  text-4xl content-center rounded-2xl h-50  border shadow-2xl duration-800' style={{ backgroundColor: color }}>
         This is {color} color.
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-9 rounded px-1 py-2'>
            <button onClick={() => setColor("red")}className='outline-1 text-white px-4 py-4 rounded shadow-lg' style={{backgroundColor:"red"}}>red</button>
            <button onClick={() => setColor("green")}className='outline-1 text-white px-4 py-1 rounded shadow-lg' style={{backgroundColor:"green"}}>green</button>
            <button onClick={() => setColor("blue")}className='outline-1 text-white px-4 py-1 rounded shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={() => setColor("cyan")}className='outline-1 text-white px-4 py-1 rounded shadow-lg' style={{backgroundColor:"cyan"}}>cyan</button>
            <button onClick={() => setColor("black")}className='outline-1 text-white px-4 py-1 rounded shadow-lg' style={{backgroundColor:"black"}}>black</button>
            <button onClick={() => setColor("olive")}className='outline-1 text-white px-4 py-1 rounded shadow-lg' style={{backgroundColor:"olive"}}>olive</button>
            <button onClick={() =>  setColor("purple")}className='outline-1 text-white px-4 py-1 rounded shadow-lg' style={{backgroundColor:"purple"}}>purple</button>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
