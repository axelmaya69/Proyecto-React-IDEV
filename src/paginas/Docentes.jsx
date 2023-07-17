import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import DocentesCard from "../componentes/DocentesCard";
import { Fade, Slide } from "react-awesome-reveal";

function Docentes() {
  useEffect(() => {
    document.title = "IADEV - Docentes"; // Cambia 'Nuevo título de la página' por el título deseado

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
          className="relative min-h-screen overflow-hidden bg-[url('https://images.reporteindigo.com/wp-content/uploads/2023/01/cine-de-animacion-pixelatl.jpg')] bg-cover bg-no-repeat p-12 text-start"
          style={{ height: "900px", backgroundPosition: "start center" }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-60">
            <div className="h-full ">
              <div className="my-40 lg:my-32">
                <div>
                  <Slide direction="up">
                    <h2 className="text-5xl sm:text-9xl my:10 mx-4 lg:text-[200px] text-white font-bold">
                      Docentes
                    </h2>
                  </Slide>
                </div>
                <Slide direction="right" damping={0.3}>
                  <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold px-4 mx-2 my-4 flex flex-wrap text-yellow-400">
                    TESJo
                  </h4>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Slide>
          <div className="flex justify-center items-center align-center">
            <div className="my-4">
              <Fade cascade={true} duration={1500}>
                <span className="font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  ">
                  Docentes
                </span>
              </Fade>
            </div>
          </div>
        </Slide>
      </div>
      <div className="flex flex-wrap justify-around my-10">
        <div>
          <DocentesCard
            imagen={
              "https://www.wikihow.com/images/6/68/Link-Within-a-Page-Using-HTML-Step-8.jpg"
            }
            nombre={"ALFREDO BARRAGAN MOLINA"}
            grado={"MAESTRIA EN DISEÑO DE MULTIMEDIA "}
            texto={
              "CEDULA EN TRAMITE SUPERIOR. TECNOLÓGICO DE ESTUDIOS SUPERIORES DE ECATEPEC LICENCIATURA EN “INGENIERÍA EN SISTEMAS COMPUTACIONALES” CEDULA: 4671236."
            }
            enlace={"https://www.linkedin.com/in/alfredo-barragan-b4b964164"}
            red={"LinkedIn"}
          />
        </div>
        <div className="flex">
          <DocentesCard
            imagen={
              // "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
              "Imagen del docente"
            }
            nombre={"Nombre del Docente:"}
            grado={"Grado actual que presenta:"}
            texto={
              "Biografía corta o similar:"
              // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem, ea quod alias et vel blanditiis soluta. Reprehenderitatibus maxime iusto, fuga dolores expedita adipisci laborum cumque dolorem perspiciatis minus fugit? Exercitationem culpa omnis accusantium dolorum!"
            }
            enlace={""}
            red={"Enlace a alguna red social pública"}
          />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Docentes;
