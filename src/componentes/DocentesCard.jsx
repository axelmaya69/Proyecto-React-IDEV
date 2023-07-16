import React from "react";

// ESTE COMPONENTE SIRVE PARA MOSTRAR INFORMACION DE LOS DOCENTES
// RECIBE TAMBIEN DIVERSAS PROPIEDADES
function DocentesCard({ nombre, imagen, grado, texto, enlace, red }) {
  return (
    <div className=" flex bg-neutral-200 w-auto h-auto pb-5 flex-wrap sm:flex-row sm:grid-cols-3 m-2 rounded max-w-xl sm:pt-9 ">
      <div className="grid grid-cols-3 grid-rows-2 gap-1 ">
        <div className="flex justify-center items-center col-span-1 row-span-2 sm:col-span-3 sm:row-span-2">
          <div className="overflow-hidden w-20 h-20 my-3 sm:rounded-none sm:w-80 sm:h-auto">
            <img
              src={imagen}
              alt="imagen_docente"
              className="object-cover w-full h-full flex"
            />
          </div>
        </div>
        <span className="font-medium text-md mt-3 col-span-2 row-span-1 mr-2 sm:col-start-1 sm:col-span-3 text-center ">
          {nombre}
        </span>
        <span className="font-bold text-md text-slate-400 col-start-2 col-span-2 row-span-1 sm:col-start-1 sm:col-span-3 text-center sm:text-center ml-4">
          {grado}
        </span>
        <p className="col-span-3 row-span-1 mx-2 sm:col-start-1 sm:p-4 ">
          {texto}
        </p>
        <a
          href={enlace}
          target="_blank"
          className="col-start-2 col-span-1 row-span-1 bg-blue-600 p-2 text-white rounded-full text-center hover:bg-blue-800"
        >
          {red}
        </a>
      </div>
    </div>
  );
}
export default DocentesCard;
