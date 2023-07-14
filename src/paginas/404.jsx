import React from "react";
import { JackInTheBox, Roll, Rotate, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100 shadow-2xl border-2">
      <Zoom cascade={true}>
        <div className="flex justify-center items-center flex-col h-screen ">
          <h1 className="text-6xl sm:text-8xl text-red-500 font-bold ">404</h1>
          <p className="text-lg sm:text-3xl m-10 flex flex-col items-center justify-center text-center ">
            La página que estás buscando no pudo ser encontrada.
          </p>
          <button
            className="p-4 w-32 text-white bg-yellow-400 rounded-full text-xl lg:hover:bg-yellow-[450] lg:hover:scale-110 transition-all duration-300 lg:hover:font-bold"
            onClick={() => (window.location.href = "/")}
          >
            Inicio
          </button>
        </div>
      </Zoom>
    </div>
  );
}

export default Error;
