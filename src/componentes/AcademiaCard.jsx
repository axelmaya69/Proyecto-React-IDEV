import React from 'react'

function AcademiaCard({titulo,parrafo}) {
  return (
    <div>
<h3 className='font-bold text-xl  pt-2  sm:font-bold lg:text-xl '>{titulo}</h3>
<p className='text-md py-2  '>{parrafo}</p>
    </div>
  )
}

export default AcademiaCard