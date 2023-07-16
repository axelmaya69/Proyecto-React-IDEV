import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ListaDesplegable from "../componentes/ListaDesplegable";
import Lista from "../componentes/Lista";
import { Transition } from "@headlessui/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // ESTE ES UN COMPONENTE QUE ENGLOBA AL MENU
  //DESPLEGABLE Y MENU NORMAL, PARA PANTALLAS MÁS GRANDES

  return (
    <div>
      {/* INICIA EL "MENU" DESPLEGABLE */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="desplegar/cerrar menu"
        >
          {isOpen ? (
            <FaTimes className="text-xl mr-1 sm:text-2xl" />
          ) : (
            //ICONOS DE ABRIR Y CERRAR
            <FaBars className="text-xl mr-1 sm:text-2xl" />
          )}
        </button>

        <Transition
          show={isOpen}
          enter="transition-all duration-700 ease-in-out"
          enterFrom="opacity-0 transform translate-x-0" //TRANSICION QUE HACE UNA ANIMACION AL DARLE CLIC A
          enterTo="opacity-100 transform translate-x-4" //UN BOTON DEL MENU DESPLEGABLE
          leave="transition-all duration-500 ease-in-out"
          leaveFrom="opacity-100 transform translate-x-0"
          leaveTo="opacity-0 transform translate-x-5"
        >
          <div className="fixed top-0 right-2 sm:right-3 bottom-0 sm:top-2 z-50 w-28 sm:w-56 md:w-72">
            {/* <- MODIFICA EL TAMAÑO Y POSICION (EN X & Y) DE LOS BOTONES */}
            <div className="py-4">
              {isOpen && (
                <>
                  <div className="z-50 sm:mt-3">
                    {/* SE IMPORTA AL COMPONENTE "LISTA DESPLEGABLE" Y SE PASAN SUS PROPIEDADES PARA EL MENU DESPLEGABLE */}
                    <ListaDesplegable
                      titulo={"Principal"}
                      sublistas={[
                        "Home",
                        "Academia",
                        "Docentes",
                        "Investigación",
                        "Proyectos",
                      ]}
                    />
                  </div>
                  <div>
                    {/* SE IMPORTA NUEVAMENTE CON DIFERENTES PROPIEDADES */}
                    <ListaDesplegable
                      titulo={"Alumnado"}
                      sublistas={[
                        "Alumnos",
                        "Destacados",
                        "Preguntas",
                        "Residencia",
                        "Servicio",
                        "Dual",
                        "Titulación",
                      ]}
                    />
                  </div>
                  <div>
                    {/* IMPORTACION DEL COMPONENTE CON OTRAS PROPIEDADES */}
                    <ListaDesplegable
                      titulo={"Festival"}
                      sublistas={[
                        "FADEV",
                        "2020",
                        "2021",
                        "2022",
                        "2023",
                        "Sitio Oficial",
                      ]}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </Transition>
      </div>
      {/* <- TERMINA EL MENU DESPLEGABLE */}
      {/* SE DESPLEGA EL COMPONENTE <LISTA> PARA PANTALLAS GRANDES -> */}
      <Lista />
    </div>
  );
}
