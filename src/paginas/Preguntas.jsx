import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import { Fade, Slide } from "react-awesome-reveal";
import PreguntasFrec from "../componentes/PreguntasFrec";

function Preguntas() {
  useEffect(() => {
    document.title = "IADEV - Preguntas Frecuentes"; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
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
        <div className="my-4">
          <Fade cascade={true} duration={1500}>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  ">
              Preguntas Frecuentes
            </span>
          </Fade>
        </div>
      </div>
      <article className="my-20 grid grid-cols-4 mx-2 lg:relative lg:gap-10">
        <div className="col-span-4 m-2 h-auto lg:col-span-1 lg:col-start-1 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 rounded p-2 sm:p-4 shadow-2xl bg-white my-10 border-2">
          <div className="flex flex-col justify-center align-center items-center">
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
        </div>
        <div className="col-span-4 lg:col-span-3 lg:col-start-2 mx-2 sm:mr-10 lg:mr-20">
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
        </div>
      </article>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Preguntas;
