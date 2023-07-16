import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

// COMPONENTE LISTA DESPLEGABLE
// DEL MENU RESPONSIVE

const ListaDesplegable = ({ titulo, sublistas }) => {
  const [mostrarElementos, setMostrarElementos] = useState(false);

  const handleToggle = () => {
    setMostrarElementos(!mostrarElementos);
  };

  return (
    <div className="bg-yellow-400 py-2 px-2 my-[1px] rounded text-left">
      {/* Cambia el espacio en los botones desplegables  */}
      <button
        onClick={handleToggle}
        className="text-back text-lg font-medium w-full text-left h-full sm:h-16 md:font-bold sm:text-2xl"
        // edita las propiedades de los botones desplegables
      >
        {titulo}
      </button>
      <Transition
        show={mostrarElementos}
        enter="transition-all duration-700 ease-in-out"
        enterFrom="opacity-0 transform translate-x-4"
        enterTo="opacity-100 transform translate-x-0" //TRANSICION AL ABRIR
        leave="transition-all duration-500 ease-in-out" //O DAR CLIC EN UN BOTON
        leaveFrom="opacity-100 transform translate-x-8" //DEL MENU HAMBURGUESA
        leaveTo="opacity-0 transform -translate-x-8"
      >
        {mostrarElementos && (
          // SE CONFIGURAN LAS PROPIEDADES DEL MENU
          // HAMBURGUESA QUE APARECE CUANDO SE LE DA CLIC
          <ul className="w-full flex flex-col justify-start">
            {sublistas.map((sublista, index) => (
              <li
                key={index}
                className="rounded py-2 px-1 hover:bg-yellow-500 sm:h-12 italic flex w-full h-full sm:text-xl"
              >
                {/* edita estilos de la lista dentro de los botones desplegables */}
                <Link to={`/${sublista}`} className="w-full h-full">
                  {sublista}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Transition>
    </div>
  );
};

export default ListaDesplegable;
