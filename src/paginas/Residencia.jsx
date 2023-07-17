import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import { Fade, Slide } from "react-awesome-reveal";

function Residencia() {
  useEffect(() => {
    document.title = "IADEV - Residencia Profesional"; // Cambia 'Nuevo título de la página' por el título deseado

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
                    <h2 className="text-5xl sm:text-7xl my:10 mx-4 lg:text-9xl text-white font-bold">
                      Residencia
                    </h2>
                  </Slide>
                </div>
                <Slide direction="right" damping={0.3}>
                  <h4 className="text-3xl sm:text-4xl lg:text-6xl lg:ml-2 font-semibold px-4 my-4 flex flex-wrap text-yellow-400">
                    Profesional
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
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  shadow-2xl">
              Residencia Profesional
            </span>
          </Fade>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 mx-2 lg:relative my-10">
        <div className="col-span-4 h-auto lg:col-span-1 lg:col-start-1 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 rounded p-2 sm:p-4 lg:shadow-2xl bg-white lg:border-2">
          <div className="flex flex-col justify-items-center m-4 lg:mt-0">
            <img
              src="https://queretaro.tecnm.mx/wp-content/uploads/2022/11/residencias-pro-1024x934.png"
              alt="residencia profesional"
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
        </div>
        <div className="col-span-1 lg:col-span-3 lg:col-start-2 border sm:border-2 rounded p-2 sm:p-4 shadow-2xl min-h-screen bg-white mb-56 sm:mx-20 lg:mx-10">
          <div className="sm:mx-10  ">
            <h4 className="ml-2 font-bold my-4 text-lg  2xl:text-2xl">
              Acerca del trámite
            </h4>
            <p className="mx-2 mb-4 2xl:text-xl">
              Es una asignatura del plan de estudios de la Licenciatura cursada
              por el alumno que complementa su formación profesional en el
              Tecnológico y consiste en la aplicación de los conocimientos en el
              campo laboral al desarrollar un proyecto en alguna empresa.
            </p>
            <h5 className="ml-2 font-bold my-2 2xl:text-2xl">Usuarios:</h5>
            <p className="mx-2 mb-4  2xl:text-xl">
              Alumnos que han acreditado el 80% del total de créditos de la
              carrera, que estén reinscritos conforme al reglamento de alumnos y
              que estén autorizados conforme el FO-TESJo-30.
            </p>
            <h5 className="ml-2 font-bold my-2 2xl:text-2xl">
              Nota de advertencia
            </h5>
            <ul className="mx-4 mb-4 list-disc  2xl:text-xl">
              <li className="mx-2">
                Una vez dada de alta la Residencia Profesional ya no se puede
                dar de baja por ningún motivo y solo se puede cursar una sola
                vez.
              </li>
              <li className="mx-2">
                Se tiene que cumplir un periodo de 4 meses y cubrir 500 horas.
              </li>
              <li className="mx-2">
                Es necesario desarrollar un proyecto acorde al perfil del alumno
                o de la alumna por el que será evaluado.
              </li>
            </ul>
            <h2 className="ml-2 font-bold my-2 2xl:text-2xl">
              Documentos a obtener
            </h2>
            <p className="mx-2  2xl:text-xl">
              Carta de Liberación de la Residencia Profesional.
            </p>
            <p className="mx-2 2xl:text-xl">
              Forma parte del certificado de estudios.
            </p>

            <h5 className="ml-2 font-bold my-2 2xl:text-2xl">Vigencia</h5>
            <p className="mx-2 2xl:text-xl">
              Como es una asignatura más del plan de estudios tiene validez
              indefinida una vez que ha sido acreditada.
            </p>

            <h4 className="mx-2 font-bold mt-4 mb-4 2xl:text-2xl">
              Documentación necesaria:
            </h4>
            <p className="mx-2 my-2 font-semibold 2xl:text-xl">
              ¿Qué documentos requieres para la autorización y alta de la
              residencia profesional?
            </p>
            <ol className="mx-4 mb-4 list-decimal  2xl:text-xl">
              <li className="mx-2 my-2">
                FO-TESJo-30 solicitud de reinscripción autorizada por el Jefe de
                División.
              </li>
              <li className="mx-2 my-2">
                Oficio de aceptación indicando Nombre, número de control y
                carrera del alumno, nombre del proyecto a desarrollar, nombre
                del asesor externo, fecha de inicio, fecha de término y total de
                horas.
              </li>
              <li className="mx-2 my-2">FO-TESJo-135.</li>
            </ol>
            <p className="mx-2 my-2 font-semibold 2xl:text-xl">
              ¿Qué documentos requieres durante el Desarrollo?
            </p>
            <ol className="mx-4 mb-4 list-decimal  2xl:text-xl">
              <li className="mx-2 my-2">
                FO-TESJo-64 evaluación parcial de los asesores de Residencia
                Profesional.
              </li>
              <li className="mx-2 my-2">
                FO-TESJo-67 por una sola ocasión a partir del tercer mes de
                Residencia Profesional.
              </li>
            </ol>
            <p className="mx-2 my-2 font-semibold  2xl:text-xl">
              ¿Qué documentos requieres para la liberación?
            </p>
            <ol className="mx-4 mb-4 list-decimal 2xl:text-xl">
              <li className="mx-2">
                Oficio de terminación indicando los mismos datos que la carta de
                aceptación en hoja membretada.
              </li>
            </ol>
            <div>
              <h6 className="ml-2 font-bold my-2 text-md 2xl:text-2xl">
                Costos
              </h6>
              <p className="mx-2  2xl:text-xl">
                El trámite para el alta y liberación de la Residencia
                Profesional es completamente gratuito.
              </p>
              <h6 className="ml-2 font-bold my-2 text-md 2xl:text-2xl">
                Duración:
              </h6>
              <p className="mx-2 mb-3  2xl:text-xl">
                El periodo de alta es variable de acuerdo al semestre
                correspondiente, estas fechas son establecidas por la
                Subdirección de Servicios Escolares en coordinación con el
                Departamento de Servicio Social y Residencia Profesional, con
                base en el calendario escolar vigente y son difundidas de forma
                directa con los alumnos o mediante anuncios, generalmente son
                los primeros días al inicio de cada semestre. El alumno deberá
                cubrir como mínimo 500 horas durante un lapso de 4 meses.
              </p>
            </div>
            <span className="mx-2 font-bold my-4 2xl:text-xl">Lugar</span>
            <p className="mx-2 my-2  2xl:text-xl">
              Tecnológico de Estudios Superiores de Jocotitlán.
            </p>
            <span className="mx-2 font-bold my-4 2xl:text-xl">Oficinas</span>
            <p className="mx-2  2xl:text-xl  my-2">
              Edificio "B" Departamento de Servicio Social y Residencia
              Profesional.
            </p>
            <span className="mx-2 font-bold my-4 py-4 2xl:text-xl">
              Horario de atención
            </span>
            <p className="mx-2 mb-4  2xl:text-xl my-2">
              Lunes a Viernes de 9:00 a 18:00 horas.
            </p>
            <div className="flex flex-wrap mb-8">
              <a
                href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/Estudiantes/Servicos%20Escolares/Servicio%20Social%20y%20Residencia%20Profesional/FO-TESJO-064.doc"
                target="_blank"
                className="text-blue-600 border-b border-blue-800 m-4 2xl:text-xl"
              >
                FO-TESJO-064
              </a>
              <a
                href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/2_FO-TESJo-067.doc"
                target="_blank"
                className="text-blue-600 border-b border-blue-800 m-4 2xl:text-xl"
              >
                FO-TESJO-067
              </a>
              <a
                href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/3_FO-TESJo-135.doc"
                target="_blank"
                className="text-blue-600 border-b border-blue-800 m-4 2xl:text-xl"
              >
                FO-TESJO-135
              </a>
              <a
                href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/4_Lineamientos.pdf"
                target="_blank"
                className="text-blue-600 border-b border-blue-800 m-4 2xl:text-xl"
              >
                Lineamientos
              </a>
              <a
                href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/5_IT-TESJo-26(1).docx"
                target="_blank"
                className="text-blue-600 border-b border-blue-800 m-4 2xl:text-xl"
              >
                IT-TESJo-26
              </a>
              <a
                href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/6_Carta%20de%20aceptacio%CC%81n%20de%20RP.docx"
                target="_blank"
                className="text-blue-600 border-b border-blue-800 m-4 2xl:text-xl"
              >
                Oficio de Aceptación
              </a>
              <a
                href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/7_CARTA%20DE%20LIBERACIO%CC%81N%20RP.doc"
                target="_blank"
                className="text-blue-600 border-b border-blue-800 m-4 2xl:text-xl"
              >
                Carta de Liberación
              </a>
              <a
                href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/8_Portada%20del%20proyecto%20de%20Residencia%20Profesional.docx"
                target="_blank"
                className="text-blue-600 border-b border-blue-800 m-4 2xl:text-xl"
              >
                Portada de Proyecto de Residencia Profesional
              </a>
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

export default Residencia;
