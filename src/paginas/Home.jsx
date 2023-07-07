import React, {useEffect} from 'react'
import Menu from '../elementos/Menu'
import Footer from '../elementos/Footer';
import ArticleLeft from '../componentes/ArticleLeft';
import ArticleRight from '../componentes/ArticleRight';
import Slider from '../componentes/Slider';
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";


function Home() {
  useEffect(() => {
  document.title = 'IADEV - Home'; // Cambia 'Nuevo título de la página' por el título deseado
}, []);
  const images =[
    'https://iadevtesjo.files.wordpress.com/2021/06/nuria_tovar_mireles.png?w=1024',
    'https://iadevtesjo.files.wordpress.com/2021/06/alberto_ramos-1.png?w=1024',
    'https://iadevtesjo.files.wordpress.com/2021/06/abimael_gonzalez.png?w=1024',//Arreglo de imágenes para el Slider:
    'https://iadevtesjo.files.wordpress.com/2021/06/casa_anafre.png?w=1024',
    'https://iadevtesjo.files.wordpress.com/2021/06/osvaldo_pasillas_bernal.png?w=1024',
    'https://iadevtesjo.files.wordpress.com/2021/06/carolina_rubi_garcia_sanchez_armass.png?w=1024',
    
    ];  
    const fondo = "https://www.esdesignbarcelona.com/sites/default/files/imagenes/animacion-digital-que-es-y-que-tipos-de-animacion-existen_0_1.jpg";

  return (  
    <div>
      <header>
      <Menu/>
      </header>

      <div> 
      <div className="relative min-h-full overflow-hidden bg-[url('https://uzink.es/wp-content/uploads/2022/05/%C2%BFQue-poner-en-un-banner-5-ejemplos-de-banner-para-inspirartebrastemp-ejemplo-de-banner-creativofedex-ejemplo-de-bannerbanner-volkswagenbanner-ejemplo-mcdonalds-nissan-ejemplos-de-banner-copia.jpg')] bg-cover  bg-no-repeat p-12 text-center"
        style={{ height: '800px',backgroundPosition: 'center center'}}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-60">
          <div className="flex h-full items-center justify-center" >
            <div className="text-white">
            <Slide direction='left'>
              <h1 className="mb-4 text-6xl lg:text-[200px] font-bold">IADEV</h1></Slide>
              <Slide direction='up'>
              <h2 className="mb-6 text-xl lg:text-6xl font-semibold  px-4">  Lugar donde cohabitan las ideas </h2></Slide>
            </div>
          </div>
        </div>
      </div>
      </div> 
    

    <div className='grid grid-cols-1 w-full'>
      <div className=' justify-center'>
      {images && images.length > 0 ? (
        <Slider images={images} />
      ) : (
        <p>No hay imágenes disponibles</p>
      )}
    </div>
    </div>
        
<div className='grid grid-cols-4 gap-2 mx-2 lg:mx-10 lg:relative'> 
<div className='col-span-4 m-2 mb-10 h-auto p-4 lg:col-span-1 lg:col-start-1 border my-10 border-blue-500 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-48 '>
  <Fade cascade damping={0.3} >
  <img className="m-auto my-2" src="https://www.ipp.edu.pe/blog/wp-content/uploads/2021/04/animacion-digital.jpg" alt="animacion imagen" />
  <img className="m-auto" src="https://www.procine.cdmx.gob.mx/storage/app/uploads/public/644/fe2/954/644fe2954deea427920675.jpg" alt="animacion imagen" />
  <p className='text-center my-10'>Contenido random aqui...</p>
  </Fade>
</div>
  <div className='col-span-4 lg:col-span-3 lg:col-start-2 mb-10'>
<Fade cascade direction='right'>
    <ArticleLeft
    title="Titulo 1"
    image={"https://uvp.mx/uvpblog/wp-content/uploads/2021/05/Animacio%CC%81n.jpg"}
    parrafoUno={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, nihil nisi. Architecto, iure maiores optio vitae nostrum fu tur adipisicing elit. Odit harum fugit cumque perferendis incidunt temporibus sed? Possimus commodi est placeat laborum."}
    parrafoDos={"Voluptatum aliquid sint temporibus autem ut quasi porro expedita.lorem Lorem ipsum dolor sit amet consectetur, adipisic e fugiat illo nemo quo, sint dolor quia! Quae, et. Provident, iste numquam.Lorem ipsum dolor,   "}
    /> 
    <ArticleRight
      title="Titulo 2"
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbkXnZBJoiFZJo3N8TAZyE1Y54JGilGCPmwXBzEU43J8_1h0g8v0nt-dPwG4Cwkxjlxw&usqp=CAU"}
      parrafoUno={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, nihil nisi. Architecto, iure maiores optio vitae nostrum  r adipisicing elit. Odit harum fugit cumque perferendis incidunt temporibus sed? Possimus commodi est placeat laborum."}
    parrafoDos={"Voluptatum aliquid sint temporibus autem ut quasi porro expedita.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ne o, sint dolor quia! Quae, et. Provident, iste numquam.Lorem ipsum dolor,   "}
    />
    </Fade> 
    <p className='px-2 sm:mx-20 mx-2 lg:mx-6 pt-10 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia labore distinctio a exercitationem ab! 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia labore distinctio a exercitationem ab! Repudiandae nisi, vitae dicta dolore ex corrupti omnis, vel dignissimos reiciendis alias consequatur optio soluta?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia labore distinctio a exercitationem ab! Repudiandae nisi, vita 
    </p>
    <Fade cascade >
      <div>
    <ArticleLeft
    title={"Otro párrafo"}
    image={"https://i.blogs.es/9e2b7d/animacion-2023/1366_2000.jpeg"}
    parrafoUno={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptatem exercitationem aut sit quas velit architecto fugit eos similique unde, dolor placeat esse doloremque, fugiat ipsa ut, voluptate neque minima."}
    parrafoDos={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptatem exercitationem aut sit quas velit architecto fugit eos similique unde, dolor placeat esse doloremque, fugiat ipsa ut, voluptate neque minima."}
    />
    </div>
    </Fade>
    </div>
    </div>
    
    <div>
       </div>
    <footer>
      <Footer/>
    </footer>
    </div>
  );
}

export default Home;



