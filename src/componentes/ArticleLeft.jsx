import React from "react";

function ArticleLeft({ title, image, parrafoUno, parrafoDos }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 mx-2 lg:mx-10 md:mx-20 lg:my-10  lg:pb-20 lg:mb-20 border sm:border-2 rounded p-2 sm:p-4 shadow-2xl min-h-screen bg-white">
      <div className="col-span-1 lg:col-span-1 lg:flex lg:items-center lg:justify-center flex-col">
        <h2
          className="text-lg font-bold mx-2 text-center lg:col-span-2 mb-5  mt-4
        lg:text-3xl lg:font-bold 2xl:text-4xl border-b border-orange-400 pb-3 "
        >
          {title}
        </h2>
        <p className="mb-2 mx-2 lg:col-span-1 lg:row-start-1 lg:col-start-2 2xl:text-xl 2xl:mt-20">
          {parrafoUno}
        </p>
        <p className="mb-2 mx-2 lg:col-span-1 lg:row-start-2 lg:col-start-2 2xl:text-xl">
          {parrafoDos}
        </p>
      </div>
      <div className="col-span-1  lg:row-start-1 lg:col-span-1 mx-2 lg:col-start-1 lg:flex lg:items-center lg:justify-center">
        <img
          src={image}
          alt="Image"
          className="w-full h-auto lg:mt-10 2xl:mt-20 xl:mt-10"
        />
      </div>
    </div>
  );
}

export default ArticleLeft;
