import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(counter + 1)
  }
  function handleClick2() {
    setCounter(counter - 1)
  }
  return (
    <>
       <h1>{counter}</h1>
      <button onClick={handleClick}>Oshirish</button>
      <button onClick={handleClick2}>Kamaytirish</button>
    </>
  )
}

export default App
