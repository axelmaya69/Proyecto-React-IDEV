import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import DestacadosCard from "../componentes/DestacadosCard";
import { Fade, Slide } from "react-awesome-reveal";

function Destacados() {
  useEffect(() => {
    document.title = "IADEV - Destacados"; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  const videos = [
    {
      embedUrl:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAnimacionTESJo%2Fvideos%2F477072454499010%2F&show_text=false&width=560&t=0",
      descripcion: "IADEV VIDEOS",
    },
    {
      embedUrl:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAnimacionTESJo%2Fvideos%2F477072454499010%2F&show_text=false&width=560&t=0",
      descripcion: "IADEV VIDEOS",
    },
    {
      embedUrl:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAnimacionTESJo%2Fvideos%2F477072454499010%2F&show_text=false&width=560&t=0",
      descripcion: "IADEV VIDEOS",
    },
    {
      embedUrl:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAnimacionTESJo%2Fvideos%2F477072454499010%2F&show_text=false&width=560&t=0",
      descripcion: "IADEV VIDEOS",
    },
    {
      embedUrl: "https://www.youtube.com/embed/JOObv4VKink",
      descripcion: "FADEV DIA X",
    },
    {
      embedUrl: "https://www.youtube.com/embed/ThW2CYXyBZs",
      descripcion: "FADEV 2023 - Día Uno",
    },
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
                    <h2 className="text-5xl sm:text-7xl my:10 mx-4 lg:text-9xl text-white font-bold">
                      Alumnos
                    </h2>
                  </Slide>
                </div>
                <Slide direction="right" damping={0.3}>
                  <h4 className="text-3xl sm:text-4xl lg:text-6xl lg:ml-2 font-semibold px-4 my-4 flex flex-wrap text-yellow-400">
                    Destacados
                  </h4>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center align-center">
          <div className="my-4">
            <Fade cascade={true} duration={1500}>
              <span className="font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  ">
                Alumnos Destacados
              </span>
            </Fade>
          </div>
        </div>

        <div className="mx-2">
          <Fade cascade={true} damping={0.3}>
            <h1 className="font-semibold text-lg lg:font-bold lg:text-xl mx-2 sm:mx-20 mt-4 sm:mt-20">
              En esta sección...
            </h1>
            <p className="mx-2 sm:mx-20 my-4 sm:mb-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur perferendis, quisquam, quaerat tempore praesentium
              vero deleniti impedit nobis aliquid rem facere, harum delectus
              distinctio accusantium beatae officia commodi dicta labore.
            </p>
            <DestacadosCard videos={videos} />
          </Fade>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Destacados;
