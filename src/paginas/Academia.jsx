import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer"; //IMPORTACION DE IMAGENES Y COMPONENTES
import MiImagen from "../imagenes/portada_web.jpg";
import AcademiaCard from "../componentes/AcademiaCard";
import OrderList from "../componentes/OrderList";
import { Fade, Slide } from "react-awesome-reveal";
import Italica, { Negrita } from "../componentes/Letras";
import Reticula from "../assets/ReticulaIADEV.pdf";

function Academia() {
  useEffect(() => {
    document.title = "IADEV - Academia"; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  // ARREGLO DE TEXTO PARA COLOCARLO EN EL COMPONENTE DE LISTA ORDENADA
  const items = [
    "Los egresados y las egresadas serán capaces de comprender y adaptar los Recursos Tecnológicos vigentes en la industria de la Animación Digital y Efectos Visuales dentro del sector público y privado, para satisfacer las necesidades con un sentido creativo e innovador.",
    "Los egresados y las egresadas serán capaces de planear, crear, desarrollar e implementar proyectos digitales, artísticos y tecnológicos, con liderazgo y ética profesional, a través del emprendimiento o en proyectos empresariales en el sector público o privado.",
    "A través de la participación en equipos multidisciplinarios, los egresados y las egresadas serán capaces de aplicar arte, tecnología y narrativa para la resolución de problemas en la industria del entretenimiento y medios digitales.",
    "Los egresados y las egresadas tendrán la capacidad de gestionar, administrar, dirigir y supervisar proyectos audiovisuales con visión humanística, ética, respetando la propiedad intelectual con un sentido sustentable y global.",
    "Los egresados y las egresadas, conscientes de los cambios tecnológicos, se actualizan de manera constante e independiente en el uso de tecnologías emergentes, aplicadas a la industria de la animación, el entretenimiento y la comunicación social para el desarrollo innovador de proyectos.",
  ];
  // ARREGLO 2 PARA LISTA ORDENADA
  const perfilEgreso = [
    "Crea gráficas computacionales de calidad utilizando software especializado.",
    "Implementa técnicas y procesos de producción de actualidad en las industrias de la animación digital y los efectos visuales.",
    "Interpreta la estructura narrativa de proyectos de animación digital y efectos visuales que sean aplicados en la industria.",
    "Crea efectos visuales utilizando software especializado de producción y post- producción.",
    "Aplica los lenguajes de programación utilizados en el desarrollo de software para las industrias de la animación digital y los efectos visuales.",
    "Desarrolla herramientas de software para facilitar y optimizar los procesos de producción y post-producción de la animación digital y los efectos visuales.",
    "Desarrolla modelos de simulación física en entornos gráficos computacionales aplicables a proyectos de animación digital y efectos visuales.",
    "Desarrolla modelos matemáticos para la representación de gráficas por Computadora.",
    "Aplica modelos psicológicos para recrear el comportamiento de personajes en entornos de animación digital.",
    "Integra infraestructura computacional que permita el desarrollo de proyectos de animación digital.",
    "Desarrolla una visión emprendedora y creativa para detectar áreas de oportunidad que le permitan implementar proyectos innovadores y crear nuevas empresas.",
    "Desempeña sus actividades profesionales, considerando los aspectos legales, éticos, humanos y sociales, para sustentar el mejoramiento de su entorno.",
    "Participa activamente en proyectos de investigación y desarrollo tecnológico para fortalecer las industrias de la animación digital y los efectos visuales.",
    "Gestiona proyectos multidisciplinarios para optimizar el uso de recursos.",
  ];
  return (
    <div>
      <header>
        {/* IMPORTA MENU RESPONSIVE */}
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
                    <h2 className="text-5xl sm:text-7xl my:10 mx-4 lg:text-9xl text-white font-bold">
                      Ingeniería en Animacion Digital
                    </h2>
                  </Slide>
                </div>
                <Slide direction="right" damping={0.3}>
                  <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold px-4 my-4 flex flex-wrap text-yellow-400">
                    y Efectos Visuales
                  </h4>
                  <h5 className="text-xl sm:text-2xl lg:text-4xl font-bold px-4 my-4 text-white">
                    ACADEMIA
                  </h5>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:mx-40 ">
        <div className="flex flex-col items-center justify-center border sm:border-2 rounded p-2 sm:p-4 shadow-2xl my-4 mx-2 ">
          <Fade cascade={true} damping={0.5}>
            <h1 className="p-5 text-3xl md:text-5xl font-bold lg:text-8xl lg:py-16">
              IADEV
            </h1>
            <h2 className="p-5 text-xl md:text-3xl flex justify-between font-bold text-center">
              INGENIERÍA EN ANIMACIÓN DIGITAL Y EFECTOS VISUALES
            </h2>
          </Fade>
        </div>

        <div className="grid grid-cols-4 gap-4 sm:mx-5 my-10 mx-2 lg:relative min-h-screen">
          <div className="col-span-4 lg:col-span-1 sm:mx-20 lg:mx-2 col-start-1 px-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 lg:bg-slate-100 lg:border-2 rounded p-2 sm:p-4 lg:shadow-2xl ">
            <img className="flex max-w-full" src={MiImagen} alt="tesjo" />
            <Fade cascade={true}>
              <p className="px-2 py-2 my-10 font-semibold">
                La carrera de IADEV motiva y potencializa proyectos de los
                estudiantes a lo largo de su estadía, logrando desarrollar los
                siguientes objetivos.
              </p>
            </Fade>

            <div className="lg:flex hidden lg:flex-col justify-center align-center items-center">
              <span className="font-bold px-4 py-3 text-xl">Ir a:</span>
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
          <div className="col-span-4 lg:col-span-3 lg:col-start-2 bg-white lg:px-4 lg:mb-56 sm:mx-20 lg:mx-10">
            <div className="border sm:border-2 rounded p-2 sm:p-4 shadow-2xl  ">
              <Fade cascade={true}>
                <AcademiaCard
                  titulo={"Objetivo General"}
                  parrafo={
                    "Formar profesionistas capaces de adaptar, desarrollar y aplicar recursos tecnológicos en la producción de animación digital y efectos visuales, impulsando la tecnología para responder a los desafíos de las industrias de la animación digital y los efectos visuales, en un contexto global, multidisciplinario y sustentable."
                  }
                />
              </Fade>
              <div className=" py-2">
                <Fade cascade={true}>
                  <h4 className="font-bold text-xl">Objetivos Educacionales</h4>
                  <OrderList items={items} />
                </Fade>
              </div>
            </div>
            <div className="mt-10 py-2 border sm:border-2 rounded p-2 sm:p-4 shadow-2xl ">
              <Fade cascade={true}>
                <h3 className=" font-bold text-xl py-2 pt-3 ">
                  Perfil de Egreso
                </h3>

                <OrderList items={perfilEgreso} />
              </Fade>
            </div>
            <div className="border sm:border-2 rounded p-2 sm:p-4 shadow-2xl  mt-10">
              <Fade cascade={true}>
                <h4 className=" font-bold text-xl py-2 pt-3">Campo Laboral</h4>
                <p className="p-2 ">
                  El Ingeniero en Animación Digital y Efectos Visuales
                  desarrolla su actividad profesional en la:
                </p>
                <ul className=" mx-2 pl-5 list-disc">
                  <li className="py-2 ">
                    <Negrita negrita={"Industria cinematográfica: "} />
                    en las áreas de dirección, producción, dirección de arte,
                    animación, efectos especiales, guionismo.
                  </li>
                  <li className="py-2 ">
                    <Negrita negrita={"Industria de la comunicación: "} /> radio
                    y televisión.
                  </li>
                  <li className="py-2 ">
                    <Negrita negrita={"Industria del videojuego: "} />{" "}
                    cinemática, diseño de personajes, modelado 3D, diseño de
                    arte.
                  </li>
                  <li className="py-2 ">
                    <Negrita negrita={"Industria de la construcción: "} />{" "}
                    diseño arquitectónico.
                  </li>
                </ul>
                <p className="py-2 mb-10 px-2">
                  Los egresados y las egresadas serán capaces de adaptar los
                  recursos tecnológicos vigentes en la industria de la animación
                  digital y efectos visuales dentro del sector público, privado
                  y social, para satisfacer las necesidades con un sentido
                  creativo e innovador de una manera eficaz y eficiente con
                  actitud propositiva.
                  <br></br>
                  El ingeniero en Animación Digital y Efectos Visuales es capaz
                  de identificar, formular, analizar, sintetizar, diseñar,
                  desarrollar y conducir proyectos en una diversidad de ramas
                  del sector productivo, tales como:
                  <Italica
                    italica={
                      "Videojuegos, Pre, pro y postproducción de Audio y Video, Fotografía, Modelado 3D, contenido digital en campañas de publicidad y páginas web, Realidad Virtual, Realidad Aumentada, así como la creación de materiales multimedia para promover el arte, la cultura, la ciencia, la tecnología, los deportes y todas las actividades del quehacer humano"
                    }
                  />
                  aplicando su conocimiento técnico y su sensibilidad artística
                  de forma humana, ética y responsable.
                </p>
              </Fade>
            </div>
            <div className=" border sm:border-2 rounded p-2 sm:p-4 shadow-2xl mt-10">
              <h6 className="py-3">
                <a
                  href={Reticula}
                  target="_blank"
                  className="text-xl lg:text-xl text-blue-400 hover:text-blue-700 border-b border-blue-400 font-semibold"
                >
                  Retícula Ingeniería en Animación Digital y Efectos Visuales
                </a>
              </h6>

              <iframe
                src={Reticula}
                frameborder="0"
                className="lg:min-h-screen lg:w-full hidden lg:block"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Academia;
