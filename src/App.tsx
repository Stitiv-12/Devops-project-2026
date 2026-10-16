import { useState } from 'react'
import './App.css'
import { Tache } from './components/Tache/tache' 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tache name="steven"/>
    </>
  )
}

export default App
