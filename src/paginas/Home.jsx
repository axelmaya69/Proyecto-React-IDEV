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
  const fondo =
    "https://www.esdesignbarcelona.com/sites/default/files/imagenes/animacion-digital-que-es-y-que-tipos-de-animacion-existen_0_1.jpg";

  return (
    // <div
    //   className="bg-fill bg-center"
    //   style={{
    //     backgroundImage: `url(${festival})`,
    //   }}
    // >
    <div>
      <div>
        <Menu />
        <div
          className="relative  min-h-screen overflow-hidden bg-[url('https://uzink.es/wp-content/uploads/2022/05/%C2%BFQue-poner-en-un-banner-5-ejemplos-de-banner-para-inspirartebrastemp-ejemplo-de-banner-creativofedex-ejemplo-de-bannerbanner-volkswagenbanner-ejemplo-mcdonalds-nissan-ejemplos-de-banner-copia.jpg')] bg-cover  bg-no-repeat p-12 text-center"
          style={{ height: "800px", backgroundPosition: "center center" }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-60">
            <div className="flex h-full items-center justify-center">
              <div className="text-white">
                <Slide direction="left">
                  <h1 className="mb-4 text-6xl lg:text-[200px] font-bold">
                    IADEV
                  </h1>
                </Slide>
                <Slide direction="up">
                  <h2 className="mb-6 text-xl lg:text-6xl font-semibold  px-4">
                    Lugar donde cohabitan las ideas
                  </h2>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  w-full">
        <div className=" justify-center">
          {images && images.length > 0 ? (
            <Slider images={images} />
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mx-2 lg:relative">
        <div className="col-span-4 m-2 md:mx-20 lg:mx-0 h-auto lg:col-span-1 lg:col-start-1 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 rounded p-2 sm:p-4 lg:shadow-2xl lg:bg-slate-100 my-10 lg:border-2">
          <Fade cascade={true} damping={0.3}>
            <img
              className="m-auto pt-5"
              src="https://www.procine.cdmx.gob.mx/storage/app/uploads/public/644/fe2/954/644fe2954deea427920675.jpg"
              alt="animacion imagen"
            />
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
          </Fade>
        </div>

        <div className="col-span-4 lg:col-span-3 lg:col-start-2 mb-36 ">
          <Fade cascade={true} damping={0.5}>
            <div id="p1">
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
            <OnlyText
              title={"Solo Texto"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita asperiores nisi delectus ipsa tenetur doloremque, repellendus non! Nulla porro commodi, consectetur est suscipit, earum atque reiciendis assumenda amet ipsa nihil.lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non temporibus accusantium vitae molestias et eius quae nam ullam culpa id, ducimus laborum quos omnis asperiores magnam vel distinctio autem? Error! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, accusamus assumenda. Dolorem adipisci quas ipsa. Cum expedita quis praesentium dolor consectetur reprehenderit ea ex hic. Voluptates sapiente reprehenderit et voluptate?"
              }
            />
          </div>
          <Fade cascade={true}>
            <div id="p3">
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
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
