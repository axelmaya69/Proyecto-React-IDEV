import React, {useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade } from 'react-awesome-reveal';

function Proyectos() {
  useEffect(() => {
    document.title = 'IADEV - Proyectos'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
     <header>
      <Menu/>
      </header>
      <div className='flex justify-center items-center align-center'>
      <div className='my-4'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  '>Proyectos</span>
      </Fade>
      </div>
      </div>
        <footer>
      <Footer/>
    </footer>
        </div>
  )
}

export default Proyectos;