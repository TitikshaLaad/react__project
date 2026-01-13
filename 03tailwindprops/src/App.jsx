import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const user = {
    username: "mainak",
    channel : "Chai aur Code"

  }

  return (
    <>
     <h1 className='bg-green-400  text-black p-6 rounded-xl' >Tailwind test</h1>
     
    <Card channel= "Chai aur Code" someobj= {user}/>
    <Card channel= "Biscuit aur Code" someobj= {user}/>
    </>
  )
}

export default App
