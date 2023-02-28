import React from 'react';
import Card from './Card';
import Array from './array';

const Games = () => {
  return (
    <div className='Games'>

        {
        Array.map((item, i) => {
            return(
                <Card 
                img={item.img}
                title={item.title}
                desc={item.desc}
                link={item.link}
                />
            );
        })
        }

    </div>
  )
}

export default Games