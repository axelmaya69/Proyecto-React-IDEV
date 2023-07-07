import React from 'react'

function UnoderList({items}) {
  return (
    <div  className='mx-4 px-4'>
        <ul>
      {items.map((item, index) => (
        <li  key={index}>{item} </li>
      ))}
    </ul>
    </div>
  )
}

export default UnoderList