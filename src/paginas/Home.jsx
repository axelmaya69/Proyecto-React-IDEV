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
    'https://iadevtesjo.files.wordpress.com/2021/06/abimael_gonzalez.png?w=1024',
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
      <div
        className="relative min-h-full overflow-hidden bg-[url('https://uzink.es/wp-content/uploads/2022/05/%C2%BFQue-poner-en-un-banner-5-ejemplos-de-banner-para-inspirartebrastemp-ejemplo-de-banner-creativofedex-ejemplo-de-bannerbanner-volkswagenbanner-ejemplo-mcdonalds-nissan-ejemplos-de-banner-copia.jpg')] bg-cover bg-no-repeat p-12 text-center"
        style={{ height: '900px',backgroundPosition: 'center center'}}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-60">
          <div className="flex h-full items-center justify-center" >
            <div className="text-white">
            <Slide direction='down'>
              <h2 className="mb-4 text-6xl font-semibold">IADEV</h2></Slide>
              <Slide direction='up'>
              <h4 className="mb-6 text-xl sm:text-xl font-semibold overflow-y-auto px-4">  Lugar donde cohabitan las ideas </h4></Slide>
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
        
<div  > 
<Fade cascade direction='left'>
    <ArticleLeft
    title="Titulo 1"
    image={"https://uvp.mx/uvpblog/wp-content/uploads/2021/05/Animacio%CC%81n.jpg"}
    parrafoUno={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, nihil nisi. Architecto, iure maiores optio vitae nostrum fugit unde et tempora quo nulla libero provident, ab dicta ullam nihil dignissimos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum fugit cumque perferendis incidunt temporibus sed? Possimus commodi est placeat laborum."}
    parrafoDos={"Voluptatum aliquid sint temporibus autem ut quasi porro expedita.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nesciunt blanditiis explicabo voluptatem dignissimos, porro voluptate provident delectus ex accusantium illo modi. Corporis temporibus reprehenderit praesentium porro voluptates impedit sapiente! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptatem distinctio totam, magni minus possimus voluptatum assumenda beatae fugiat illo nemo quo, sint dolor quia! Quae, et. Provident, iste numquam.Lorem ipsum dolor,   "}
    /></Fade>
    </div>
      <div>
      <Fade cascade direction='right'>
    <ArticleRight
      title="Titulo 2"
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbkXnZBJoiFZJo3N8TAZyE1Y54JGilGCPmwXBzEU43J8_1h0g8v0nt-dPwG4Cwkxjlxw&usqp=CAU"}
      parrafoUno={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, nihil nisi. Architecto, iure maiores optio vitae nostrum fugit unde et tempora quo nulla libero provident, ab dicta ullam nihil dignissimos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum fugit cumque perferendis incidunt temporibus sed? Possimus commodi est placeat laborum."}
    parrafoDos={"Voluptatum aliquid sint temporibus autem ut quasi porro expedita.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nesciunt blanditiis explicabo voluptatem dignissimos, porro voluptate provident delectus ex accusantium illo modi. Corporis temporibus reprehenderit praesentium porro voluptates impedit sapiente! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptatem distinctio totam, magni minus possimus voluptatum assumenda beatae fugiat illo nemo quo, sint dolor quia! Quae, et. Provident, iste numquam.Lorem ipsum dolor,   "}
    />
    </Fade>
    </div>    
    <footer>
      <Footer/>
    </footer>
    </div>
  );
}

export default Home;



