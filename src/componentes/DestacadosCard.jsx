import React, { useState, useEffect } from "react";

function DestacadosCard({ videos }) {
  // COMPONENTE PARA MOSTRAR VIDEOS IMPORTADOS DE LINKS DE FACEBOOK
  // PARA MOSTRAR A LOS ALUMNOS DESTACADOS
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 850);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    // SE HACE USO DE GRID PARA DIVIDIR LOS VIDEOS DE ACUERDO
    // CON EL TAMAÑO DE PANTALLA
    <div
      className={`grid ${
        isMobileView ? "grid-cols-1" : "grid-cols-2"
      } xl:grid-cols-3 sm:mt-10 sm:mx-10 gap-4 my-10 sm:my-20`}
    >
      {videos.map((video, index) => (
        <div
          key={index}
          className={`flex flex-col items-center mx-10 2xl:mx-0 my-10  rounded p-2 sm:p-4 lg:hover:scale-110 transition-all duration-400 border-none sm:border-2 shadow-none sm:shadow-2xl ${
            index === selectedVideoIndex ? "selected" : ""
          }`}
          onClick={() => handleVideoClick(index)}
        >
          <div className="aspect-video">
            {/* SE CONFIGURAN ALGUNOS ASPECTOS DEL VIDEO */}
            <iframe
              className="w-full h-full"
              src={video.embedUrl}
              style={{ border: "none", overflow: "hidden" }}
              allowFullScreen={true}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          {/* ESTE <p> ES DEL TTULO QUE LLEVARÁ EL VIDEO */}
          <p className="pt-2 font-bold text-center border-b-2 border-yellow-400 sm:border-orange-500 ">
            {video.descripcion}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DestacadosCard;
