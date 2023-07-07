import React, {useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Bounce, Fade } from 'react-awesome-reveal';
import { Slide } from 'react-awesome-reveal';

function Fadev() {
  useEffect(() => {
    document.title = 'FADEV'; // Cambia 'Nuevo título de la página' por el título deseado
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
              <h2 className="text-7xl sm:text-9xl my:10 mx-4 lg:text-[200px] text-white font-bold">FADEV</h2> 
              </Slide>
              </div> 
              <Slide direction='right' damping={0.3}>
              <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold px-4 my-4 flex flex-wrap text-yellow-400">Festival de Animación Digital</h4>
              <h5 className='text-xl sm:text-2xl lg:text-4xl font-bold px-4 my-4 text-white'> y Efectos Visuales</h5>
              </Slide>
            </div>
          </div>
        </div>
      </div>
      </div> 






      <div className='my-10 flex align-center justify-center'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-6xl border-b-2 border-violet-400'>FADEV</span>
      </Fade>
      </div>
      <div className='grid grid-cols-4 mx-2 lg:mx-10 lg:my-10 lg:relative gap-10'>
      <div className='col-span-4 lg:col-span-1 border flex flex-col items-center justify-center border-blue-500 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-32 '>
  <img className="m-auto" src="https://www.procine.cdmx.gob.mx/storage/app/uploads/public/644/fe2/954/644fe2954deea427920675.jpg" alt="animacion imagen" />
</div>

        <div className=' col-span-4 lg:col-span-3 lg:col-start-2 '>
          <h1 className='font-bold text-xl m-4'>¿Qué es?</h1>
          <p className='mx-2 pb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro necessitatibus nemo, magnam fugit quo sunt. Quo molestias debitis, soluta ea nostrum id ad vel ipsum nam, officiis sapiente odit libero? Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet doloremque inventore! Ut et suscipit molestias voluptas dolorem harum sunt fuga voluptatibus dignissimos eaque? Dolorum aperiam autem nihil maiores nisi.</p>
          <p className='mx-2 pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur velit reiciendis cupiditate laudantium, incidunt amet ratione quas consequatur nihil dolorem dolor. Aliquid quidem consectetur earum aspernatur minima commodi ratione.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nesciunt sequi mollitia id dicta iusto libero ratione odit ullam in vero voluptatibus atque veritatis voluptatem qui laboriosam. Voluptatibus, nemo sunt.</p>
          <h2 className='font-bold text-xl m-4'>Por qué hacemos todo esto</h2>
          <p className='mx-2 pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur velit reiciendis cupiditate laudantium, incidunt amet ratione quas consequatur nihil dolorem dolor. Aliquid quidem consectetur earum aspernatur minima commodi ratione.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nesciunt sequi mollitia id dicta iusto libero ratione odit ullam in vero voluptatibus atque veritatis voluptatem qui laboriosam. Voluptatibus, nemo sunt.</p>
          <h3 className='mx-4 font-bold text-2xl my-4'>Nuestros Festivales:</h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 font-bold lg:mx-10 text-white text-xl  cursor-pointer '>
            <Fade cascade={true} delay={150} damping={0.2}>

          <div className='bg-orange-400 my-10 mx-5 flex p-2 items-center justify-center flex-col hover:scale-110 transition-all duration-400 rounded hover:-translate-y-6 w-4/5 h-4/5' onClick={() => window.location.href = '/2020'} ><span className='my-3'>FADEV 2020</span>
          <img src="https://1.bp.blogspot.com/-c7mjdVl384Y/YRdK_17JlXI/AAAAAAAAAaM/rHfwINv-LWkdD5GLn67fSivSA76COQdawCLcBGAsYHQ/s750/Main%2Bpicture%2Bnew%2B%25283%2529.png" alt="fadev-2020" className='w-full h-full object-cover' />
          </div  >
          <div className='bg-blue-400 my-10 mx-5 p-2 flex items-center justify-center flex-col hover:scale-110 transition-all duration-400 rounded hover:-translate-y-6 w-4/5 h-4/5'  onClick={() => window.location.href = '/2021'}  ><span className='my-3'>FADEV 2021</span>
          <img src="https://iadevtesjo.files.wordpress.com/2021/06/perfil.png?w=1024" alt="fadev-2021" className='w-full h-full object-cover' />
          </div>
          <div className='bg-violet-400 my-10 mx-5 p-2 flex items-center justify-center flex-col hover:scale-110 transition-all duration-400 rounded hover:-translate-y-6 w-4/5 h-4/5'  onClick={() => window.location.href = '/2022'} > <span className='my-3'>FADEV 2022 </span>
          <img src="https://iadevtesjo.files.wordpress.com/2022/06/propuesta_logo_grises.png?w=153" alt="fadev-2022" />
          </div>
          <div className='bg-red-400 my-10 mx-5 p-2 flex items-center justify-center flex-col hover:scale-110 transition-all duration-400 rounded hover:-translate-y-6 w-4/5 h-4/5' onClick={() => window.location.href = '/2023'} ><span className='my-3'>FADEV 2023</span>
          <img src="https://esfadev.com/wp-content/uploads/2023/06/PortadaFB-1024x576.png" alt="fadev-2023" />
          </div>
          <div className='bg-yellow-400 my-10 mx-2 p-2 flex items-center justify-center flex-col hover:scale-110 transition-all duration-400 rounded hover:-translate-y-6 w-4/5 h-4/5' onClick={() => alert("En Planeación... \n  ;)") } ><span className='my-3'>#RoadToFADEV-2024</span>
          <img src="https://www.popsci.com/uploads/2019/04/22/RACMJSXXIK7BFWBEPV5KGO6TNA.jpg?auto=webp&width=1440&height=865.6875" alt="fadev-2024" />
          </div>
          </Fade>
          </div>
        </div> 
      </div>
      
      <footer>
      <Footer/>
    </footer></div>
  )
}

export default Fadev;