import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(counter + 1)
  }
  return (
    <>
    <div className='mainPage'>
      <div className='todoForm'> 
       <form>
        <input className='Todo-input' placeholder='Enter your tasks...' type="text" name="todo"/>
        <button>Add</button>
       </form>
      </div>
    </div>
    </>
  )
}

export default App
