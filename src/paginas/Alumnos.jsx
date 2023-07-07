import React, {useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade, Slide } from 'react-awesome-reveal';

function Alumnos() {
  useEffect(() => {
    document.title = 'IADEV - Alumnos'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
        <header >
      <Menu/>
      </header>    

      <div>
      <div
        className="relative min-h-full overflow-hidden bg-[url('https://images.reporteindigo.com/wp-content/uploads/2023/01/cine-de-animacion-pixelatl.jpg')] bg-cover bg-no-repeat p-12 text-start"
        style={{ height: '900px',backgroundPosition: 'start center'}}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-60">
          <div className="h-full " >
            <div className="my-40 lg:my-32">
              <div>
            <Slide direction='up'>
              <h2 className="text-5xl sm:text-7xl my:10 mx-4 lg:text-9xl text-white font-bold">Alumnos</h2> 
              </Slide>
              </div> 
              <Slide direction='right' damping={0.3}>
              <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold lg:ml-2 px-4 my-4 flex flex-wrap text-yellow-400">IADEV</h4>
              </Slide>
            </div>
          </div>
        </div>
      </div>
      </div> 


      <div className='flex justify-center items-center align-center'>
      <div className='my-4'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  '>Alumnos</span>
      </Fade>
      </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 my-4  lg:mx-10 mx-2 lg:relative'>
      <div className=' mx-2 lg:col-start-1 lg:col-span-1 border border-blue-500 lg:sticky lg:top-0 lg:left-0 flex flex-col items-center justify-center lg:bottom-0 lg:max-h-screen lg:mb-32 '>
        <img className='lg:mt-1' src="https://media.istockphoto.com/id/1002859060/es/foto/todo-en-el-camino-de-un-futuro-mejor.jpg?s=612x612&w=0&k=20&c=6tTsHzS_mtvFFtDrBfDxfz7I9pLTJfAFEaaTRl_46_o=" alt="almnos" />
        <div className='flex flex-wrap justify-center items-center my-10'> 
        <div className='flex flex-col items-center drop-shadow-2xl'>
        <button className='bg-orange-400 px-3 py-2 rounded text-white shadow-lg my-4' onClick={() => window.location.href = '#titulouno'}> Titulo 1</button>
        <button className='bg-violet-400 px-3 py-2 rounded text-white shadow-2xl'  onClick={() => window.location.href = '#titulodos'}>Titulo 2</button>
        </div>
        </div>
        </div>
        <div className=' mx-2 lg:col-start-2 lg:col-span-3 lg:row-start-1'>
      <h1 className='font-bold text-xl m-4' id='titulouno'>Titulo 1</h1>
      <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor enim repellendus esse vel, maxime laborum pariatur, expedita provident magnam quidem dolorem? Ab perspiciatis ex voluptatum, neque impedit sunt natus.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi quae molestias velit hic voluptate eligendi, quos dolorum voluptas nulla eaque aliquam saepe rem nobis optio culpa ullam? Omnis, sint.</p>
      <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam asperiores qui nostrum porro officiis eos, molestiae mollitia architecto quis quia? Perspiciatis, excepturi dicta corrupti illo cumque iure reiciendis debitis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit rerum quae aliquam, facilis temporibus obcaecati, adipisci ipsam blanditiis odit ipsa a corrupti doloremque amet sed est et rem explicabo.</p>
      <div className='rounded'>
        <img src="https://tvazteca.brightspotcdn.com/68/f5/cfd3c1f14b089b29edb70120bf76/discriminacion-en-harvard-acusan-a-la-universidad-de-preferir-estudiantes-blancos.jpg" className='rounded p-8' alt="estudiantes" />
      </div>
      <h2 className='font-bold text-xl m-4' id='titulodos'>Titulo 2/Subtitulo</h2>
      <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam asperiores qui nostrum porro officiis eos, molestiae mollitia architecto quis quia? Perspiciatis, excepturi dicta corrupti illo cumque iure reiciendis debitis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit rerum quae aliquam, facilis temporibus obcaecati, adipisci ipsam blanditiis odit ipsa a corrupti doloremque amet sed est et rem explicabo.
      <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore magnam, saepe enim sed unde ut, sit maiores deleniti blanditiis odio velit dolor, ullam maxime! Repellendus blanditiis ducimus veniam corporis itaque?
      </p>
      <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam asperiores qui nostrum porro officiis eos, molestiae mollitia architecto quis quia? Perspiciatis, excepturi dicta corrupti illo cumque iure reiciendis debitis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit rerum quae aliquam, facilis temporibus obcaecati, adipisci ipsam blanditiis odit ipsa a corrupti doloremque amet sed est et rem explicabo.</p>
      <p className='my-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae doloremque maxime sunt dolorem tempore corrupti assumenda nesciunt sequi error! Est quisquam alias commodi odit sunt eos minima! Eos, debitis!
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At illo aspernatur odio repudiandae quibusdam cum ad voluptatem, deleniti eius quos dolorum molestiae modi molestias asperiores eum dolorem quod eligendi assumenda!</p>
      </p>

        </div>
        

      </div>
        <footer className='mt-20'>
      <Footer/>
    </footer>
        </div>
  )
}

export default Alumnos;