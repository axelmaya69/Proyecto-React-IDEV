import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

// ESTE COMPONENTE ES DEL MENU PARA PANTALLAS GRANDES, SE TERMINA EXPORANDO AL
// COMONENTE <HEADER>

function Lista() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  return (
    // SE MANTIENE OCULTO HASTA QUE LA PANTALLA SEA GRANDE
    <div className="hidden lg:flex justify-between">
      <ul className="flex space-x-4 w-full">
        {/* INICIA LA PRIMERA LISTA DE "HOME" */}
        <li
          className="relative m-auto hover:bg-yellow-500 rounded p-2 text-xl font-semibold 2xl:text-2xl  w-full"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(null)}
        >
          {/* LINK A LA PAGINA PRINCIPAL */}
          <Link to={"/"} className="w-full h-full flex">
            Home
          </Link>
          {hoveredItem === 1 && (
            // SUBLISTA CON LINKS A SUS RESPECTIVOS ENLACES O RUTAS
            <ul className="absolute divide mt-1 font-semibold">
              <Fade cascade damping={0.1}>
                <li className="text-sm text-black bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex border border-black w-28 h-12 justify-center items-center rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/Academia"}
                    className="flex justify-start px-4 items-center w-full h-full "
                  >
                    Academia
                  </Link>
                </li>
                <li className="text-sm text-black bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex border border-black w-28 h-12 justify-center items-center rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/Docentes"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    Docentes
                  </Link>
                </li>
                <li className="text-sm text-black bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex border border-black w-28 h-12 justify-center items-center rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/Investigación"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    Investigación
                  </Link>
                </li>
                <li className="text-sm text-black bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex border border-black w-28 h-12 justify-center items-center rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/Proyectos"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    Proyectos
                  </Link>
                </li>
              </Fade>
              {/* TERMINA LA PRIMERA LISTA */}
            </ul>
          )}
        </li>
        <li
          // INICIA LA SEGUNDA LISTA PERTENECIENTE A "ALUMNOS"
          className="relative m-auto hover:bg-yellow-500 rounded p-2 text-xl font-semibold 2xl:text-2xl "
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleHover(null)}
        >
          <Link to={"/Alumnos"} className="w-full h-full flex">
            Alumnos
            {/* LINK A LA RUTA PRINCIPAL */}
          </Link>
          {hoveredItem === 2 && (
            // INICIA LA SUBLISTA DE LOS ELEMENTOS "ALUMNOS" A SUS RUTAS
            <ul className="absolute divide mt-1 font-semibold z-50">
              <Fade cascade damping={0.05}>
                <li className=" text-black text-sm bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex w-28 h-12 justify-center items-center border border-black rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/Destacados"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    Destacados
                  </Link>
                </li>
                <li className=" text-black text-sm bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex  w-28 h-12 justify-center items-center border border-black rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/Preguntas"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    Preguntas
                  </Link>
                </li>
                <li className=" text-black text-sm bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex w-28 h-12 justify-center items-center border border-black rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/Residencia"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    Residencia
                  </Link>
                </li>
                <li className=" text-black text-sm bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex w-28 h-12 justify-center items-center border border-black rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/Servicio"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    Servicio
                  </Link>
                </li>
                <li className=" text-black text-sm bg-yellow-400 sm:hover:scale-110 transition-all duration-400   flex w-28 h-12 justify-center items-center border border-black rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/Dual"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    Dual
                  </Link>
                </li>
                <li className=" text-black text-sm bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex w-28 h-12 justify-center items-center border border-black rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/Titulación"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    Titulación
                  </Link>
                </li>
              </Fade>
              {/* TERMINA LA SEGUNDA LISTA */}
            </ul>
          )}
        </li>
        <li
          // INICIA LA 3 LISTA PERTENECIENTE AL FADEV
          className="relative m-auto bg-yellow-400 hover:bg-yellow-500 rounded p-2 text-xl font-semibold 2xl:text-2xl "
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleHover(null)}
        >
          <Link to={"/FADEV"} className=" flex">
            FADEV
            {/* LINK AL BOTON DEL FADEV */}
          </Link>
          {hoveredItem === 3 && (
            // INICIA LA SUBLISTA CON ELEMENTOS DE LOS FADEV ANUALES
            <ul className="absolute divide mt-1 font-semibold ">
              <Fade cascade damping={0.1}>
                <li className="text-black text-sm bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex w-28 h-12 justify-center items-center border border-black rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/2020"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    2020
                  </Link>
                </li>
                <li className="text-black text-sm bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex w-28 h-12 justify-center items-center border border-black rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/2021"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    2021
                  </Link>
                </li>
                <li className="text-black text-sm bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex w-28 h-12 justify-center items-center border border-black rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/2022"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    2022
                  </Link>
                </li>
                <li className="text-black text-sm bg-yellow-400 sm:hover:scale-110 transition-all duration-400  flex w-28 h-12 justify-center items-center border border-black rounded-md lg:hover:bg-yellow-500">
                  <Link
                    to={"/2023"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    2023
                  </Link>
                </li>
                <li className="text-black text-sm bg-yellow-400 sm:hover:scale-110 transition-all duration-400 flex w-28 h-12 justify-center items-center border border-black rounded-md lg:hover:bg-yellow-500 ">
                  <Link
                    to={"/Sitio Oficial"}
                    className="flex justify-start px-4 items-center w-full h-full"
                  >
                    Sitio Oficial
                  </Link>
                </li>
              </Fade>
              {/* TERMINA LA 3RA LISTA */}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Lista;
