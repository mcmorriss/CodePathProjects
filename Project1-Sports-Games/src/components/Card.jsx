import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
        <div className='card__body'>
            <img src={props.img}/>
            <h2 className='card__title'>{props.title}</h2>
            <p className='card__description'>{props.desc}</p>
        </div>
        <button className='card__button'>Highlights</button>
    </div>
  )
}

export default Card