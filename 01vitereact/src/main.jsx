import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
function MyApp(){
  return (<h1>Hello from MyAPP</h1>)
}

// const reactElement = {
//     type: 'a',
//     props:{
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Go to Google'
// }

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',target: '_blank'
  },
  'Go to Google'
)
const anotherElement = (
<a href="https://www.google.com" target="_blank">
Go to Google</a>)


createRoot(document.getElementById('root')).render(

  ReactElement
  
)
