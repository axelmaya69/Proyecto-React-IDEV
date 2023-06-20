 
import React from 'react';

function ArticleRight({ title, image, parrafoUno, parrafoDos }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 mb-20 my-10 mt-10 lg:mt-20   mx-2 lg:mx-10 md:mx-20 lg:my-20 lg:py-20'>
      <h2 className='text-lg font-bold mx-2 text-center  mb-5  mt-4
        lg:text-3xl lg:font-bold 2xl:text-4xl '>{title}</h2>
      <div className='mx-2 col-span-1 lg:col-start-2 lg:col-span-1 lg:row-span-3 w-full h-auto '>
        <img src={image} alt="imagen" className="w-full h-full lg:mt-10 2xl:mt-20 xl:mt-10" />
      </div>
      <p className='mx-2 mb-2 lg:col-span-1 col-start-1 2xl:text-xl 2xl:mt-20'>{parrafoUno}</p>
      <p className='mx-2 lg:col-span-1 col-start-1'>{parrafoDos}</p>
    </div>
  //   <div className="grid grid-cols-1 grid-rows-1 mx-2   lg:grid-cols-6 gap-2 mb-20 my-10 mt-10 lg:mt-20 lg:my-20 lg:mx-20">
  //   <span className='col-span-2 row-span-1 p-2 text-lg font-bold text-center lg:text-3xl lg:font-bold 2xl:text-4xl'>{title}</span>
  //   <div className='col-span-2 col-start-1 lg:col-start-4 lg:col-span-3 lg:row-start-2 lg:row-span-2 w-full h-auto rounded-md animate-slideInRight pt-10 p-4'><img src={image} alt="IMAGEN" className='h-full w-full' />
  //   </div>
  //   <p className='lg:col-start-1 lg:col-span-3 lg:row-start-2 col-span-2 p-4  animate-slideInRight 2xl:text-xl'>{parrafoUno}</p>
  //   <p className='lg:col-start-1 lg:col-span-3 lg:row-start-3 col-span-2 p-4  animate-slideInRight 2xl:text-xl'>{parrafoDos}</p>
  // </div>
  );
}

export default ArticleRight;
