import React from "react";
import { Fade } from "react-awesome-reveal";

function FadevComp({ imagen, titulo, p1, p2, p3, p4 }) {
  return (
    <Fade>
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:mt-24 border sm:border-2 rounded shadow-xl lg:min-h-screen mx-2 mb-10 my-4 sm:mx-20 lg:mx-10">
        <div className="col-span-4 lg:col-span-1 flex justify-center">
          <div className="flex flex-col justify-center items-center p-4 ">
            <div className="flex flex-col justify-center items-center p-4">
              <img src={imagen} alt="imagen" className="min-w-full mx-4" />
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-3 lg:col-start-2 py-10">
          <div className="flex flex-col justify-center items-center font-bold lg:text-5xl py-10 text-2xl sm:text-4xl">
            <h1 className="border-b-2 pb-1 border-yellow-300 shadow-2xl">
              {titulo}
            </h1>
          </div>
          <div className="py-2 text-sm sm:text-lg mx-2 px-2 sm:mx-10 lg:px-20">
            <p>{p1}</p>
          </div>
          <div className="py-2 text-sm sm:text-lg mx-2 px-2 sm:mx-10 lg:px-20">
            <p>{p2}</p>
          </div>
          <div className="py-2 text-sm sm:text-lg mx-2 px-2 sm:mx-10  lg:px-20">
            <p>{p3}</p>
          </div>
          <div className="py-2 text-sm sm:text-lg mx-2 px-2 sm:mx-10  lg:px-20">
            <p>{p4}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default FadevComp;
