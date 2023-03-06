import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello</h1>
      <Flashcard />
      
    </div>
  )
}

export default App
