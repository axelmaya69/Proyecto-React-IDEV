import React from 'react'

function PreguntasFrec({pregunta,respuesta}) {
  return (
    <div className=' mx-2 my-4  sm:mx-10'>
          <span className=' font-bold text-xl'>{pregunta}</span>
          <p>{respuesta}</p>
          
        </div>
        
  )
}

export default PreguntasFrec;