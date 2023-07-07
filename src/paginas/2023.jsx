import React ,{useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Slide } from 'react-awesome-reveal';
import FadevComp from '../componentes/FadevComp';

function Veintitres() {
  useEffect(() => {
    document.title = 'FADEV - 2023'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
       <header>
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
              <h2 className="text-7xl sm:text-9xl my:10 mx-4 lg:text-[200px] text-white font-bold">FADEV</h2> 
              </Slide>
              </div> 
              <Slide direction='right' damping={0.3}>
              <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold px-4 my-4 flex flex-wrap text-yellow-400">2023</h4>
              </Slide>
            </div>
          </div>
        </div>
      </div>
      </div> 
      <div className='mb-10 mx-2 lg:mx-10 lg:mx-20 '>
        <FadevComp
        titulo={"FADEV - 2023"}
        imagen={"https://esfadev.com/wp-content/uploads/2023/06/PortadaFB-1024x576.png"}
        p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos tempore eligendi explicabo ipsam repellendus alias distinctio eaque saepe obcaecati, eveniet minus perferendis quod dolore odit maxime sint nam minima."}
        p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos tempore eligendi explicabo ipsam repellendus alias distinctio eaque saepe obcaecati, eveniet minus perferendis quod dolore odit maxime sint nam minima."}
        p3={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos tempore eligendi explicabo ipsam repellendus alias distinctio eaque saepe obcaecati, eveniet minus perferendis quod dolore odit maxime sint nam minima."}
        p4={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos tempore eligendi explicabo ipsam repellendus alias distinctio eaque saepe obcaecati, eveniet minus perferendis quod dolore odit maxime sint nam minima"}

        />
        
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 my-5 lg:mx-10'>
      <div className='col-span-1 lg:col-start-1 border border-blue-500 mx-2'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae temporibus aliquid ipsum! Voluptatibus magni soluta, mollitia sit aspernatur nemo ullam repudiandae vel voluptatum tenetur itaque? Minus exercitationem odio dicta.</p>
      </div>
      <div className='col-span-1 lg:col-start-2 lg:col-span-3 mx-2'>
      Veintitres
      </div>
    </div>
 
        <footer>
      <Footer/>
    </footer>
        </div>
  )
}

export default Veintitres;