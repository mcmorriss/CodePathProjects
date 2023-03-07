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

        <div className='card-header' difficulty={cardList[props.countIndex].difficulty} id='card-header'>
            <h3>Difficulty: {cardList[props.countIndex].difficulty}</h3>
        </div>

        <div className='card-content'>
            {flip 
            ? <h3>Answer: {cardList[props.countIndex].answer}</h3>
            : <p><b>Question: </b>{cardList[props.countIndex].question}</p>
            }
        </div>

        <div className='card-footer'>
            {flip 
            ? <h3>{cardList.length - (props.countIndex + 1)} Card{(cardList.length - (props.countIndex + 1) != 1) ? 's' : ''} Left</h3>
            : <h3>Card {props.countIndex + 1} / {cardList.length}</h3>
            }
        </div>

        </div>
  )
}

export default Flashcard