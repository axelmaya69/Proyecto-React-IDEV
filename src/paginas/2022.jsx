import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import FadevComp from "../componentes/FadevComp";
import InvitadosCard from "../componentes/InvitadosCard";
import { Fade, Slide } from "react-awesome-reveal";
import Slider from "../componentes/Slider";
import GridImg from "../componentes/GridImg";

function Veintidos() {
  useEffect(() => {
    document.title = "FADEV - 2022"; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);

  const images = [
    "https://iadevtesjo.files.wordpress.com/2022/06/roman-llanos_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/cesar-cepeda_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/eliud-gil-samaniego_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/gustavo-cosio_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/javier-chavez_mesa-de-trabajo-1_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/jose-trello_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/juan-martin-rivera-gonzalez_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/luis-de-la-cerda_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/pixel-estudio_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/ricardo-martinez-vargas_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/un33doce_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/roman-llanos_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/cesar-cepeda_mesa-de-trabajo-1.png",
  ];

  const convocatoriasTesjo = [
    "https://iadevtesjo.files.wordpress.com/2022/06/basquet.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/ilustracion.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/fotografia.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/animacion.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/torneorumble.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/rally.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/futbol.png",
  ];
  const programa = [
    "https://iadevtesjo.files.wordpress.com/2022/06/auditorio-azul_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/auditorio_edificio_c_mesa-de-trabajo-1_mesa-de-trabajo-1.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/auditorio_verde_mesa-de-trabajo-1_mesa-de-trabajo-1.png",
  ];

  const talleres = [
    "https://iadevtesjo.files.wordpress.com/2022/06/taller_redessociales.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2022/06/taller_videojuegos.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2022/06/taller_audio.png",
    "https://iadevtesjo.files.wordpress.com/2022/06/taller_storyboard.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2022/06/taller_drone.png?w=1024",
  ];

  return (
    <div>
      <header>
        <Menu />
      </header>

      <div>
        <div
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
                    2022
                  </h4>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <FadevComp
          titulo={"FADEV - 2022"}
          imagen={
            "https://iadevtesjo.files.wordpress.com/2022/06/propuesta_logo_grises.png?w=153"
          }
          p1={
            "FADEV, lugar donde cohabitan ideas y toman forma a través de animación, cómic, videojuegos, VFX, publicidad, fotografía y vídeo."
          }
          p2={
            "Como cada año la División de Ingeniería en Animación Digital y Efectos Visuales adscrita al Tecnológico de Estudios Superiores de Jocotitlán organiza el Festival de Animación Digital y Efectos Visuales (FADEV). Este año tenemos la primera edición presencial, con grandes invitados, talleres y proyecciones de trabajos. "
          }
          p3={
            "El tema de este año es: «La cristalización de las ideas», siendo estas la representación de un estado primigenio del pensamiento humano, abriendo caminos para la construcción de un imaginario colectivo."
          }
          p4={
            "La IADEV te invita a participar en la edición 2022 del FADEV que se llevará a cabo durante los días 20 al 24 de Junio, revisa el programa para que no te pierdas de nada."
          }
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4  lg:relative">
        <div className="col-span-1 lg:col-start-1 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 lg:bg-slate-200 border sm:border-2 rounded shadow-xl lg:min-h-screen pb-8">
          <Fade cascade={true} damping={0.1}>
            <div className="flex flex-col justify-center items-center text-white">
              <img
                src="https://iadevtesjo.files.wordpress.com/2022/06/propuesta_logo_grises.png?w=153"
                alt="FADEV-2022"
                className="my-4 lg:border-b-2 py-2 lg:border-red-700"
              />
              <button
                className="bg-gradient-to-r from-violet-950 to-blue-800 font-semibold shadow-2xl text-sm xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                onClick={() => (window.location.href = "#invitados")}
              >
                Invitados
              </button>
              <button
                className="bg-gradient-to-l from-blue-800 to-violet-950 font-semibold shadow-2xl text-sm xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                onClick={() => (window.location.href = "#convocatorias")}
              >
                Convocatorias
              </button>
              <button
                className="bg-gradient-to-tr from-violet-950 to-blue-800 font-semibold shadow-2xl text-sm  xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                onClick={() => (window.location.href = "#programa")}
              >
                Programa
              </button>
              <button
                className="bg-gradient-to-bl from-blue-800 to-violet-950 font-semibold shadow-2xl text-sm xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                onClick={() => (window.location.href = "#talleres")}
              >
                Talleres
              </button>
            </div>
          </Fade>
        </div>
        <div className="col-span-1 lg:col-start-2 lg:col-span-3 mx-2 ">
          <div className="py-2" id="invitados">
            <span className="font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-orange-400">
              Invitados
            </span>

            <div className="mx-2 z-30">
              <GridImg images={images} />
            </div>
          </div>

          <div
            id="convocatorias"
            className="flex flex-col items-center justify-center"
          >
            <span className="font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-green-400">
              Convocatorias
            </span>
            <div>
              <GridImg images={convocatoriasTesjo} />
            </div>
          </div>

          <div id="programa">
            <span className="font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-blue-400">
              Programa
            </span>
            <div>
              <GridImg images={programa} />
            </div>
          </div>
          <div id="talleres">
            <span className="font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-violet-400">
              Talleres
            </span>
            <GridImg images={talleres} />
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Veintidos;
