import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Roulette from './components/Roulette'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Roulette />
    </>
  )
}

export default App
