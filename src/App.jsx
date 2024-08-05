import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <SignIn/>
    </>
  )
}

export default App
