import React,{useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import FadevComp from '../componentes/FadevComp';
import AnimatedText from '../componentes/AnimatedText';
import ElementosFadev from '../componentes/ElementosFadev';

function Veinte() {
  useEffect(() => {
    document.title = 'FADEV - 2020'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
       <header >
      <Menu/>
      </header>

    <div>
        <FadevComp
        titulo={<AnimatedText text={"FADEV - 2020"}/>}
        imagen={"https://1.bp.blogspot.com/-c7mjdVl384Y/YRdK_17JlXI/AAAAAAAAAaM/rHfwINv-LWkdD5GLn67fSivSA76COQdawCLcBGAsYHQ/s750/Main%2Bpicture%2Bnew%2B%25283%2529.png"}
        p1={"P1 rem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit labore itaque totam earum officia molestias laboriosam ea nobis hic, corporis commodi numquam tempore, in delectus!"}
        p2={"P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit labore itaque totam earum officia molestias laboriosam ea nobis hic, corporis commodi numquam tempore, in delectus! Lorem ipsum dolor sit "}
        p3={"P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit labore itaque totam earum officia molestias laboriosam ea nobis hic, corporis commodi numquam tempore, in delectus!"}
        p4={"P4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit labore itaque totam earum officia molestias laboriosam ea nobis hic, corporis commodi numquam tempore, in delectus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit labore itaque totam earum officia molestias laboriosam ea nobis hic, corporis commodi numquam tempore, in delectus!"}
        />  

      </div>
      <div>


        <ElementosFadev 
        invitados={[
          "https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_abimael-3.png?w=1024",
          "https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_rubi-1.png?w=1024",
          "https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_nuria-1.png?w=1024"
        ]}
        programa={[
          "https://iadevtesjo.files.wordpress.com/2021/06/programa-fadev-2021.png?w=796",
        ]}
        conferencias={[
          "https://iadevtesjo.files.wordpress.com/2021/06/nuria_tovar_mireles.png?w=1024",
          "https://iadevtesjo.files.wordpress.com/2021/06/alberto_ramos-1.png?w=1024",
          "https://iadevtesjo.files.wordpress.com/2021/06/abimael_gonzalez.png?w=1024",
          "https://iadevtesjo.files.wordpress.com/2021/06/casa_anafre.png?w=1024",
          "https://iadevtesjo.files.wordpress.com/2021/06/osvaldo_pasillas_bernal.png?w=1024",
          "https://iadevtesjo.files.wordpress.com/2021/06/roxanne_soledad_escutia_gonzalez.png?w=1024",
          "https://iadevtesjo.files.wordpress.com/2021/06/carolina_rubi_garcia_sanchez_armass.png?w=1024"      
        ]}
        talleres={[
          "https://iadevtesjo.files.wordpress.com/2021/06/taller-abiel-1.png?w=1024",
          "https://iadevtesjo.files.wordpress.com/2021/06/taller-fran.png?w=1024",
          "https://iadevtesjo.files.wordpress.com/2021/06/taller-diana.png?w=1024"
        ]}
        />
 


      </div>
      <footer>
      <Footer/>
    </footer>
      </div>
  )
}
export default Veinte;