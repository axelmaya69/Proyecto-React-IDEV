import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

function Lista() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  return (
    <div className="hidden lg:flex justify-between">
      <ul className="flex space-x-4 w-full">
        <li
          className="relative m-auto hover:bg-yellow-500 rounded p-2 text-xl font-semibold 2xl:text-2xl  w-full"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(null)}
        >
          <Link to={"/"} className='w-full h-full flex'>Home</Link>
          {hoveredItem === 1 && (
            <ul className="absolute divide-y border mt-1 font-semibold ">
              <Fade cascade damping={0.1}>
              <li className='text-sm sm:hover:scale-125 transition-all bg-orange-500 duration-400 text-white p-2 hover:bg-red-500 m-auto py-3 flex w-full'><Link to={"/Academia"} className='flex justify-center w-full  '>Academia</Link></li>
              <li className='text-sm text-white p-2 hover:bg-red-500 sm:hover:scale-125 bg-teal-500 transition-all duration-400 py-3 flex w-full'><Link to={"/Docentes"} className='flex justify-center w-full'>Docentes</Link></li>
              <li className='text-sm text-white p-2 hover:bg-red-500 sm:hover:scale-125 transition-all bg-green-400 duration-400 py-3 flex w-full'><Link to={"/Investigación"} className='flex justify-center w-full '>Investigación</Link></li>
              <li className='text-sm text-white p-2 hover:bg-red-500 sm:hover:scale-125 transition-all bg-pink-500 duration-400 py-3 flex w-full'><Link to={"/Proyectos"} className='flex justify-center w-full '>Proyectos</Link></li>
              </Fade>
            </ul>
          )}
        </li>
        <li
          className="relative m-auto hover:bg-yellow-500 rounded p-2 text-xl font-semibold 2xl:text-2xl "
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleHover(null)}
        >
          <Link to={"/Alumnos"} className='w-full h-full flex'>Alumnos</Link>
          {hoveredItem === 2 && (
            <ul className="absolute bg-teal-700 divide-y border mt-1 font-semibold ">
              <Fade cascade damping={0.05}>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 py-3 flex w-full'><Link to={"/Destacados"} className='w-full'>Destacados</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 py-3 flex w-full '><Link to={"/Preguntas"} className='w-full'>Preguntas</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 py-3 flex w-full'><Link to={"/Residencia"} className='w-full'>Residencia</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 py-3 flex w-full'><Link to={"/Servicio"}className='w-full'>Servicio</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400  py-3 flex w-full'><Link to={"/Dual"} className='w-full'>Dual</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 py-3 flex w-full'><Link to={"/Titulación"} className='w-full' >Titulación</Link></li>
              </Fade>
            </ul>
          )}
        </li>
        <li
          className="relative m-auto hover:bg-yellow-500 rounded p-2 text-xl font-semibold 2xl:text-2xl "
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleHover(null)}
        >
          <Link to={"/FADEV"} className='w-full flex'>FADEV</Link>
          {hoveredItem === 3 && (
            <ul className="absolute divide-y mt-1 border bg-teal-700 font-semibold w-full">
              <Fade cascade damping={0.1}>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 py-3 flex w-full'><Link to={"/2020"} className='w-full'>2020</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 py-3 flex w-full'><Link to={"/2021"} className='w-full'>2021</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 py-3 flex w-full'><Link to={"/2022"} className='w-full'>2022</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 py-3 flex w-full'><Link to={"/2023"} className='w-full'>2023</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 flex flex w-full w-full py-3'><Link to={"/Sitio Oficial"} className='w-full'>Sitio Oficial</Link></li>
              </Fade>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Lista;
