import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import Hame from './components/Hame'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <SignIn/>
    <Hame/>
    </>
  )
}

export default App
