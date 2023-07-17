import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import { Slide, Fade } from "react-awesome-reveal";
import FadevComp from "../componentes/FadevComp";
import GridImg from "../componentes/GridImg";

// PAGINA DEL FADEV-2023

function Veintitres() {
  useEffect(() => {
    document.title = "FADEV - 2023"; // Cambia 'Nuevo título de la página' por el título deseado

    // IMPIDE INSPECCIONAR ELEMENTO:
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    const handleKeyDown = (event) => {
      if (event.key === "F12") {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  const images = [
    "https://iadevtesjo.files.wordpress.com/2021/06/nuria_tovar_mireles.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/alberto_ramos-1.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/abimael_gonzalez.png?w=1024", //Arreglo de imágenes para el
    "https://iadevtesjo.files.wordpress.com/2021/06/casa_anafre.png?w=1024", //COMPONENTE GRIDIMG
    "https://iadevtesjo.files.wordpress.com/2021/06/osvaldo_pasillas_bernal.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/carolina_rubi_garcia_sanchez_armass.png?w=1024",
  ];

  return (
    <div>
      <header>
        <Menu />
      </header>

      <div>
        <div
          // IMAGEN CON TEXTO DE FONDO
          className="relative min-h-screen overflow-hidden bg-[url('https://images.reporteindigo.com/wp-content/uploads/2023/01/cine-de-animacion-pixelatl.jpg')] bg-cover bg-no-repeat p-12 text-start"
          style={{ height: "900px", backgroundPosition: "start center" }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-60">
            <div className="h-full ">
              <div className="my-40 lg:my-32">
                <div>
                  <Slide direction="up">
                    <h2 className="text-7xl sm:text-9xl my:10 mx-4 lg:text-[200px] text-white font-bold">
                      FADEV
                    </h2>
                  </Slide>
                </div>
                <Slide direction="right" damping={0.3}>
                  <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold px-4 my-4 flex flex-wrap text-yellow-400">
                    2023
                  </h4>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 ">
        {/* IMPORTACION DE COMPONENTE FADEVCOMP Y 
        ASIGNACION DE PROPIEDADES */}
        <FadevComp
          titulo={"FADEV - 2023"}
          imagen={
            "https://esfadev.com/wp-content/uploads/2023/06/PortadaFB-1024x576.png"
          }
          p1={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos tempore eligendi explicabo ipsam repellendus alias distinctio eaque saepe obcaecati, eveniet minus perferendis quod dolore odit maxime sint nam minima."
          }
          p2={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos tempore eligendi explicabo ipsam repellendus alias distinctio eaque saepe obcaecati, eveniet minus perferendis quod dolore odit maxime sint nam minima."
          }
          p3={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos tempore eligendi explicabo ipsam repellendus alias distinctio eaque saepe obcaecati, eveniet minus perferendis quod dolore odit maxime sint nam minima."
          }
          p4={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos tempore eligendi explicabo ipsam repellendus alias distinctio eaque saepe obcaecati, eveniet minus perferendis quod dolore odit maxime sint nam minima"
          }
        />
      </div>
      {/* GRID PARA ASIDE Y ARTICLE */}
      <div className="grid grid-cols-1 lg:grid-cols-4 my-5 lg:relative  sm:mx-20 lg:mx-10">
        {/* INICIA ASIDE */}
        <div className="col-span-1 lg:col-start-1 border py-4 shadow-2xl mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 ">
          <Fade cascade={true} damping={0.1}>
            <div className="flex flex-col justify-center items-center  ">
              <button
                className="bg-gradient-to-r from-violet-950 to-blue-800 font-semibold shadow-2xl text-white text-sm xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                onClick={() => (window.location.href = "#invitados")}
              >
                Invitados
              </button>
              <button
                className="bg-gradient-to-l from-blue-800 to-violet-950 font-semibold shadow-2xl text-white text-sm xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                onClick={() => (window.location.href = "#convocatorias")}
              >
                Convocatorias
              </button>
              <button
                className="bg-gradient-to-tr from-violet-950 to-blue-800 font-semibold shadow-2xl text-white text-sm  xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                onClick={() => (window.location.href = "#programa")}
              >
                Programa
              </button>
              <button
                className="bg-gradient-to-bl from-blue-800 to-violet-950 font-semibold shadow-2xl text-white text-sm xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                onClick={() => (window.location.href = "#talleres")}
              >
                Talleres
              </button>
            </div>
          </Fade>
          {/* TERMINA ASIDE */}
        </div>
        {/* INICIA ARTICLE */}
        <div className="col-span-1 lg:col-start-2 lg:col-span-3 mx-2 shadow-2xl mb-56 border-2 p-4">
          {/* INICIA SECCION INVITADOS */}
          <div id="invitados">
            <h2 className="border-b-2 border-yellow-300 font-bold m-2 w-32 pb-1 text-2xl">
              Invitados
            </h2>
            {/* MUESTRA A LOS INVITADOS */}
            <GridImg images={images} />
          </div>
          <div className="" id="convocatorias">
            <h3 className="border-b-2 border-violet-600 font-bold m-2 w-40 pb-1 text-2xl">
              Convocatorias
            </h3>
          </div>
          <div className="" id="conferencias">
            <h4 className="border-b-2 border-red-600 font-bold m-2 w-36 pb-1 text-2xl">
              Conferencias
            </h4>
          </div>
          <div className="" id="talleres">
            <h5 className="border-b-2 border-green-600 font-bold m-2 w-28 pb-1 text-2xl">
              Talleres
            </h5>
          </div>
          {/* termina artcle */}
        </div>
      </div>

      <footer>
        {/* IMPORTACION DE COMPONENTE FOOTER */}
        <Footer />
      </footer>
    </div>
  );
}

export default Veintitres;
