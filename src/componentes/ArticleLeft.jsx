import React from 'react';

function ArticleLeft({ title, image, parrafoUno, parrafoDos }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 mb-20 my-10 mt-10 sm:mt-20 sm:my-20 sm:mx-10 md:mx-20 lg:my-20 lg:py-20">
      <div className="col-span-1 sm:col-span-1   ">
        <h2 className="text-lg font-bold mx-2 text-center sm:col-span-2 mb-5 sm:text-xl mt-4
        lg:text-3xl lg:font-bold 2xl:text-4xl ">{title}</h2>
        <p className="mb-2 mx-2 sm:col-span-1 sm:row-start-1 sm:col-start-2 2xl:text-xl 2xl:mt-20">{parrafoUno}</p>
        <p className="mb-2 mx-2 sm:col-span-1 sm:row-start-2 sm:col-start-2 2xl:text-xl">{parrafoDos}</p>
      </div>
      <div className="col-span-1  sm:row-start-1 sm:col-span-1 sm:col-start-1">
        <img src={image} alt="Image" className="w-full h-auto rounded-md mx-2 lg:mt-10 2xl:mt-20 pt-10" />
      </div>
    </div>
  );
}

export default ArticleLeft;
