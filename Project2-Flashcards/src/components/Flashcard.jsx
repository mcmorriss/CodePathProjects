import React from 'react'
import './styles/Flashcard.css'
import { cardList } from './questions'
import { useState } from 'react'

const Flashcard = (props) => {

    const [flip, setFlip] = useState(false);

    const handleClick = () => {
        (!flip) ? setFlip(true) : setFlip(false);
    }

  
    return (
        <div className='flashcard' onClick={handleClick}>

        <div className='card-header'>
            <h3>Difficulty: {cardList[props.countIndex].difficulty}</h3>
        </div>

        <div className='card-content'>
            {flip 
            ? <h3>Answer: {cardList[props.countIndex].answer}</h3>
            : cardList[props.countIndex].question
            }
        </div>

        <div className='card-footer'>
            <h3>Card {props.countIndex + 1} / 10</h3>
        </div>

        </div>
  )
}

export default Flashcard