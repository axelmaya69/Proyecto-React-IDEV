import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import { Fade, Slide } from "react-awesome-reveal";

function Titulacion() {
  useEffect(() => {
    document.title = "IADEV - Titulación"; // Cambia 'Nuevo título de la página' por el título deseado
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
                      Titulación
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
          <Fade cascade duration={1500}>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400 shadow-2xl">
              Titulación
            </span>
          </Fade>
        </div>
      </div>
      {/* CREACION DE GRID PARA ASIDE Y ARTICLE */}
      <div className="grid grid-cols-1 lg:grid-cols-4 my-10  mx-2 lg:relative">
        {/* INICIO DEL ASIDE */}
        <div className="col-span-4 h-auto lg:col-span-1 lg:col-start-1 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 rounded p-2 sm:p-4 lg:shadow-2xl bg-white lg:border-2">
          <div className="flex flex-col justify-items-center m-4 lg:mt-0">
            <img
              src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/1239231/settings_images/DRBSOkI5SHuc36urwnwo_Redise_o_funnel_expansi_njj-26.png"
              alt="titulcacion"
              className="mx-10 md:m-20 lg:m-0 lg:my-4 w-auto h-auto"
            />
          </div>
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
        <div className="col-span-4 lg:col-span-3 lg:col-start-2  border sm:border-2 rounded p-2 sm:p-4 shadow-2xl min-h-screen bg-white mb-56 sm:mx-20 lg:mx-10">
          <h1 className="font-bold text-xl px-2">¿Qué es?</h1>
          <p className="px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            iure sint at fugiat pariatur enim, voluptatibus saepe provident
            quisquam sed unde, ipsum, tempora voluptatum facilis? Doloremque
            error nesciunt modi exercitationem? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sunt nihil minima sequi unde magnam
            consequatur, illum itaque asperiores repudiandae impedit, corrupti
            iste earum eum commodi necessitatibus reiciendis nam temporibus.
            Blanditiis!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque
            voluptatum, natus, earum voluptatibus odio et possimus molestiae
            officiis, quia numquam eum. Quas accusamus neque atque rerum iste
            error vel!
          </p>
          <p className="mt-4 px-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            non excepturi voluptatum ipsa corrupti neque odit, nihil totam aut
            iure magnam, sed, incidunt tempora similique error quia enim nostrum
            nulla.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis, officiis. Perferendis quam, optio temporibus minus velit
            modi porro numquam, repellendus saepe veritatis dolor inventore
            voluptatem officia sit, asperiores alias facilis?
          </p>

          <h2 className="font-bold text-xl my-4 px-2">
            ¿Cuáles son los requisitos?
          </h2>
          <p className="px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            iure sint at fugiat pariatur enim, voluptatibus saepe provident
            quisquam sed unde, ipsum, tempora voluptatum facilis? Doloremque
            error nesciunt modi exercitationem? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sunt nihil minima sequi unde magnam
            consequatur, illum itaque asperiores repudiandae impedit, corrupti
            iste earum eum commodi necessitatibus reiciendis nam temporibus.
            Blanditiis!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque
            voluptatum, natus, earum voluptatibus odio et possimus molestiae
            officiis, quia numquam eum. Quas accusamus neque atque rerum iste
            error vel!
          </p>
          <h3 className="font-bold text-xl my-4 px-2">Finalmente</h3>
          <p className="px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            iure sint at fugiat pariatur enim, voluptatibus saepe provident
            quisquam sed unde, ipsum, tempora voluptatum facilis? Doloremque
            error nesciunt modi exercitationem? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sunt nihil minima sequi unde magnam
            consequatur, illum itaque asperiores repudiandae impedit, corrupti
            iste earum eum commodi necessitatibus reiciendis nam temporibus.
            Blanditiis!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque
            voluptatum, natus, earum voluptatibus odio et possimus molestiae
            officiis, quia numquam eum. Quas accusamus neque atque rerum iste
            error vel!
          </p>

          {/* FIN DEL ARTICLE */}
        </div>

        {/* FIN DEL GRID */}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Titulacion;
