import React from "react";
import Slider from "./Slider";
// ESTE COMPONENTE MUESTRA INFORMACION DEL FADEV DEL 2021,

function ElementosFadev({ invitados, programa, conferencias, talleres }) {
  return (
    <div className="grid grid-cols-7 grid-rows-8 gap-2">
      <div className="col-span-5 col-start-2 row-span-2 md:col-span-1 md:row-span-8 text-xl text-center md:sticky md:h-32 top-16 mb-96 md:z-10">
        <h1 className=" md:sticky top-10 bg-blue-400 min-w-full min-h-full flex items-center justify-center">
          <button> Invitados </button>
        </h1>
        <h2 className="py-2 md:sticky top-28 bg-red-400 min-w-full min-h-full flex items-center justify-center">
          Programa
        </h2>
        <h3 className="py-2 md:sticky top-36 bg-orange-400 min-w-full min-h-full flex items-center justify-center">
          Conferencias
        </h3>
        <h4 className="py-2 mb-40 md:sticky top-48 bg-green-400 min-w-full min-h-full flex items-center justify-center">
          Talleres
        </h4>
      </div>

      <div className="bg-orange-400 col-start-1 col-span-7 row-span-7 md:col-start-2 md:col-span-6 md:row-span-8 p-4 pb-20">
        <div className="pb-4 mb-20 mt-4">
          <span className="text-xl font-bold mb-4 flex">Invitados</span>
          {invitados && invitados.length > 0 ? (
            <Slider images={invitados} />
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
        <div className="pb-4 pt-10 mb-20">
          <span className="text-lg font-bold pb-4 flex">Programa</span>
          {programa && programa.length > 0 ? (
            <Slider images={programa} />
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
        <div className="pb-4 mb-20">
          <span className="text-lg font-bold py-20">Conferencia</span>
          <p className="p-10">
            Las conferencias se realizarán en vivo vía streaming por el canal
            oficial de la IADEV. Tienen una duración aproximada de 40 minutos
            más la sesión de Q&A a los ponentes, posterior a la transmisión del
            video se subirá la grabación a esta plataforma.
          </p>
          {conferencias && conferencias.length > 0 ? (
            <Slider images={conferencias} />
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
        <div className="pb-4  ">
          <span className="text-lg font-bold  ">Talleres</span>
          <p className="px-10 pt-4">
            Los talleres se realizarán vía Teams, el acceso se activará 15
            minutos antes de cada taller. Solamente se debe dar click en el
            botón ENTRA AL TALLER y podrán acceder a él.
          </p>
          <p className="px-10 pb-6">
            Dentro de cada taller se realizará registro de los asistentes. Los
            talleres quedarán grabados.
          </p>
          {talleres && talleres.length > 0 ? (
            <Slider images={talleres} />
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ElementosFadev;
