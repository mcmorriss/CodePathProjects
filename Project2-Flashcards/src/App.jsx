import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  
  const [count, setCount] = useState(0);


  const handleClick = () => {
    if (count > 3) {
      setCount(0)
    } else {
      setCount(prevCount => prevCount + 1)
    }
  }




  return (
    <div className="App">

      <div className='title'>
        <h1>Computer Hardware</h1>
        <p>
        The purpose of this website is to act as a study aid in 
        learning about the essential components that build a modern personal computer, 
        and the functionality of these components and the purpose they serve.</p>
      </div>
      
      <Flashcard 
      countIndex={count}
      />

      <button className='btn' onClick={handleClick}>Next</button>

      <div>{count}</div>
      
    </div>
  )
}

export default App
