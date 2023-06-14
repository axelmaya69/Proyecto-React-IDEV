import React from 'react'

function PreguntasFrec({pregunta,respuesta}) {
  return (
    <div className='grid grid-cols-3  mx-2 gap-2 my-4 sm:my-8 sm:mx-20'>
          <span className='bg-orange-400 col-span-1 font-bold text-xl'>{pregunta}</span>
          <p className='bg-orange-400 row-start-2 col-span-3 sm:col-start-2 sm:col-span-2 sm:row-span-1'>{respuesta}</p>
        </div>
        
  )
}

export default PreguntasFrec;