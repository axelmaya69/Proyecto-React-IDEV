import React from 'react'
import { Fade } from "react-awesome-reveal";

function FadevComp({imagen,titulo,p1,p2,p3,p4}) {
  return (
    <Fade >
    <div className='grid grid-cols-1 sm:grid-cols-3 sm:mt-24  mx-2 '>
        <div className="flex justify-center mx-4 items-center sm:row-start-1 sm:col-span-1 sm:row-span-3 order-2">
        <div className="w-80 h-auto my-3">
          <img src={imagen} alt='imagen'className='object-cover w-full h-full'/>
        </div>
      </div>
      <span className='sm:col-start-2 sm:col-span-2 sm:row-span-1 text-center text-xl font-medium mt-4 order-1 lg:text-3xl lg:font-bold'>{titulo}</span>
      
      <p className='sm:col-span-2 order-3 my-2 lg:text-xl'>{p1}</p>
      <p className='sm:col-span-2 order-4 my-2 lg:text-xl'>{p2}</p>
      <p className='sm:col-start-2 sm:col-span-2 order-5 my-2 lg:text-xl'>{p3}</p>
      <p className='sm:col-start-2 sm:col-span-2 order-6 my-2 lg:text-xl'>{p4}</p>
        
        {/* <div className='bg-orange-400 row-start-2 col-span-1 row-span-3'>IMAGEN</div>
        <div className='bg-orange-400 col-start-2 col-span-2 row-span-1'>TITULO</div>
        <div className='bg-orange-400 col-span-2 row-span-1'>P1</div>
        <div className='bg-orange-400 col-span-2 row-span-1'>P2</div>
        <div className='bg-orange-400 col-start-2 col-span-2 row-span-1'>P3</div>
        <div className='bg-orange-400 col-start-2 col-span-2 row-span-1'>P4</div> */}
 
    </div> 
    </Fade>
  )
}

export default FadevComp;