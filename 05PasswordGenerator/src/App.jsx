import { useState , useCallback,useEffect,useRef} from 'react';
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("Samar");

  //Ref Hook
  const passwordRef = useRef("null")

  const passwordGenerator = useCallback(passwordGenerator => {
     let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  
    if(numberAllowed) str += "1234567890";
    if(charAllowed) str += "!@#$%^&*";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordtToClipboard = useCallback(()=>{
    passwordRef.current?.select()

    window.navigator.clipboard.writeText(password )
  },[password])

  useEffect(()=> {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])



  return (
    <>
      <h1
        className='text-center text-white font-semibold '
        >Password Generator</h1>
      <div className='shoadow-md rounded-lg py-2 my-8 text-white bg-gray-600 px-7' > 
        
      <input 
      value ={password}
      className='outline-none w-80 py-1 my-3 px-3 text-black'
      placeholder='password'
      readOnly 
      type="text" 
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordtToClipboard}
      className='text-white bg-blue-600 font-semibold px-3 py-1.5 rounded'
      >Copy</button>
      
      <div className='flex'>
        <div>
          <input type="range" 
          min={8}
          max={20}
          value={length}
          className='cursor-pointer text-white'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label
          className='text-white px-2'
          >length : {length}</label>
        </div>
        <div
        className='flex gap-3'
        >

        
      <div className='flex-item-center gap-x-5 px-3'>
        <input type="checkbox" name="" id="CharacterInput" 
        onChange={()=>{
          setNumberAllowed((prev) => (!prev))
        }}
        />
        <label htmlFor="" 
        className='gap-x-2 px-1'
        >Number</label> 
      </div>
      <div className='flex-item-center gap-x-5'>
        <input type="checkbox" name="" id="" 
        onChange={()=>{
          setCharAllowed((prev) => (!prev))
        }}
        />
        <label htmlFor="" 
        className='gap-x-2 px-1'
        >Character</label> 
      </div>
      </div>

      </div>
      </div>
      
      
      


    </>
  )
}

export default App
