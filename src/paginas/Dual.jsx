import React,{useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade } from 'react-awesome-reveal';

function Dual() {
  useEffect(() => {
    document.title = 'IADEV - Educación Dual'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
       <header>
      <Menu/>
      </header>
      <div className='flex justify-center items-center align-center'>
      <div className='my-4'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  '>Educación Dual</span>
      </Fade>
      </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-6 my-10 sm:my-20 mx-2 sm:mx-10'>
        <div className='col-span-1 mx-2 sm:col-span-4 sm:row-start-1 sm:col-start-1 py-10'>
          <h1 className='font-bold text-xl my-4'>¿En qué consiste?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure sint at fugiat pariatur enim, voluptatibus saepe provident quisquam sed unde, ipsum, tempora voluptatum facilis? Doloremque error nesciunt modi exercitationem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nihil minima sequi unde magnam consequatur, illum itaque asperiores repudiandae impedit, corrupti iste earum eum commodi necessitatibus reiciendis nam temporibus. Blanditiis!
            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque voluptatum, natus, earum voluptatibus odio et possimus molestiae officiis, quia numquam eum. Quas accusamus neque atque rerum iste error vel!
          </p>
          <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam non excepturi voluptatum ipsa corrupti neque odit, nihil totam aut iure magnam, sed, incidunt tempora similique error quia enim nostrum nulla.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officiis. Perferendis quam, optio temporibus minus velit modi porro numquam, repellendus saepe veritatis dolor inventore voluptatem officia sit, asperiores alias facilis?</p>
      
          <h2 className='font-bold text-xl my-4'>¿Quienes pueden aplicar?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure sint at fugiat pariatur enim, voluptatibus saepe provident quisquam sed unde, ipsum, tempora voluptatum facilis? Doloremque error nesciunt modi exercitationem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nihil minima sequi unde magnam consequatur, illum itaque asperiores repudiandae impedit, corrupti iste earum eum commodi necessitatibus reiciendis nam temporibus. Blanditiis!
            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque voluptatum, natus, earum voluptatibus odio et possimus molestiae officiis, quia numquam eum. Quas accusamus neque atque rerum iste error vel!
          </p>
          <h3 className='font-bold text-xl my-4'>Finalmente</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure sint at fugiat pariatur enim, voluptatibus saepe provident quisquam sed unde, ipsum, tempora voluptatum facilis? Doloremque error nesciunt modi exercitationem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nihil minima sequi unde magnam consequatur, illum itaque asperiores repudiandae impedit, corrupti iste earum eum commodi necessitatibus reiciendis nam temporibus. Blanditiis!
            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque voluptatum, natus, earum voluptatibus odio et possimus molestiae officiis, quia numquam eum. Quas accusamus neque atque rerum iste error vel!
          </p>
        </div>
        <div className='col-span-1 mx-2 sm:col-span-2 sm:col-start-5 sm:row-start-1 py-10'>Imágen</div>
      </div>  
        <footer>
      <Footer/>
    </footer></div>
  )
}

export default Dual;