 import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ListaDesplegable from '../componentes/ListaDesplegable';
import Lista from '../componentes/Lista';
import { Transition } from '@headlessui/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleMenu = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      setActiveIndexes([index]);
      closeMenus();
    }
  };

  const closeMenus = () => {
    setIsOpen(false);
    setActiveIndexes([]);
  };

  return (
    <div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-xl mr-1 p-0" />
          ) : (
            <FaBars className="text-xl flex justify-end" />
          )}
        </button>

        <Transition
          show={isOpen}
          enter="transition-all duration-700 ease-in-out"
          enterFrom="opacity-0 transform translate-x-0"
          enterTo="opacity-100 transform translate-x-7"
          leave="transition-all duration-500 ease-in-out"
          leaveFrom="opacity-100 transform translate-x-0"
          leaveTo="opacity-0 transform translate-x-8"
        >
          <div className="fixed top-0 right-0 bottom-0 z-50 w-40">
            <div className="m-5 ">
              {isOpen && (
                <>
                  <div className='z-50'>
                    <ListaDesplegable
                      titulo={"Principal"}
                      sublistas={['Home', 'Academia', 'Docentes', 'Investigación', 'Proyectos']}
                      activeIndexes={activeIndexes}
                      toggleMenu={toggleMenu}
                      index={0}
                    />
                  </div>
                  <div>
                    <ListaDesplegable
                      titulo={"Alumnado"}
                      sublistas={['Alumnos', 'Destacados', 'Preguntas', 'Residencia', 'Servicio', 'Dual', 'Titulación']}
                      activeIndexes={activeIndexes}
                      toggleMenu={toggleMenu}
                      index={1}
                    />
                  </div>
                  <div>
                    <ListaDesplegable
                      titulo={"Festival"}
                      sublistas={['FADEV', '2020', '2021', '2022', '2023', 'Sitio Oficial']}
                      activeIndexes={activeIndexes}
                      toggleMenu={toggleMenu}
                      index={2}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </Transition>
      </div>
      <Lista />
    </div>
  );
}


