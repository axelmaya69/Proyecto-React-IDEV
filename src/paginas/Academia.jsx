import React,{useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import MiImagen from '../imagenes/portada_web.jpg';
import AcademiaCard from '../componentes/AcademiaCard';
import OrderList from '../componentes/OrderList';
import { Fade, Slide, Bounce, Flip, Zoom, Hinge, JackInTheBox, Roll} from 'react-awesome-reveal';
import Italica, { Negrita } from '../componentes/Letras';

function Academia() {
  useEffect(() => {
    document.title = 'IADEV - Academia'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  const items = [
    "Los egresados y las egresadas serán capaces de comprender y adaptar los Recursos Tecnológicos vigentes en la industria de la Animación Digital y Efectos Visuales dentro del sector público y privado, para satisfacer las necesidades con un sentido creativo e innovador.",
    "Los egresados y las egresadas serán capaces de planear, crear, desarrollar e implementar proyectos digitales, artísticos y tecnológicos, con liderazgo y ética profesional, a través del emprendimiento o en proyectos empresariales en el sector público o privado.", 
    "A través de la participación en equipos multidisciplinarios, los egresados y las egresadas serán capaces de aplicar arte, tecnología y narrativa para la resolución de problemas en la industria del entretenimiento y medios digitales.",
    "Los egresados y las egresadas tendrán la capacidad de gestionar, administrar, dirigir y supervisar proyectos audiovisuales con visión humanística, ética, respetando la propiedad intelectual con un sentido sustentable y global.",
    "Los egresados y las egresadas, conscientes de los cambios tecnológicos, se actualizan de manera constante e independiente en el uso de tecnologías emergentes, aplicadas a la industria de la animación, el entretenimiento y la comunicación social para el desarrollo innovador de proyectos."

  ];
  const perfilEgreso =[
    "Crea gráficas computacionales de calidad utilizando software especializado.",
    "Implementa técnicas y procesos de producción de actualidad en las industrias de la animación digital y los efectos visuales.",
    "Interpreta la estructura narrativa de proyectos de animación digital y efectos visuales que sean aplicados en la industria.",
    "Crea efectos visuales utilizando software especializado de producción y post- producción.",
    "Aplica los lenguajes de programación utilizados en el desarrollo de software para las industrias de la animación digital y los efectos visuales.",
    "Desarrolla herramientas de software para facilitar y optimizar los procesos de producción y post-producción de la animación digital y los efectos visuales.",
    "Desarrolla modelos de simulación física en entornos gráficos computacionales aplicables a proyectos de animación digital y efectos visuales.",
    "Desarrolla modelos matemáticos para la representación de gráficas por Computadora.",
    "Aplica modelos psicológicos para recrear el comportamiento de personajes en entornos de animación digital.",
    "Integra infraestructura computacional que permita el desarrollo de proyectos de animación digital.",
    "Desarrolla una visión emprendedora y creativa para detectar áreas de oportunidad que le permitan implementar proyectos innovadores y crear nuevas empresas.",
    "Desempeña sus actividades profesionales, considerando los aspectos legales, éticos, humanos y sociales, para sustentar el mejoramiento de su entorno.",
    "Participa activamente en proyectos de investigación y desarrollo tecnológico para fortalecer las industrias de la animación digital y los efectos visuales.",
    "Gestiona proyectos multidisciplinarios para optimizar el uso de recursos."
  ];
  return (
    <div>
      <header>
      <Menu/>
      </header>

    <div  >
      <div
        className="relative overflow-hidden bg-[url('')] bg-cover bg-no-repeat p-12 text-center"
        style={{ height: '900px' ,backgroundImage:`url(${MiImagen})`,backgroundPosition: 'center center' }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-10">
          <div className="flex h-full items-center justify-center">
            <div className="text-black">
            <Slide cascade>
              <div
                className="max-h-full overflow-y-auto"
                style={{ width: '100%', maxHeight: '100%' }}>
                  <h4 className="mb-6 text-xl md:text-5xl rounded font-bold bg-yellow-400  p-2 mx-2">
                    Ingeniería en Animación Digital y Efectos Visuales
                  </h4>
                
              </div></Slide>
            </div>
          </div>
        </div>
      </div>
      </div>



    <div className='2xl:mx-40 mx-0'>
    <div className='flex flex-col items-center justify-center'>
      <Fade cascade damping={0.5}>
    <h1 className='p-5 text-3xl md:text-5xl font-bold lg:text-6xl lg:py-16'>IADEV</h1>
    <h2 className='p-5 text-xl md:text-3xl flex justify-between font-bold text-center'>TECNOLÓGICO DE ESTUDIOS SUPERIORES DE JOCOTITLÁN</h2>
    </Fade>
    </div>
    
    <div>
      <Slide damping={0.7}>
      <AcademiaCard titulo={"Objetivo General"}
      parrafo={"Formar profesionistas capaces de adaptar, desarrollar y aplicar recursos tecnológicos en la producción de animación digital y efectos visuales, impulsando la tecnología para responder a los desafíos de las industrias de la animación digital y los efectos visuales, en un contexto global, multidisciplinario y sustentable."}/>
      </Slide>
    </div>
    <div className='mx-2 py-2'>
      <Fade cascade direction='right'   >
    <div className='mx-2 py-2'>
      <h4 className=' font-bold text-xl py-2 sm:mx-10 sm:text-2xl sm:font-bold lg:mx-36'>Objetivos Educacionales</h4>
      <OrderList items={items} />
      </div>
      </Fade>
      </div>   
      <div className='mx-2 py-2'>
      <Slide direction='left'>
      <span className=' font-bold text-xl py-2 sm:mx-10 sm:text-2xl sm:font-bold lg:mx-36'>Perfil de Egreso</span>
      <OrderList items={perfilEgreso}/>
      </Slide>
      </div>
      <Slide direction='down'  >
      <span className=' font-bold text-xl py-2 sm:mx-10 sm:text-2xl sm:font-bold lg:mx-36 mx-2'>Campo Laboral</span>
      <p className='py-2 sm:mx-10 sm:text-xl lg:text-2xl lg:mx-36 mx-2'>El Ingeniero en Animación Digital y Efectos Visuales desarrolla su actividad profesional en la:</p>
      <ul className='sm:mx-10 sm:text-xl lg:text-2xl lg:mx-36 mx-2 list-disc'>
        <li className='py-2 mx-6'><Negrita negrita={"Industria cinematográfica: "}/>en las áreas de dirección, producción, dirección de arte, animación, efectos especiales, guionismo. </li>
        <li className='py-2 mx-6'>
          <Negrita negrita={"Industria de la comunicación: "}/> radio y televisión.
        </li>
        <li className='py-2 mx-6'>
        <Negrita negrita={"Industria del videojuego: "}/> cinemática, diseño de personajes, modelado 3D, diseño de arte.
        </li>
        <li className='py-2 mx-6'>
        <Negrita negrita={"Industria de la construcción: "}/> diseño arquitectónico.
        </li>
      </ul>
    <p className='py-2 sm:mx-10 sm:text-xl mb-10 lg:mx-36 lg:text-2xl mx-2'>Los egresados y las egresadas serán capaces de adaptar los recursos tecnológicos vigentes en la industria de la animación digital y efectos visuales dentro del sector público, privado y social, para satisfacer las necesidades con un sentido creativo e innovador de una manera eficaz y eficiente con actitud propositiva.
El ingeniero en Animación Digital y Efectos Visuales es capaz de identificar, formular, analizar, sintetizar, diseñar, desarrollar y conducir proyectos en una diversidad de ramas del sector productivo, tales como: <Italica italica={"Videojuegos, Pre, pro y postproducción de Audio y Video, Fotografía, Modelado 3D, contenido digital en campañas de publicidad y páginas web, Realidad Virtual, Realidad Aumentada, así como la creación de materiales multimedia para promover el arte, la cultura, la ciencia, la tecnología, los deportes y todas las actividades del quehacer humano"}/> aplicando su conocimiento técnico y su sensibilidad artística de forma humana, ética y responsable.</p>
</Slide>
   <div className='mb-20'>
      <h6 className='mx-2  sm:mx-36 '> <a href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/reticulas/Reticulas2022/Ret%C3%ADcula%20Ingenier%C3%ADa%20en%20Animaci%C3%B3n%20Digital%20y%20Efectos%20Visuales.pdf" target='_blank' className='text-xl sm:text-2xl text-blue-400 hover:text-blue-700 border-b border-blue-400'>
        Retícula Ingeniería en Animación Digital y Efectos Visuales</a></h6>
   </div>
   </div>
      <footer className='w-full'>
      <Footer/>
    </footer>

      </div>

  )
}

export default Academia;