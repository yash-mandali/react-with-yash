import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setnumberAllowed] = useState(false)
  const [charallowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  const passref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberallowed) str += "0123456789"
    if (charallowed) str += "!@$#%^&*+=-~"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberallowed, charallowed, setPassword])

  const copytoclip = useCallback(() => {
    passref.current?.select();     // select text for copy
    // passref.current?.setSelectionRange(0, 4)  //range for copy password
    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(() => { passwordgenerator() }, [length, numberallowed, charallowed, passwordgenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center  my-7 text-3xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input
            type="text"
            className=' bg-amber-50 text-black text-1xl outline-none w-full py-1 px-3'
            value={password}
            placeholder='password'
            ref={passref}
            readOnly
          />
          <button className='outline-none bg-blue-700 shadow-2xl text-white px-5 py-0.5' onClick={copytoclip}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              className='cursor-pointer'
              onChange={() => { setnumberAllowed((prev) => !prev) }}
            />
            <label htmlFor="numberInput"> Numbers</label>

          </div>
          <input
            type="checkbox"
            defaultChecked={charallowed}
            id="charInput"
            className='cursor-pointer'
            onChange={() => { setCharAllowed((prev) => !prev) }}
          />
          <label htmlFor="charInput">symbols</label>
        </div>
      </div>
    </>
  )
}

export default App

