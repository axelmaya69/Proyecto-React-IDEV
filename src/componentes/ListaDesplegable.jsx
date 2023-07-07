import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const ListaDesplegable = ({ titulo, sublistas }) => {
  const [mostrarElementos, setMostrarElementos] = useState(false);

  const handleToggle = () => {
    setMostrarElementos(!mostrarElementos);
  };

  return (
<div className='bg-yellow-400 py-2 px-2 rounded text-left '>
  <button onClick={handleToggle} className='text-back text-lg font-medium w-full text-left'>{titulo}</button>
  
  <Transition
    show={mostrarElementos}
    enter="transition-all duration-700 ease-in-out"
    enterFrom="opacity-0 transform translate-x-8"
    enterTo="opacity-100 transform translate-x-0"
    leave="transition-all duration-500 ease-in-out"
    leaveFrom="opacity-100 transform translate-x-8"
    leaveTo="opacity-0 transform -translate-x-8"
  >
    {mostrarElementos && (
      <ul className='w-full flex flex-col justify-start'>
        {sublistas.map((sublista, index) => (
          <li key={index} className='rounded py-2 px-1 hover:bg-yellow-500 italic flex w-full'>
            <Link to={`/${sublista}`} className='w-full'>{sublista}</Link>
          </li>
        ))}
      </ul>
    )}
  </Transition>
</div>


    // <div className=' bg-yellow-400 py-2 px-2 rounded '>
    //   <button onClick={handleToggle} className='text-back text-lg font-medium w-full'>{titulo}</button>
    //   <Transition
    //       show={mostrarElementos}
    //       enter="transition-all duration-700 ease-in-out"
    //       enterFrom="opacity-0 transform translate-x-8"
    //       enterTo="opacity-100 transform translate-x-0"
    //       leave="transition-all duration-500 ease-in-out"
    //       leaveFrom="opacity-100 transform translate-x-8"
    //       leaveTo="opacity-0 transform -translate-x-8"
    //     >
    //   {mostrarElementos && (
      
    //     <ul className=' flex w-full flex-col'>
    //       {sublistas.map((sublista, index) => (
    //         <li key={index} className='rounded py-2 px-1 hover:bg-yellow-500 italic flex w-full flex-col'>
    //           <Link to={`/${sublista}`} className='w-full flex-col'>{sublista}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    //   </Transition>
    // </div>
  );
};
  
export default ListaDesplegable;
