import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(5)
   
  // let counter = 5;

  let addValue = () => {
    if(count < 20){
      setCount(count + 1)
    }
  }

  let removeValue = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>Here is a counter</h1>
      <p>Counter : {count}</p>
      <button onClick={addValue}>Increase counter</button><br/>
      <button onClick={removeValue}>Decrease counter</button>
    </>
  )
}

export default App
