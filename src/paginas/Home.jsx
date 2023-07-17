import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import ArticleLeft from "../componentes/ArticleLeft";
import ArticleRight from "../componentes/ArticleRight";
import Slider from "../componentes/Slider";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import OnlyText from "../componentes/OnlyText";
import festival from "../imagenes/festival.jpg";

function Home() {
  useEffect(() => {
    document.title = "IADEV - Home"; // Cambia 'Nuevo título de la página' por el título deseado

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
    "https://esfadev.com/wp-content/uploads/2023/06/PortadaFB-1024x576.png",
    "https://iadevtesjo.files.wordpress.com/2021/06/nuria_tovar_mireles.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/alberto_ramos-1.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/abimael_gonzalez.png?w=1024", //Arreglo de imágenes para el Slider:
    "https://iadevtesjo.files.wordpress.com/2021/06/casa_anafre.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/osvaldo_pasillas_bernal.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/carolina_rubi_garcia_sanchez_armass.png?w=1024",
  ];

  return (
    // <div
    //   className="bg-fill bg-center sticky"
    //   style={{
    //     backgroundImage: `url(${festival})`,
    //   }}
    // >
    <div>
      <div>
        <Menu />
        <div
          // IMAGNE CON TEXTO DE FONDO
          className="relative  min-h-screen overflow-hidden bg-[url('https://images.reporteindigo.com/wp-content/uploads/2023/01/cine-de-animacion-pixelatl.jpg')] bg-cover  bg-no-repeat p-12 text-center"
          style={{ height: "900px", backgroundPosition: "start center" }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-60">
            <div className="flex h-full items-center justify-center">
              <div className="text-white">
                <Slide direction="left">
                  <h1 className="mb-4 text-6xl sm:text-[100px] lg:text-[200px] font-bold">
                    IADEV
                  </h1>
                </Slide>
                <Slide direction="up">
                  <h2 className="mb-6 text-xl sm:text-4xl lg:text-6xl font-semibold  px-4">
                    Lugar donde cohabitan las ideas
                  </h2>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCION DEL SLIDER */}
      <div className="  w-full">
        <div className=" justify-center">
          {images && images.length > 0 ? (
            // IMPORTA LAS IMAGENES DEFINIDAS EN EL ARREGLO VISTO MAS ARRIBA
            <Slider images={images} />
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
      </div>
      {/* CREACION DE GRID PARA ASIDE Y ARTICLE */}
      <div className="grid grid-cols-4 gap-2 my-10 mx-2 lg:relative">
        {/* INICIO DEL ASIDE */}
        <div className="col-span-4 lg:col-span-1 lg:col-start-1 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 rounded sm:px-4 lg:shadow-2xl lg:bg-slate-100 lg:border-2 flex flex-col justify-items-center">
          <Fade cascade={true} damping={0.3}>
            <div className="mt-20 flex flex-col justify-items-center m-4 lg:mt-0">
              <img
                className="m-10 md:m-20 lg:m-0 lg:my-4 w-auto h-auto"
                src="https://www.procine.cdmx.gob.mx/storage/app/uploads/public/644/fe2/954/644fe2954deea427920675.jpg"
                alt="animacion imagen"
              />
            </div>
            <div className=" flex-col justify-center align-center items-center hidden lg:flex">
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
          </Fade>
          {/* FIN DEL ASIDE */}
        </div>

        {/* INICIO DEL ARTICLE     */}
        <div className="col-span-4 lg:col-span-3 lg:col-start-2 rounded  min-h-screen  mb-36">
          <Fade cascade={true} damping={0.5}>
            <div id="p1">
              {/* SE IMPORTA EL COMPONENTE ArticleLeft Y SE LE PASAN SUS PROPIDADES DE 
              TITULO, IMAGEN, PARRAFO1 Y PARRAFO 2 */}
              <ArticleLeft
                title="Titulo 1"
                image={
                  "https://uvp.mx/uvpblog/wp-content/uploads/2021/05/Animacio%CC%81n.jpg"
                }
                parrafoUno={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, nihil nisi. Architecto, iure maiores optio vitae nostrum fu tur adipisicing elit. Odit harum fugit cumque perferendis incidunt temporibus sed? Possimus commodi est placeat laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias repellat nam velit nesciunt ipsa magnam assumenda enim sunt fugit. Nulla vel vero deserunt illo, nobis recusandae voluptatibus doloribus aliquam minima."
                }
                parrafoDos={
                  "Voluptatum aliquid sint temporibus autem ut quasi porro expedita.lorem Lorem ipsum dolor sit amet consectetur, adipisic e fugiat illo nemo quo, sint dolor quia! Quae, et. Provident, iste numquam.Lorem ipsum dolor,  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias repellat nam velit nesciunt ipsa magnam assumenda enim sunt fugit. Nulla vel vero deserunt illo, nobis recusandae voluptatibus doloribus aliquam minima. "
                }
              />
            </div>
            <div id="p2" class="snap-center">
              {/* SE IMPORTA EL COMPONENTE ArticleRight Y SE LE PASAN SUS PROPIDADES DE 
              TITULO, IMAGEN, PARRAFO1 Y PARRAFO 2 */}
              <ArticleRight
                title="Titulo 2"
                image={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbkXnZBJoiFZJo3N8TAZyE1Y54JGilGCPmwXBzEU43J8_1h0g8v0nt-dPwG4Cwkxjlxw&usqp=CAU"
                }
                parrafoUno={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, nihil nisi. Architecto, iure maiores optio vitae nostrum  r adipisicing elit. Odit harum fugit cumque perferendis incidunt temporibus sed? Possimus commodi est placeat laborum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias repellat nam velit nesciunt ipsa magnam assumenda enim sunt fugit. Nulla vel vero deserunt illo, nobis recusandae voluptatibus doloribus aliquam minima.."
                }
                parrafoDos={
                  "Voluptatum aliquid sint temporibus autem ut quasi porro expedita.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ne o, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias repellat nam velit nesciunt ipsa magnam assumenda enim sunt fugit. Nulla vel vero deserunt illo, nobis recusandae voluptatibus doloribus aliquam minima.sint dolor quia! Quae, et. Provident, iste numquam.Lorem ipsum dolor "
                }
              />
            </div>
          </Fade>
          <div>
            {/* SE IMPORTA EL COMPONENTE OnlyText Y SE LE PASAN SUS PROPIDADES DE 
              TITULO y TEXTO*/}
            <OnlyText
              title={"Solo Texto"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita asperiores nisi delectus ipsa tenetur doloremque, repellendus non! Nulla porro commodi, consectetur est suscipit, earum atque reiciendis assumenda amet ipsa nihil.lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non temporibus accusantium vitae molestias et eius quae nam ullam culpa id, ducimus laborum quos omnis asperiores magnam vel distinctio autem? Error! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, accusamus assumenda. Dolorem adipisci quas ipsa. Cum expedita quis praesentium dolor consectetur reprehenderit ea ex hic. Voluptates sapiente reprehenderit et voluptate?"
              }
            />
          </div>
          <Fade cascade={true}>
            <div id="p3">
              {/* SE IMPORTA DE NUEVO EL COMPONENTE ArticleLeft Y SE LE PASAN SUS PROPIDADES*/}
              <ArticleLeft
                title={"Otro párrafo"}
                image={
                  "https://i.blogs.es/9e2b7d/animacion-2023/1366_2000.jpeg"
                }
                parrafoUno={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptatem exercitationem aut sit quas velit architecto fugit eos similique unde, dolor placeat esse doloremque, fugiat ipsa ut, voluptate neque minima.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias repellat nam velit nesciunt ipsa magnam assumenda enim sunt fugit. Nulla vel vero deserunt illo, nobis recusandae voluptatibus doloribus aliquam minima."
                }
                parrafoDos={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptatem exercitationem aut sit quas velit architecto fugit eos similique unde, dolor placeat esse doloremque, fugiat ipsa ut, voluptate neque minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias repellat nam velit nesciunt ipsa magnam assumenda enim sunt fugit. Nulla vel vero deserunt illo, nobis recusandae voluptatibus doloribus aliquam minima. "
                }
              />
            </div>
          </Fade>
          {/* TERMINA ARTICLE */}
        </div>
        {/* TERMINA GRID */}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
