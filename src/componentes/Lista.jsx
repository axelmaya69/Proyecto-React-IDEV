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
      
      <ul className="flex space-x-4">
        <li
          className="relative m-auto hover:bg-yellow-500 rounded p-2 text-xl font-semibold 2xl:text-2xl "
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(null)}
        >
          <Link to={"/"}>Home</Link>
          {hoveredItem === 1 && (
            <ul className="absolute divide-y border mt-1 font-semibold ">
              <Fade cascade damping={0.1}>
              <li className='text-sm sm:hover:scale-125 transition-all bg-orange-500 duration-400 text-white p-2 hover:bg-red-500 px-6 py-3'><Link to={"/Academia"}>Academia</Link></li>
              <li className='text-sm text-white p-2 hover:bg-red-500 sm:hover:scale-125 bg-teal-500 transition-all duration-400 px-6 py-3 '><Link to={"/Docentes"}>Docentes</Link></li>
              <li className='text-sm text-white p-2 hover:bg-red-500 sm:hover:scale-125 transition-all bg-green-400 duration-400 px-6 py-3 '><Link to={"/Investigación"}>Investigación</Link></li>
              <li className='text-sm text-white p-2 hover:bg-red-500 sm:hover:scale-125 transition-all bg-pink-500 duration-400 px-6 py-3 '><Link to={"/Proyectos"}>Proyectos</Link></li>
              </Fade>
            </ul>
          )}
        </li>
        <li
          className="relative m-auto hover:bg-yellow-500 rounded p-2 text-xl font-semibold 2xl:text-2xl "
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleHover(null)}
        >
          <Link to={"/Alumnos"}>Alumnos</Link>
          {hoveredItem === 2 && (
            <ul className="absolute bg-teal-700 divide-y border mt-1 font-semibold ">
              <Fade cascade damping={0.05}>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 px-6 py-3 '><Link to={"/Destacados"}>Destacados</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 px-6 py-3 '><Link to={"/Preguntas"}>Preguntas</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 px-6 py-3 '><Link to={"/Residencia"}>Residencia</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 px-6 py-3 '><Link to={"/Servicio"}>Servicio</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 px-6 py-3 '><Link to={"/Dual"}>Dual</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 px-6 py-3 '><Link to={"/Titulación"}>Titulación</Link></li>
              </Fade>
            </ul>
          )}
        </li>
        <li
          className="relative m-auto hover:bg-yellow-500 rounded p-2 text-xl font-semibold 2xl:text-2xl "
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleHover(null)}
        >
          <Link to={"/FADEV"}>FADEV</Link>
          {hoveredItem === 3 && (
            <ul className="absolute divide-y mt-1 border bg-teal-700 font-semibold">
              <Fade cascade damping={0.1}>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 px-4 py-3'><Link to={"/2020"}>2020</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 px-4 py-3'><Link to={"/2021"}>2021</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 px-4 py-3'><Link to={"/2022"}>2022</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 px-4 py-3'><Link to={"/2023"}>2023</Link></li>
              <li className='p-2 text-white text-sm hover:bg-red-500 sm:hover:scale-125 transition-all duration-400 px-4 py-3'><Link to={"/Sitio Oficial"}>Sitio Oficial</Link></li>
              </Fade>
            </ul>
          )}
        </li>
      </ul>
      
    </div>
  );
}

export default Lista;
