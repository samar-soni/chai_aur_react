import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("indigo")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <div className='text-left flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white py-3'>
        <div className='flex flex-wrap jusitfy-center gap-3 shadow-lg bg-white px-3 py-2 text-black rounded-3xl mx-3'>
          <button onClick={()=>setColor("red")}
           className=' rounded px-3 py-1'
          style={{backgroundColor:"red"}}
          >Red</button>
          <button onClick={()=>setColor("lightblue")}
           className='rounded px-3 py-1'
          style={{backgroundColor:"lightblue"}}
          >Blue</button>
          <button onClick={()=>setColor("lightgreen")}
            className='bg-green-600 rounded px-3 py-1'
          style={{backgroundColor:"lightgreen"}}
          >Green</button>
          <button onClick={()=>setColor("yellow")}
           className='bg-yellow-600 rounded px-3 py-1'
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button onClick={()=>setColor("pink")}
           className='bg-indigo-600 rounded px-3 py-1'
          style={{backgroundColor:"pink"}}
          >pink</button>
          <button onClick={()=>setColor("magenta")}
            className='bg-purple-600 rounded px-3 py-1'
          style={{backgroundColor:"magenta"}}
          >Magenta</button>
        </div>
        {/* <div className='flex flex-wrap jusitfy-center gap-3 shadow-lg bg-white px-3 py-2 text-black rounded-3xl mx-3'>
          <button className='bg-green-600 rounded px-3 py-1'>Green</button>
        </div>
        <div className='flex flex-wrap jusitfy-center gap-3 shadow-lg bg-white px-3 py-2 text-black rounded-3xl mx-3'>
          <button className='bg-blue-600 rounded px-3 py-1'>Blue</button>
        </div>
        <div className='flex flex-wrap jusitfy-center gap-3 shadow-lg bg-white px-3 py-2 text-black rounded-3xl mx-3'>
          <button className='bg-yellow-600 rounded px-3 py-1'>Yellow</button>
        </div>
         */}
        
        
        
        
        </div>

    </div>
   

    
    
    </>
  )
}

export default App
