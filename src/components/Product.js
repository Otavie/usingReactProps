import React from 'react';

export default function Product(prop) {
  return (
    <div>
        <div className='oneProduct'>
            <img className='pic' src={prop.image} />

            
        </div>
    </div>
  )
}