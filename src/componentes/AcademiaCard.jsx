import React from 'react'

function AcademiaCard({titulo,parrafo}) {
  return (
    <div>
<h3 className='font-bold text-xl mx-2 pt-2 sm:mx-10 sm:text-2xl sm:font-bold lg:text-2xl lg:mx-36'>{titulo}</h3>
<p className='text-md mx-2 py-2 sm:mx-10 sm:text-xl lg:text-2xl lg:mx-36'>{parrafo}</p>
    </div>
  )
}

export default AcademiaCard