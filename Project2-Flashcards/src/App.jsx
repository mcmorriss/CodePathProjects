import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'
import { cardList } from './components/questions';

function App() {
  
  const [count, setCount] = useState(0);
  const [flip, setFlip] = useState(false)


  const handleClick = () => {
    if (count > 3) {
      setCount(0)
    } else {
      setCount(prevCount => prevCount + 1)
    }
    
  }

  const colorChange = () => {
        var div = document.getElementById('card-header');

        switch(cardList[(count > 5 ? 0 : count+1)].difficulty){
            case "easy":
                div.style.backgroundColor = 'green';
                break;
            case "medium":
                div.style.backgroundColor = 'yellow';
                break;
            case "hard":
                div.style.backgroundColor = 'red';
                break;
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
      flip={false}
      />

      <button 
      className='btn' 
      onClick={() => {
        colorChange();
        handleClick();
      }}>Next</button>

    </div>
  )
}

export default App
