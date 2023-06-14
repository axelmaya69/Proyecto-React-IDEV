import React from 'react'
import { Slide } from 'react-awesome-reveal';

function OrderList({items}) {
  return (
    <div className='py-4'>  
<ol className="list-decimal sm:mx-10 sm:text-xl lg:mx-36 lg:text-2xl ">
      {items.map((item, index) => (
        <li className='mx-6'  key={index}>{item}</li>
      ))}
    </ol> 
    </div>
  );        
}

export default OrderList;