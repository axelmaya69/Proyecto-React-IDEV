import React from "react";
import { Zoom } from "react-awesome-reveal";

// ESTA ES UNA PAGINA DE <404> QUE APARECERA CUANDO SE ACCEDA A UN LINK
// NO CONOCIDO DENTRO DEL SITIO

function Error() {
  useEffect(() => {
    document.title = "404"; // Cambia 'Nuevo título de la página' por el título deseado
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
    <div className="flex justify-center items-center h-screen bg-slate-100 shadow-2xl border-2">
      <Zoom cascade={true}>
        <div className="flex justify-center items-center flex-col h-screen ">
          {/* TEXTO QUE APARECERÁ AL ACCEDER A UN ENLACE NO CONOCIDO */}
          <h1 className="text-6xl sm:text-8xl text-red-500 font-bold ">404</h1>
          <p className="text-lg sm:text-3xl m-10 flex flex-col items-center justify-center text-center ">
            La página que estás buscando no pudo ser encontrada.
          </p>
        </div>
      </Zoom>
    </div>
  );
}

export default Error;
