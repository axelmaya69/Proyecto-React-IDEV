import React ,{useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';

function Veintitres() {
  useEffect(() => {
    document.title = 'FADEV - 2023'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
       <header>
      <Menu/>
      </header> 
      Veintitres
        <footer>
      <Footer/>
    </footer>
        </div>
  )
}

export default Veintitres;