import React, {useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade } from 'react-awesome-reveal';

function Alumnos() {
  useEffect(() => {
    document.title = 'IADEV - Alumnos'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
        <header >
      <Menu/>
      </header>    
      <div className='flex justify-center items-center align-center'>
      <div className='my-4'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  '>Alumnos</span>
      </Fade>
      </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 my-4 sm:my-20 2xl:mx-40 mx-2'>
      <div className=' mx-2 lg:col-start-1 lg:col-span-1 border border-blue-500'>
        Imagen</div>
        <div className=' mx-2 lg:col-start-2 lg:col-span-3 lg:row-start-1'>
      <h1 className='font-bold text-xl m-4'>Titulo 1</h1>
      <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor enim repellendus esse vel, maxime laborum pariatur, expedita provident magnam quidem dolorem? Ab perspiciatis ex voluptatum, neque impedit sunt natus.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi quae molestias velit hic voluptate eligendi, quos dolorum voluptas nulla eaque aliquam saepe rem nobis optio culpa ullam? Omnis, sint.</p>
      <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam asperiores qui nostrum porro officiis eos, molestiae mollitia architecto quis quia? Perspiciatis, excepturi dicta corrupti illo cumque iure reiciendis debitis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit rerum quae aliquam, facilis temporibus obcaecati, adipisci ipsam blanditiis odit ipsa a corrupti doloremque amet sed est et rem explicabo.</p>
      <h2 className='font-bold text-xl m-4'>Titulo 2/Subtitulo</h2>
      <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam asperiores qui nostrum porro officiis eos, molestiae mollitia architecto quis quia? Perspiciatis, excepturi dicta corrupti illo cumque iure reiciendis debitis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit rerum quae aliquam, facilis temporibus obcaecati, adipisci ipsam blanditiis odit ipsa a corrupti doloremque amet sed est et rem explicabo.
      <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore magnam, saepe enim sed unde ut, sit maiores deleniti blanditiis odio velit dolor, ullam maxime! Repellendus blanditiis ducimus veniam corporis itaque?
      </p>
      <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam asperiores qui nostrum porro officiis eos, molestiae mollitia architecto quis quia? Perspiciatis, excepturi dicta corrupti illo cumque iure reiciendis debitis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit rerum quae aliquam, facilis temporibus obcaecati, adipisci ipsam blanditiis odit ipsa a corrupti doloremque amet sed est et rem explicabo.</p>
        </div>
        

      </div>
        <footer className='mt-20'>
      <Footer/>
    </footer>
        </div>
  )
}

export default Alumnos;