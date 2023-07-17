import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import { Fade, Slide } from "react-awesome-reveal";

function SitioOf() {
  useEffect(() => {
    document.title = "FADEV - Sitio Oficial"; // Cambia 'Nuevo título de la página' por el título deseado

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
                    <h2 className="text-7xl sm:text-9xl my:10 mx-4 lg:text-[200px] text-white font-bold">
                      Sitio
                    </h2>
                  </Slide>
                </div>
                <Slide direction="right" damping={0.3}>
                  <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold px-4 my-4 flex flex-wrap text-yellow-400">
                    Oficial
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
              Sitio Oficial
            </span>
          </Fade>
        </div>
      </div>

      {/* CREACION DE GRID PARA ASIDE Y ARTICLE */}
      <div className="grid grid-cols-1 lg:grid-cols-4 mx-2 my-10 lg:relative  sm:mx-20 lg:mx-10">
        {/* INICIO DEL ASIDE */}
        <div className="col-span-4 h-auto lg:col-span-1 lg:col-start-1 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 rounded p-2 sm:p-4 lg:shadow-2xl bg-white  lg:border-2 flex flex-col justify-items-center">
          <img
            src="https://images.vexels.com/media/users/3/205565/isolated/preview/06e9efa04344b1363ec1eb57f393bf44-icono-de-trazo-de-cursor-de-sitio-web.png"
            alt="sitio oficial"
            className="my-10 p-5 lg:my-2 lg:p-2 lg:h-auto max-h-min"
          />
          <div className="hidden lg:flex flex-col justify-center align-center items-center">
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
        <article className="col-span-2  sm:col-span-3 border sm:border-2 rounded p-2 sm:p-4 shadow-2xl min-h-screen bg-white mb-56 ">
          <div className="px-2">
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est
              ipsam officiis accusantium blanditiis temporibus sint quibusdam
              obcaecati facilis debitis nostrum, voluptate, tempore, ullam
              voluptatem nobis animi magni nulla at. lorem Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos, fugit eveniet facilis quis
              minus perspiciatis dolores quisquam omnis non excepturi accusamus,
              sapiente consequuntur cum, possimus a aperiam corporis expedita.
              Consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur
              consequuntur placeat numquam ab culpa. Vero perferendis accusamus
              totam itaque minima quisquam nam dolor!
            </p>
            <p className="my-2">
              officiis accusantium blanditiis temporibus sint quibusdam
              obcaecati facilis debitis nostrum, voluptate, tempore, ullam
              voluptatem nobis animi magni nulla at. lorem Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos, fugit eveniet facilis quis
              minus perspiciatis dolores quisquam omnis non excepturi accusamus,
              nostrum, voluptate, tempore, ullam voluptatem nobis animi magni
              nulla at. lorem
            </p>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              corporis expedita. Consectetur. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Dicta reiciendis, sequi molestiae
              fuga harum minus! Tenetur consequuntur placeat numquam ab culpa.
              Vero perferendis accusamus totam itaque minima quisquam nam dolor!
              sit amet consectetur adipisicing elit. Dicta reiciendis, sequi
              molestiae fuga harum minus! Tenetur consequuntur placeat numquam
              ab culpa. Vero perferendis accusamus totam itaque minima quisquam
              nam dolor! officiis accusantium blanditiis temporibus sint
              quibusdam obcaecati facilis debitis nostrum, voluptate, tempore,
              ullam voluptatem nobis animi magni nulla at. lorem Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eos, fugit eveniet
              facilis quis minus perspiciatis dolores quisquam omnis non
              excepturi accusamus, sapiente consequuntur cum, possimus a aperiam
              co Consectetur.
            </p>
            <p className="my-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur
              eveniet facilis quis minus perspiciatis dolores quisquam omnis non
              excepturi accusamus, sapiente consequuntur cum, possimus a aperiam
              corporis expedita. Consectetur. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Dicta reiciendis, sequi molestiae
              fuga harum minus! Tenetur consequuntur placeat numquam ab culpa.
              Vero perferendis accusamus totam itaque minima quisquam nam dolor!
            </p>
          </div>

          {/* FIN DEL ARTICLE */}
        </article>

        {/* FIN DEL GRID */}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SitioOf;
