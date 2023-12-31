import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import { Fade, Slide } from "react-awesome-reveal";
import ProyectosCard from "../componentes/ProyectosCard";

function Proyectos() {
  useEffect(() => {
    document.title = "IADEV - Proyectos"; // Cambia 'Nuevo título de la página' por el título deseado

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
                      Proyectos
                    </h2>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center align-center">
        <div className="my-10">
          <Fade cascade={true} duration={1500}>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 border-red-400 shadow-2xl">
              Proyectos
            </span>
          </Fade>
        </div>
      </div>
      {/* CREACION DEL GRID PARA EL ASIDE Y ARTICLE */}
      <div className="grid grid-cols-1 lg:grid-cols-4 mx-2 lg:relative ">
        {/* INICIO DEL ASIDE */}
        <div className="col-span-4 h-auto lg:col-span-1 lg:col-start-1 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 rounded p-2 sm:p-4 lg:shadow-2xl bg-white lg:border-2 ">
          <img
            src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/12/banner-lecciones-aprendidas-proyectos-desarrollo-2019.jpg"
            alt="proyecto"
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
          {/* FIN DEL ASIDE */}
        </div>

        {/* INICIO DEL ARTICLE */}
        <div className="col-span-1 lg:col-span-3 lg:col-start-2 border sm:border-2 rounded p-2 sm:p-4 shadow-2xl min-h-screen sm:mx-20 lg:mx-10 bg-white mb-56">
          <p className="font-bold text-xl my-4 mx-2 sm:mx-10 2xl:mx-40">
            En este apartado..
          </p>
          <p className="mx-2 sm:mx-10 2xl:mx-40">
            Se presentan algunos proyectos relacionados y en curso
          </p>
          {/* CREACION DE OTRO GRID PARA PRESENTAR TARJETAS DONDE MOSTRAR A LOS PROYECTOS REALIZADOS */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* SE IMPORTA VARIAS VECES AL COMPONENTE ProyectosCard Y SE LE PASA EL NOMBRE Y UNA DESCRIPCION */}
            <ProyectosCard
              name={
                "CREACIÓN DE GRANJAS DE RENDER CON LA APLICACIÓN DE UNA APP"
              }
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,inventore consequatur blanditiis libero eum doloribus laboriosam quo assumenda quis, voluptates optio reprehenderit facere delectus repellat ratione, asperiores nulla quas numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet laboriosam quam perferendis possimus ducimus labore, reiciendis a sed beatae eaque iure rem unde voluptas consectetur assumenda et quia quidem?"
              }
            />
            <ProyectosCard
              name={"DESARROLLO DEL TALLER DE ILUSTRACIONES"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,inventore consequatur blanditiis libero eum doloribus laboriosam quo assumenda quis, voluptates optio reprehenderit facere delectus repellat ratione, asperiores nulla quas numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet laboriosam quam perferendis possimus ducimus labore, reiciendis a sed beatae eaque iure rem unde voluptas consectetur assumenda et quia quidem?"
              }
            />{" "}
            <ProyectosCard
              name={"CREACIÓN DE UN CORTOMETRAJE"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,inventore consequatur blanditiis libero eum doloribus laboriosam quo assumenda quis, voluptates optio reprehenderit facere delectus repellat ratione, asperiores nulla quas numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet laboriosam quam perferendis possimus ducimus labore, reiciendis a sed beatae eaque iure rem unde voluptas consectetur assumenda et quia quidem?"
              }
            />
            {/* TERMINA EL GRID PARA LAS TARJETAS DE PROYECTO */}
          </div>
          {/* TERMINA EL ARTICLE */}
        </div>
        {/* TERMINA EL GRID  */}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Proyectos;
