import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 rounded-xl text-black p-4 mb-6'>this is tailwind css project</h1>
      <Card username="Read more" name="Abcd"/>
      <Card username="view more" name="cdc" />
      <Card username="Explore" />

    </>
  )
}

export default App
