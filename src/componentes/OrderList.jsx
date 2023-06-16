import React from 'react'
import { Slide } from 'react-awesome-reveal';

function OrderList({items}) {
  return (
    <div className='py-4'>  
    <Slide direction='right'>
<ol className="list-decimal lg:mx-36 ">
      {items.map((item, index) => (
        <li className='mx-6 py-2'  key={index}>{item}</li>
      ))}
    </ol> 
    </Slide>
    </div>
  );        
}

export default OrderList;