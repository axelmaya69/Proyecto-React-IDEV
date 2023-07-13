import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import { Fade, Slide } from "react-awesome-reveal";

function SitioOf() {
  useEffect(() => {
    document.title = "FADEV - Sitio Oficial"; // Cambia 'Nuevo título de la página' por el título deseado
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
                    <h2 className="text-7xl sm:text-9xl my:10 mx-4 lg:text-[200px] text-white font-bold">
                      Sitio
                    </h2>
                  </Slide>
                </div>
                <Slide direction="right" damping={0.3}>
                  <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold px-4 my-4 flex flex-wrap text-yellow-400">
                    Oficial
                  </h4>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center align-center">
        <div className="my-4">
          <Fade cascade={true} duration={1500}>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  ">
              Sitio Oficial
            </span>
          </Fade>
        </div>
      </div>

      <div className="grid grid-cols-4 mx-4 my-4 lg:gap-10 gap-4 lg:relative">
        <div className="col-span-4 lg:col-span-1 lg:col-start-1 border border-blue-500 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-32 ">
          imagen
        </div>
        <article className="col-span-4 lg:col-start-2 lg:col-span-3 lg:mr-10">
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est
            ipsam officiis accusantium blanditiis temporibus sint quibusdam
            obcaecati facilis debitis nostrum, voluptate, tempore, ullam
            voluptatem nobis animi magni nulla at. lorem Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eos, fugit eveniet facilis quis
            minus perspiciatis dolores quisquam omnis non excepturi accusamus,
            sapiente consequuntur cum, possimus a aperiam corporis expedita.
            Consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur
            consequuntur placeat numquam ab culpa. Vero perferendis accusamus
            totam itaque minima quisquam nam dolor!
          </p>
          <p className="my-2">
            officiis accusantium blanditiis temporibus sint quibusdam obcaecati
            facilis debitis nostrum, voluptate, tempore, ullam voluptatem nobis
            animi magni nulla at. lorem Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eos, fugit eveniet facilis quis minus perspiciatis
            dolores quisquam omnis non excepturi accusamus, sapiente
            consequuntur cum, possimus a aperiam corporis expedita. Consectetur.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur
            placeat numquam ab culpa. Vero perferendis accusamus totam itaque
            minima quisquam nam dolor! officiis accusantium blanditiis
            temporibus sint quibusdam obcaecati facilis debitis nostrum,
            voluptate, tempore, ullam voluptatem nobis animi magni nulla at.
            lorem
          </p>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit
            eveniet facilis quis minus perspiciatis dolores quisquam omnis non
            excepturi accusamus, sapiente consequuntur cum, possimus a aperiam
            corporis expedita. Consectetur. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dicta reiciendis, sequi molestiae fuga
            harum minus! Tenetur consequuntur placeat numquam ab culpa. Vero
            perferendis accusamus totam itaque minima quisquam nam dolor!
            officiis accusantium blanditiis temporibus sint quibusdam obcaecati
            facilis debitis nostrum, voluptate, tempore, ullam voluptatem nobis
            animi magni nulla at. lorem Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eos, fugit eveniet facilis quis minus perspiciatis
            dolores quisquam omnis non excepturi accusamus, sapiente
            consequuntur cum, possimus a aperiam corporis expedita. Consectetur.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur
            placeat numquam ab culpa. Vero perferendis accusamus totam itaque
            minima quisquam nam dolor! sit amet consectetur adipisicing elit.
            Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur
            consequuntur placeat numquam ab culpa. Vero perferendis accusamus
            totam itaque minima quisquam nam dolor! officiis accusantium
            blanditiis temporibus sint quibusdam obcaecati facilis debitis
            nostrum, voluptate, tempore, ullam voluptatem nobis animi magni
            nulla at. lorem Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eos, fugit eveniet facilis quis minus perspiciatis dolores
            quisquam omnis non excepturi accusamus, sapiente consequuntur cum,
            possimus a aperiam corporis expedita. Consectetur. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Dicta reiciendis,
            sequi molestiae fuga harum minus! Tenetur consequuntur placeat
            numquam ab culpa. Vero perferendis accusamus totam itaque minima
            quisquam nam dolor! officiis accusantium blanditiis temporibus sint
            quibusdam obcaecati facilis debitis nostrum, voluptate, tempore,
            ullam voluptatem nobis animi magni nulla at. lorem Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Eos, fugit eveniet facilis
            quis minus perspiciatis dolores quisquam omnis non excepturi
            accusamus, sapiente consequuntur cum, possimus a aperiam corporis
            expedita. Consectetur.
          </p>
          <p className="my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur
            placeat numquam ab culpa. Vero perferendis accusamus totam itaque
            minima quisquam nam dolor!sit amet consectetur adipisicing elit.
            Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur
            consequuntur placeat numquam ab culpa. Vero perferendis accusamus
            totam itaque minima quisquam nam dolor! officiis accusantium
            blanditiis temporibus sint quibusdam obcaecati facilis debitis
            nostrum, voluptate, tempore, ullam voluptatem nobis animi magni
            nulla at. lorem Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eos, fugit eveniet facilis quis minus perspiciatis dolores
            quisquam omnis non excepturi accusamus, sapiente consequuntur cum,
            possimus a aperiam corporis expedita. Consectetur. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Dicta reiciendis,
            sequi molestiae fuga harum minus! Tenetur consequuntur placeat
            numquam ab culpa. Vero perferendis accusamus totam itaque minima
            quisquam nam dolor! officiis accusantium blanditiis temporibus sint
            quibusdam obcaecati facilis debitis nostrum, voluptate, tempore,
            ullam voluptatem nobis animi magni nulla at. lorem Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Eos, fugit eveniet facilis
            quis minus perspiciatis dolores quisquam omnis non excepturi
            accusamus, sapiente consequuntur cum, possimus a aperiam corporis
            expedita. Consectetur. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dicta reiciendis, sequi molestiae fuga harum
            minus! Tenetur consequuntur placeat numquam ab culpa. Vero
            perferendis accusamus totam itaque minima quisquam nam dolor!
          </p>
        </article>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SitioOf;
