import React, {useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import FadevComp from '../componentes/FadevComp';
import AnimatedText from '../componentes/AnimatedText';
import InvitadosCard from '../componentes/InvitadosCard';
import { Fade } from 'react-awesome-reveal';
import Slider from '../componentes/Slider';

function Veintidos() {
  useEffect(() => {
    document.title = 'FADEV - 2022'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);

  const convocatoriasTesjo=[
    "https://iadevtesjo.files.wordpress.com/2022/06/basquet.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/ilustracion.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/fotografia.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/animacion.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/torneorumble.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/rally.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/futbol.png",
    ];

  return (

    <div>
    <header >
    <Menu/>
    </header>
    <div>
    <FadevComp
      titulo={<AnimatedText text={"FADEV - 2022"}/>}
      imagen={"https://iadevtesjo.files.wordpress.com/2022/06/propuesta_logo_grises.png?w=153"}
      p1={"FADEV, lugar donde cohabitan ideas y toman forma a través de animación, cómic, videojuegos, VFX, publicidad, fotografía y vídeo."}
      p2={"Como cada año la División de Ingeniería en Animación Digital y Efectos Visuales adscrita al Tecnológico de Estudios Superiores de Jocotitlán organiza el Festival de Animación Digital y Efectos Visuales (FADEV). Este año tenemos la primera edición presencial, con grandes invitados, talleres y proyecciones de trabajos. "}
      p3={"El tema de este año es: «La cristalización de las ideas», siendo estas la representación de un estado primigenio del pensamiento humano, abriendo caminos para la construcción de un imaginario colectivo."}
      p4={"La IADEV te invita a participar en la edición 2022 del FADEV que se llevará a cabo durante los días 20 al 24 de Junio, revisa el programa para que no te pierdas de nada."}
      />  
    </div>
    <div className='grid grid-cols-7 grid-rows-8 sm:gap-y-0'>
    <div className='col-span-3 col-start-3 row-start-1 row-span-1 md:col-span-1 md:col-start-1 md:row-span-8 text-xl text-center md:sticky md:h-32 md:top-64 md:mb-48 md:z-10 pb-4 sm:pb-10 sm:ml-4'>
    <Fade cascade damping={0.1}>
    <div className="flex flex-col">
    <button className='bg-yellow-400 font-bold text-sm sm:text-xl flex flex-wrap md:h-16 text-center justify-center items-center p-2 my-1 w-full text-white hover:text-violet-800 transition-all duration-300' onClick={() => window.location.href = '#invitados'}>Invitados</button>
    <button className='bg-orange-400 font-bold text-sm sm:text-xl flex flex-wrap md:h-16 text-center justify-center items-center p-2 text-white my-1 w-full hover:text-violet-800 transition-all duration-300'  onClick={() => window.location.href = '#convocatorias'}>Convocatorias
    </button>
    <button className='bg-green-400 font-bold text-sm sm:text-xl flex flex-wrap md:h-16 text-center justify-center items-center p-2 text-white my-1 w-full hover:text-violet-800 transition-all duration-300' onClick={() => window.location.href = '#programa'}>Programa</button>
    <button className='bg-violet-400 font-bold text-sm sm:text-xl flex flex-wrap md:h-16 text-center justify-center items-center p-2 text-white my-1 w-full hover:text-violet-800 transition-all duration-300'  onClick={() => window.location.href = '#talleres'}>Talleres</button>
    </div>
    </Fade>
    </div>
    <div className='col-span-7 row-span-4 row-start-2 md:col-start-2 md:col-span-6 md:row-start-1 gap-2'>
    <div className='py-2' id='invitados'>
    <span className='font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-orange-400'> Invitados </span>      
    
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/roman-llanos_mesa-de-trabajo-1.png"} />
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/cesar-cepeda_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/eliud-gil-samaniego_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/gustavo-cosio_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/javier-chavez_mesa-de-trabajo-1_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/jose-trello_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/juan-martin-rivera-gonzalez_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/luis-de-la-cerda_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/pixel-estudio_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/ricardo-martinez-vargas_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/un33doce_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/roman-llanos_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/cesar-cepeda_mesa-de-trabajo-1.png"}/>
    </div>

    <div id='convocatorias' className='flex flex-col items-center justify-center'>
  <span className='font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-green-400'>Convocatorias</span>
  <div className='my-8 first-letter:grid grid-cols-1 w-full  sm:w-8/12 flex items-center justify-center'>
    <div>
      {convocatoriasTesjo && convocatoriasTesjo.length > 0 ? (
        <Slider images={convocatoriasTesjo} />
      ) : (
        <p>No hay imágenes disponibles</p>
      )}
    </div>
  </div>
</div>



    <div id='programa'>
    <span className='font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-blue-400'> Programa</span>
    <div className="flex flex-wrap justify-center py-4 pb-4 sm:pb-10">
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/auditorio-azul_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/auditorio_edificio_c_mesa-de-trabajo-1_mesa-de-trabajo-1.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/auditorio_verde_mesa-de-trabajo-1_mesa-de-trabajo-1.png"}/>
    </div>
    </div>
    <div id='talleres'>
    <span className='font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-violet-400'> Talleres </span>           
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/taller_redessociales.png?w=1024"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/taller_videojuegos.png?w=1024"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/taller_audio.png"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/taller_storyboard.png?w=1024"}/>
    <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2022/06/taller_drone.png?w=1024"}/>
    </div>
    </div> 
    </div>
    <footer>
    <Footer/>
    </footer>
    </div>
  );
}
export default Veintidos;