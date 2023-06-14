 
import React from 'react';

function ArticleRight({ title, image, parrafoUno, parrafoDos }) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-6 gap-2 mb-20 my-10 mt-10 lg:mt-20 lg:my-20 sm:mx-10 md:mx-20">
    <span className='col-span-2 row-span-1 p-2 text-lg font-bold text-center lg:text-3xl lg:font-bold 2xl:text-4xl'>{title}</span>
    <div className='col-span-2 col-start-1 lg:col-start-4 lg:col-span-3 lg:row-start-2 lg:row-span-2 w-full h-auto rounded-md animate-slideInRight pt-10 p-4'><img src={image} alt="IMAGEN" className='h-full w-full' />
    </div>
    <p className='lg:col-start-1 lg:col-span-3 lg:row-start-2 col-span-2 p-4  animate-slideInRight 2xl:text-xl'>{parrafoUno}</p>
    <p className='lg:col-start-1 lg:col-span-3 lg:row-start-3 col-span-2 p-4  animate-slideInRight 2xl:text-xl'>{parrafoDos}</p>
  </div>
  );
}

export default ArticleRight;
