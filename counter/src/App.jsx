import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0)


  const addval = () => {
    if (counter < 20) {
      setcounter(counter + 1)
      document.body.style.color = "white"
     
    }
    else {
      document.body.style.color = "red"
      
    }
  }
  const removeval = () => {
    if (counter > 0) {
      setcounter(counter - 1)
      document.body.style.color = "white"
    }
    else {
      document.body.style.color = "red"
    }
  }


  return (
    <>
      <h1>counter project</h1>
      <h5>value beetween 0 to 20</h5>
      <h2>counter value :: {counter}</h2>
      <button onClick={addval}>Add value</button>
      <button onClick={removeval}>Remove value</button>
    </>
  )
}

export default App
