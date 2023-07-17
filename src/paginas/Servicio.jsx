import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

function Servicio() {
  useEffect(() => {
    document.title = "IADEV - Servicio Social"; // Cambia 'Nuevo título de la página' por el título deseado

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
                      Servicio
                    </h2>
                  </Slide>
                </div>
                <Slide direction="right" damping={0.3}>
                  <h4 className="text-3xl sm:text-4xl lg:ml-2 lg:text-6xl font-semibold px-4 my-4 flex flex-wrap text-yellow-400">
                    Social
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
              Servicio Social
            </span>
          </Fade>
        </div>
      </div>

      {/* CREACION DE GRID PARA ASIDE Y ARTICLE */}
      <div className="grid grid-cols-1 lg:grid-cols-4 mx-2 lg:relative my-10">
        {/* INICIO DEL ASIDE */}
        <div className="col-span-4 h-auto lg:col-span-1 lg:col-start-1 mx-2 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-56 rounded p-2 sm:p-4 lg:shadow-2xl bg-white lg:border-2">
          <div className="flex flex-col justify-items-center m-4 lg:mt-0">
            <img
              src="https://www.gob.mx/cms/uploads/document/main_image/46398/Servicio_social.jpg"
              alt="servicio social img"
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
          {/* TEMINA EL ASIDE */}
        </div>

        {/* INICIO DEL ARTICLE */}
        <div className="col-span-1 lg:col-span-3 lg:col-start-2 border sm:border-2 rounded p-2 sm:p-4 shadow-2xl min-h-screen bg-white mb-56 sm:mx-20 lg:mx-10">
          <div>
            <h4 className="ml-2 font-bold my-4 text-lg">Acerca del trámite</h4>

            <span className="ml-2 font-bold my-2">Descripción:</span>
            <p className="mx-2 mb-4">
              Es un conjunto de actividades de carácter temporal y obligatorio
              que prestan los estudiantes, donde aplican los conocimientos
              científicos, técnicos y humanísticos adquiridos en su formación.
            </p>
            <h5 className="ml-2 font-bold my-2">Nota de advertencia</h5>
            <ul className="mx-4 mb-4 list-disc">
              <li className="mx-2">
                Haber acreditado el 50% del total de créditos de tu carrera para
                iniciar el tramite.
              </li>
              <li className="mx-2">
                Cumplir con un periodo de prestación de mínimo de 6 meses y
                máximo 2 años, acumulando 500 horas.
              </li>
              <li className="mx-2">
                Es un requisito indispensable para liberar tu constancia de
                Servicio Social para asignación de Residencia Profesional, el
                trámite de titulación y de la Cédula Profesional.
              </li>
              <li className="mx-2">
                Tienes que realizar primero tu servicio social para poder
                realizar la Residencia Profesional.
              </li>
            </ul>
            <h5 className="ml-2 font-bold my-2">Usuarios:</h5>
            <p className="mx-2 mb-4">
              Alumnos que hayan acreditado el 50% del total de Créditos de la
              Carrera.
            </p>
            <h6 className="ml-2 font-bold my-2">Documentos que se obtienen</h6>
            <p className="mx-2 mb-4">
              Acreditación y/o constancia de liberación de Servicio Social.
            </p>
            <h6 className="ml-2 font-bold my-2">Vigencia</h6>
            <span className="mx-2 mb-4">2 años</span>

            <div>
              <h1 className="ml-2 font-bold my-2 text-lg">
                Documentación necesaria
              </h1>
              <p className="mx-2">
                ¿Qué documentos requieres para el trámite de alta en institución
                pública?
              </p>
              <ol className="mx-4 mb-4 list-decimal">
                <li className="mx-2">
                  Solicitud Registro/Autorización.
                  <a
                    className="text-blue-600 border-b px-1 border-blue-800"
                    href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/SOLICITUD%20REGISTRO-AUTORIZACION.xls"
                  >
                    Registro de autorización
                  </a>
                </li>
                <li className="mx-2">Seguro Facultativo o seguro médico.</li>
                <li className="mx-2">
                  Carta de presentación - aceptación emitida en el Departamento
                  de Servicio Social y Residencia Profesional.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="ml-2 font-bold my-2 text-lg">
                Documentos requeridos para la liberación
              </h2>
              <ol className="mx-4 mb-4 list-decimal">
                <li className="mx-2">Informes trimestrales</li>
                <li className="mx-2">
                  Informe global
                  <a
                    className="text-blue-600 px-1 border-b border-blue-800"
                    href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/serviciosocial%20y%20residencia/SS/3_INFORME%20GLOBAL%20DE%20SERVICIO%20SOCIAL%20para%20imprimir.pdf"
                    target="_blank"
                  >
                    Informe global
                  </a>
                </li>
                <li className="mx-2">
                  Carta de Término y Evaluación de Servicio Social.
                  <a
                    className="text-blue-600 px-1 border-b border-blue-800"
                    href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/CARTA%20DE%20TERMINO%20Y%20EVALUACIO%CC%81N%20DE%20SS.doc"
                    target="_blank"
                  >
                    Formato de Carta de Término y Evaluación de Servicio Social
                  </a>
                </li>
              </ol>
              <h4 className="mx-2 font-semibold mb-4">
                ¿Qué documentos requieres para liberar tu servicio social
                conforme al Artículo 21 del Servicio Social y 91 del Reglamento
                de la Ley Reglamentaria del Artículo 5 Constitucional?
              </h4>
              <ol className="mx-4 mb-4 list-decimal">
                <li className="mx-2">
                  Informe de actividades elaborado por el interesado, mínimo una
                  cuartilla, avalado por el jefe inmediato superior, en papel
                  membretado, firma y sello.
                </li>
                <li className="mx-2">
                  Copia del último talón de cheque y/o comprobante de ingresos.
                </li>
                <li className="mx-2">Constancia de antigüedad actualizada.</li>
                <li className="mx-2">
                  Solicitud Registro/Autorización ( Para realizar el Servicio
                  Social en Empresa, Escuela Privada, Fundación Asociación
                  Civil, etc.)
                </li>
              </ol>
              <h5 className="mx-2 font-semibold mb-4">
                ¿Qué documentos adicional requieres para obtener la autorización
                en Sector Privado?
              </h5>
              <ol className="mx-4 mb-4 list-decimal">
                <li className="mx-2">
                  Una Solicitud de incorporación en hoja membretada.
                  <a
                    className="text-blue-600 px-1 border-b border-blue-800"
                    href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/Estudiantes/Servicos%20Escolares/Servicio%20Social%20y%20Residencia%20Profesional/SOLICITUD%20DE%20INCORPORACION.doc"
                    target="_blank"
                  >
                    Solicitud de Incorporación
                  </a>
                </li>

                <ul className="mx-4 mb-4 list-disc">
                  <li className="mx-2">
                    Dirigida a la Mtra. Nuria Elda Olascoaga Rosas. Directora de
                    Apoyo a la Eduación de la Secretaría de Educación del
                    Gobierno del Estado de México.
                  </li>
                  <li className="mx-2">Denominación y giro de la Empresa.</li>
                  <li className="mx-2">
                    Justificación, alcance e impacto del proyecto que se va a
                    realizar.
                  </li>
                  <li className="mx-2">
                    Objetivos y Actividades a desarrollar.
                  </li>
                  <li className="mx-2">
                    Lugar de realización, duración y horarios.
                  </li>
                  <li className="mx-2">
                    Nombre de los participantes, carrera y escuela de
                    procedencia.
                  </li>
                  <li className="mx-2">Coordinador (Jefe Inmediato).</li>
                  <li className="mx-2">
                    Apoyo que la Empresa te otorgara. (indispensable).
                  </li>
                </ul>
                <li className="mx-2">
                  Anexo Técnico firmado y sellado por la empresa (original,
                  procurar que las fechas de alta y término sean en días
                  hábiles. El periodo mínimo es de 6 meses).
                  <a
                    className="text-blue-600 px-1 border-b border-blue-800"
                    href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/ANEXO%20TECNICO%20SECTOR%20SOCIAL%20Y%20PRIVADO.xls"
                    target="_blank"
                  >
                    Anexo Técnico Social y Privado
                  </a>
                </li>
              </ol>
            </div>
            <div>
              <h6 className="ml-2 font-bold my-2 text-md">Costos</h6>
              <p className="mx-2">
                El trámite para el alta y liberación del Servicio Social es
                completamente gratuito.
              </p>
              <h6 className="ml-2 font-bold my-2 text-md">
                Duración y fechas para realizarlo:
              </h6>
              <p className="mx-2 mb-3">
                El tiempo para dar de alta el Servicio Social es de 15 días a
                partir de que se entrega la documentación necesaria y de un mes
                aproximadamene para la entrega de la constancia del alumno.
              </p>
              <p className="mx-2 mb-8">
                La evaluación tiene como objetivo medir el nivel de desempeño
                alcanzado por parte del prestador del Servicio Social en las
                actividades realizadas.
              </p>
            </div>
            <span className="mx-2 font-bold my-2">Lugar</span>
            <p className="mx-2">
              Tecnológico de Estudios Superiores de Jocotitlán.
            </p>
            <span className="mx-2 font-bold my-2">Oficinas</span>
            <p className="mx-2">
              Edificio "B" Departamento de Servicio Social y Residencia
              Profesional.
            </p>
            <span className="mx-2 font-bold my-2">Horario de atención</span>
            <p className="mx-2 mb-8">Lunes a Viernes de 9:00 a 18:00 horas.</p>
          </div>
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

export default Servicio;
