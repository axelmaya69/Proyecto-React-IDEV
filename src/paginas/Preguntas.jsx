import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import { Fade, Slide } from "react-awesome-reveal";
import PreguntasFrec from "../componentes/PreguntasFrec";

function Preguntas() {
  useEffect(() => {
    document.title = "IADEV - Preguntas Frecuentes"; // Cambia 'Nuevo título de la página' por el título deseado

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
  return (
    <div>
      <header>
        <Menu />
      </header>

      <div>
        <div
          // IMPORTACION DE IMAGEN CON TEXTO DE FONDO
          className="relative min-h-screen overflow-hidden bg-[url('https://images.reporteindigo.com/wp-content/uploads/2023/01/cine-de-animacion-pixelatl.jpg')] bg-cover bg-no-repeat p-12 text-start"
          style={{ height: "900px", backgroundPosition: "start center" }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-60">
            <div className="h-full ">
              <div className="my-40 lg:my-32">
                <div>
                  <Slide direction="up">
                    <h2 className="text-5xl sm:text-7xl my:10 mx-4 lg:text-9xl text-white font-bold">
                      Preguntas
                    </h2>
                  </Slide>
                </div>
                <Slide direction="right" damping={0.3}>
                  <h4 className="text-3xl sm:text-4xl lg:ml-2 lg:text-6xl font-semibold px-4 my-4 flex flex-wrap text-yellow-400">
                    Frecuentes
                  </h4>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center align-center">
        <div className="my-10">
          <Fade cascade={true} duration={1500}>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400 shadow-2xl">
              Preguntas Frecuentes
            </span>
          </Fade>
        </div>
      </div>
      {/* CREACION DE GRID PARA ASIDE Y ARTICLE */}
      <article className="grid grid-cols-4 gap-2 mx-2 my-10 lg:relative">
        {/* INICIA EL ASIDE */}
        <div className="col-span-4 md:mx-20 lg:mx-0 h-auto lg:col-span-1 lg:col-start-1 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 rounded p-2 sm:p-4 lg:shadow-2xl lg:bg-slate-100 lg:border-2">
          <img
            src="https://img.freepik.com/vector-premium/concepto-preguntas-respuestas-o-preguntas-frecuentes-busqueda-soluciones-informacion-util_194360-309.jpg"
            alt="preguntas frecuentes"
          />
          <div className="lg:flex hidden flex-col justify-center align-center items-center">
            <span className="font-bold px-4 py-3  ">Ir a:</span>
            <button
              className="lg:hover:scale-110 transition-all duration-400 lg:hover:font-semibold text-center items-center align-center justify-center w-32 lg:w-full  my-2 px-2 text-white rounded-full py-1  bg-green-700 shadow-2xl"
              onClick={() => (window.location.href = "/Home")}
            >
              Home
            </button>
            <button
              className="lg:hover:scale-110 transition-all duration-400 lg:hover:font-semibold text-center items-center align-center justify-center w-32 lg:w-full  my-2 px-2 text-white rounded-full py-1  bg-blue-700 shadow-2xl"
              onClick={() => (window.location.href = "/Alumnos")}
            >
              Alumnos
            </button>
            <button
              className="lg:hover:scale-110 transition-all duration-400 lg:hover:font-semibold text-center items-center align-center justify-center w-32 lg:w-full  my-2 px-2 text-white rounded-full py-1  bg-red-700 shadow-2xl"
              onClick={() => (window.location.href = "/Fadev")}
            >
              FADEV
            </button>
          </div>
          {/* TERMINA EL ASIDE */}
        </div>

        {/* INICIA EL ARTICLE */}
        <div className="col-span-4 lg:col-span-3 lg:col-start-2 border sm:border-2 rounded p-2 sm:p-4 shadow-2xl min-h-screen bg-white mb-56 sm:mx-20 lg:mx-10">
          {/* SE IMPORTA MULTIPLES VECES EL COMPONENTE PreguntasFrec EL CUAL YA ESTA ESTILIZADO 
          A ESTE COMO PROPIEDAES SE LE PASA UNA PREGUNTA Y SU RESPUESTA */}
          <PreguntasFrec
            pregunta={
              "Pregunta uno... Similique numquam a officiis maxime eligendi. Sint ullam aspernatur odio sequi nam non rem saepe vel odit fuga eligendi, minus inventore suscipit!"
            }
            respuesta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nobis suscipit? Cupiditate nemo obcaecati suscipit tenetur esse repellat at aspernatur deserunt, dolorum cum aliquam praesentium saepe doloremque fugit vel velit?"
            }
          />
          <PreguntasFrec
            pregunta={"Pregunta 2"}
            respuesta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nobis suscipit? Cupiditate nemo obcaecati suscipit tenetur esse repellat at aspernatur deserunt, dolorum cum aliquam praesentium saepe doloremque fugit vel velit?"
            }
          />
          <PreguntasFrec
            pregunta={"Pregunta 3"}
            respuesta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nobis suscipit? Cupiditate nemo obcaecati suscipit tenetur esse repellat at aspernatur deserunt, dolorum cum aliquam praesentium saepe doloremque fugit vel velit?"
            }
          />
          {/* FIN DEL ARTICLE */}
        </div>
        {/* FIN DEL GRID */}
      </article>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Preguntas;
