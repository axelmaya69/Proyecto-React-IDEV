import React from 'react'

function AcademiaCard({titulo,parrafo}) {
  return (
    <div>
<h3 className='font-bold text-xl mx-2 pt-2  sm:font-bold lg:text-xl '>{titulo}</h3>
<p className='text-md mx-4 px-4 py-2  '>{parrafo}</p>
    </div>
  )
}

export default AcademiaCard