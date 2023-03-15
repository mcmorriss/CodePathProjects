import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'
import { cardList } from './components/questions';

function App() {
  
  const [count, setCount] = useState(0);
  const [ans, setAns] = useState(null)
  const [flip, setFlip] = useState(false)

  const getAns = (val) => {
    setAns(val.target.value)
    console.log(ans)
  }


  const handleClick = (num) => {
    if (count > 3 && num == 1) {
      setCount(0)
    }
    else if (num == -1 && count == 0){
      setCount(cardList.length - 1)

    } else {
      setCount(prevCount => prevCount + num)
    }
    colorChange();
  }

  const checkAnswer = (event) => {
    event.preventDefault()
    var check = ans.toLowerCase()
    var border = document.getElementById('box')
    var correctAns = cardList[count].answer.toLowerCase()
    console.log(check == correctAns)
    switch(check == correctAns){
      case true:
        border.style.backgroundColor = 'green';
        console.log('this made it')
        break;
      case false:
        border.style.backgroundColor = 'red';
        break;
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

      <div className='checking'>
        <form>
        <label>
          Check Answer:
          <input type='text' name='ans' className='inputBox' id='box' onChange={getAns}></input>
        </label>
        <button onClick={checkAnswer}>Check Answer</button>
      </form>
      </div>


      <div className='buttons'>
        <button 
      className='btn' 
      onClick={() => {
        handleClick(-1);
      }}>Previous</button>

      <button 
      className='btn' 
      onClick={() => {
        handleClick(1);
      }}>Next</button>
      </div>



    </div>
  )
}

export default App