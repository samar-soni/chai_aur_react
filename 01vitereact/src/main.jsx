import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
      <div>
        <h1>Custom React !</h1>
      </div>
    )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//        href : 'http://google.com',
//        target : '_blank',
//   },
//   children : 'Click me to visit Google'

// }

const ReactElement =React.createElement(
  'a' ,
  {href :'https://instagram.com', target : '_blank'},
  'click me to visit'
)

const anotherElement = (
  <a href="https://google.com" target='_black'> Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App/>
  
)
