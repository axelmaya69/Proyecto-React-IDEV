import React from 'react'

function AcademiaCard({titulo,parrafo}) {
  return (
    <div>
<h3 className='font-bold text-xl mx-2 pt-2 sm:mx-10 sm:font-bold lg:text-xl lg:mx-36'>{titulo}</h3>
<p className='text-md mx-2 py-2 sm:mx-10 lg:mx-36'>{parrafo}</p>
    </div>
  )
}

export default AcademiaCard