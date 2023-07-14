import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import FadevComp from "../componentes/FadevComp";
import InvitadosCard from "../componentes/InvitadosCard";
import ArtStation from "../botones/ArtStation";
import Behance from "../botones/Behance";
import Facebook from "../botones/Facebook";
import Instagram from "../botones/Instagram";
import LinkedIn from "../botones/LinkedIn";
import WebSite from "../botones/WebSite";
import YouTube from "../botones/YouTube";
import Teams from "../botones/Teams";
import { Fade, Slide } from "react-awesome-reveal";
import GridImg from "../componentes/GridImg";
import DestacadosCard from "../componentes/DestacadosCard";

function Veintiuno() {
  useEffect(() => {
    document.title = "FADEV - 2021"; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);

  const images = [
    "https://iadevtesjo.files.wordpress.com/2021/06/nuria_tovar_mireles.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/alberto_ramos-1.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/abimael_gonzalez.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/casa_anafre.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/osvaldo_pasillas_bernal.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/roxanne_soledad_escutia_gonzalez.png?w=1024",
    "https://iadevtesjo.files.wordpress.com/2021/06/carolina_rubi_garcia_sanchez_armass.png?w=1024",
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
                    <h2 className="text-7xl sm:text-9xl my:10 mx-4 lg:text-[200px] text-white font-bold">
                      FADEV
                    </h2>
                  </Slide>
                </div>
                <Slide direction="right" damping={0.3}>
                  <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold px-4 my-4 flex flex-wrap text-yellow-400">
                    2021
                  </h4>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Slide direction="left">
        <div>
          <FadevComp
            titulo={"FADEV - 2021"}
            imagen={
              "https://iadevtesjo.files.wordpress.com/2021/06/perfil.png?w=1024"
            }
            p1={
              "Como cada año la División de Ingeniería en Animación Digital y Efectos Visuales adscrita al Tecnológico de Estudios Superiores de Jocotitlán organiza el Festival de Animación Digital y Efectos Visuales (FADEV)."
            }
            p2={
              "Este año nuevamente tenemos edición online, con grandes invitado, talleres y proyecciones de trabajos que nos dan una idea del trabajo realizado durante este tiempo."
            }
            p3={`El tema de este año es: «La industria de la animación», teniendo diferentes puntos de vista de cómo se cera la industria día con día dentro y fuera el país, cuáles son las oportunidades laborales actuales y cómo está el panorama general.`}
            p4={
              "La IADEV te invita a participar en la edición 2021 del FADEV que se llevará a cabo durante los días 30 de junio, 01 y 02 de julio, revisa el programa para que no te pierdas de nada."
            }
          />
        </div>
      </Slide>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-0 lg:relative ">
        <div className="col-span-1 lg:col-start-1 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 roundedborder sm:border-2 rounded p-2 sm:p-4 shadow-2xl lg:min-h-screen bg-slate-100 sm:mx-20 lg:mx-2">
          <Fade cascade={true}>
            <div className="flex flex-col justify-center items-center text-white text-2xl ">
              <img
                src="https://iadevtesjo.files.wordpress.com/2021/06/perfil.png?w=1024"
                alt="fadev-2021"
                className="p-2 mb-4 rounded pb-5 border-b-2 border-yellow-300"
              />

              <div className="flex justify-center items-center flex-col w-full rounded py-4">
                <button
                  className="bg-gradient-to-r from-indigo-500 to-emerald-500 font-semibold shadow-2xl text-sm xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                  onClick={() => (window.location.href = "#invitados")}
                >
                  Invitados
                </button>
                <button
                  className="bg-gradient-to-r from-yellow-500 to-red-700 font-semibold shadow-2xl text-sm xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                  onClick={() => (window.location.href = "#programa")}
                >
                  Programa
                </button>
                <button
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold shadow-2xl text-sm xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                  onClick={() => (window.location.href = "#conferencias")}
                >
                  Conferencias
                </button>
                <button
                  className="bg-gradient-to-r from-indigo-500 to-blue-950 font-semibold shadow-2xl text-sm xl:text-xl h-12 text-center justify-center items-center px-2 my-1 w-40 sm:text-xl transition-all duration-300 rounded-full lg:hover:scale-110"
                  onClick={() => (window.location.href = "#talleres")}
                >
                  Talleres
                </button>
              </div>
            </div>
          </Fade>
        </div>

        <div className="col-span-1 lg:col-start-2 lg:col-span-3 lg:mb-56 border lg:border-2 rounded  shadow-2xl min-h-screen bg-white sm:mx-20 lg:mx-10 mx-2 ">
          <div className="my-6" id="invitados">
            <span className="font-bold text-xl mx-2 xl:mx-10 xl:text-3xl py-1 px-2 border-b-2 border-orange-400">
              Invitados
            </span>
            <InvitadosCard
              imagen={
                "https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_abimael-3.png?w=1024"
              }
            />
            <div className="flex flex-wrap justify-center pb-4 xl:pb-10">
              <LinkedIn
                link={"https://www.linkedin.com/in/abimael-gonzalez-42a00697/"}
              />
              <ArtStation link={"https://www.artstation.com/avii"} />
            </div>
            <InvitadosCard
              imagen={
                "https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_rubi-1.png?w=1024"
              }
            />
            <div className="flex flex-wrap justify-center pb-4 xl:pb-10">
              <Behance link={"https://www.behance.net/rArmass"} />
              <LinkedIn
                link={"https://www.linkedin.com/in/rub%C3%AD-a-70406b147"}
              />
              <WebSite link={"https://armassproductions.com/"} />
              <Instagram link={"https://www.instagram.com/rubiarmass/"} />
              <ArtStation link={"https://www.artstation.com/rubiarmass"} />
            </div>

            <InvitadosCard
              imagen={
                "https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_nuria-1.png?w=1024"
              }
            />
            <div className="flex flex-wrap justify-center pb-4 xl:pb-10">
              <WebSite link={"https://www.nuriamin.com/"} />
              <ArtStation link={"https://www.artstation.com/nuria_min"} />
              <Instagram link={"https://instagram.com/nuriamin_art/"} />
            </div>
            <InvitadosCard
              imagen={
                "https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_osvaldo-1.png?w=1024"
              }
            />
            <div className="flex flex-wrap justify-center pb-4 xl:pb-10">
              <YouTube link={"https://www.youtube.com/c/OsvaldoPasillas"} />
              <ArtStation link={"https://www.artstation.com/vinman99999"} />
              <Instagram link={"https://www.instagram.com/osvaldo.pasillas"} />
            </div>
            <InvitadosCard
              imagen={
                "https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_casa-anafre-1.png?w=1024"
              }
            />
            <div className="flex flex-wrap justify-center pb-4 xl:pb-10">
              <WebSite link={"https://www.casaanafre.com/"} />
              <Facebook link={"https://www.facebook.com/CasaAnafre"} />
              <YouTube
                link={
                  "https://www.youtube.com/channel/UC7l5QasY8PTgs-eCET8tiTQ"
                }
              />
            </div>
            <InvitadosCard
              imagen={
                "https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_roxi-1.png?w=1024"
              }
            />
            <div className="flex flex-wrap justify-center pb-4 xl:pb-10">
              <Instagram link={"https://www.instagram.com/la_cringe_queen/"} />
            </div>
            <InvitadosCard
              imagen={
                "https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_alberto-3.png?w=1024"
              }
            />
          </div>

          <div id="programa" className="my-6">
            <span className="font-bold text-xl mx-2 xl:mx-10 xl:text-3xl py-1 px-2 border-b-2 border-blue-400">
              Programa
            </span>
            <div className="flex flex-wrap justify-center py-4 pb-4 xl:pb-10">
              <InvitadosCard
                imagen={
                  "https://iadevtesjo.files.wordpress.com/2021/06/programa-fadev-2021.png?w=796"
                }
              />
            </div>
          </div>
          <div id="conferencias" className="mt-6">
            <span className="font-bold text-xl mx-2 xl:mx-10 xl:text-3xl py-1 px-2 border-b-2 border-green-400">
              Conferencias
            </span>
            <p className="flex justify-center flex-wrap flex-row  xl:py-4 items-center mx-2 xl:mx-10 xl:text-xl my-4 pb-4">
              Las conferencias se realizarán en vivo vía streaming por el canal
              oficial de la IADEV. Tienen una duración aproximada de 40 minutos
              más la sesión de Q&A a los ponentes, posterior a la transmisión
              del video se subirá la grabación a esta plataforma.
            </p>

            <GridImg images={images} />
          </div>
          <div id="talleres" className="mt-6">
            <span className="font-bold text-xl mx-2 xl:mx-10 xl:text-3xl px-2 border-b-2 border-violet-400">
              Talleres
            </span>
            <p className="flex justify-center flex-wrap flex-row xl:py-4 items-center mx-2 xl:mx-10 xl:text-xl my-4 pb-4">
              Los talleres se realizarán vía Teams, el acceso se activará 15
              minutos antes de cada taller. Solamente se debe dar click en el
              ícono y se podrá acceder a él.
              <br></br>
              Dentro de cada taller se realizará registro de los asistentes. Los
              talleres quedarán grabados.
            </p>
            <InvitadosCard
              imagen={
                "https://iadevtesjo.files.wordpress.com/2021/06/taller-abiel-1.png?w=1024"
              }
            />
            <div className="flex flex-wrap justify-center pb-4 xl:pb-10">
              <Facebook link={"https://fb.watch/6tOkzgPkWM/"} />
            </div>
            <InvitadosCard
              imagen={
                "https://iadevtesjo.files.wordpress.com/2021/06/taller-fran.png?w=1024"
              }
            />
            <div className="flex flex-wrap justify-center pb-4 xl:pb-10">
              <Teams
                link={
                  "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3AZljLf6fpi7hc3wpWKXpiPZojieuLq1vCDYWVcWuVPkk1%40thread.tacv2%2F1625019801100%3Fcontext%3D%257b%2522Tid%2522%253a%2522885cff60-5507-4fc0-accd-b2b25d3bc6ac%2522%252c%2522Oid%2522%253a%252235550e47-3098-4d26-870f-ab93ddff6a33%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=61aba585-3cbe-4fdc-a920-3c0420a24635&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
                }
              />
            </div>
            <InvitadosCard
              imagen={
                "https://iadevtesjo.files.wordpress.com/2021/06/taller-diana.png?w=1024"
              }
            />
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Veintiuno;
