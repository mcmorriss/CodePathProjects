import React from 'react'
import './styles/Flashcard.css'

const Flashcard = () => {
  return (
    <div className='flashcard'>

        <div className='card-header'>
            <h3>Difficulty: Easy</h3>
        </div>

        <div className='card-content'>
            Flashcard question
        </div>

        <div className='card-footer'>
            Footer
        </div>
    </div>
  )
}

export default Flashcard