import { useState } from 'react'
import './App.css'

function App() {
  let  [counter,setCounter] =  useState(15)

  const addValue = (onClick)=>{
    if(counter < 20)
    setCounter(counter+1)
  }
  const removeValue = (onclick) => {
    if(counter > 0)
    setCounter(counter - 1);
  }
  return (
    <>
    
      <h1>Chai Aur React</h1>
      <h3>Counter Value : {counter}</h3>
      <button
      onClick={addValue}
      >Increase Value </button>
      <br/>
      <button
      onClick={removeValue}
      >Decrease Value</button>
      
    </>
  )
}

export default App
