import React, { useEffect } from "react";
import Menu from "../elementos/Menu";
import Footer from "../elementos/Footer";
import FadevComp from "../componentes/FadevComp";
import { Slide } from "react-awesome-reveal";

function Veinte() {
  useEffect(() => {
    document.title = "FADEV - 2020"; // Cambia 'Nuevo título de la página' por el título deseado
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
                      FADEV
                    </h2>
                  </Slide>
                </div>
                <Slide direction="right" damping={0.3}>
                  <h4 className="text-3xl sm:text-4xl lg:text-6xl font-semibold px-4 my-4 flex flex-wrap text-yellow-400">
                    2020
                  </h4>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 mx-2 sm:mx-10 lg:mx-20 ">
        <FadevComp
          titulo={"FADEV - 2020"}
          imagen={
            "https://1.bp.blogspot.com/-c7mjdVl384Y/YRdK_17JlXI/AAAAAAAAAaM/rHfwINv-LWkdD5GLn67fSivSA76COQdawCLcBGAsYHQ/s750/Main%2Bpicture%2Bnew%2B%25283%2529.png"
          }
          p1={
            "P1 rem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit labore itaque totam earum officia molestias laboriosam ea nobis hic, corporis commodi numquam tempore, in delectus!"
          }
          p2={
            "P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit labore itaque totam earum officia molestias laboriosam ea nobis hic, corporis commodi numquam tempore, in delectus! Lorem ipsum dolor sit "
          }
          p3={
            "P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit labore itaque totam earum officia molestias laboriosam ea nobis hic, corporis commodi numquam tempore, in delectus!"
          }
          p4={
            "P4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit labore itaque totam earum officia molestias laboriosam ea nobis hic, corporis commodi numquam tempore, in delectus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptates ut saepe reiciendis velit labore itaque totam earum officia molestias laboriosam ea nobis hic, corporis commodi numquam tempore, in delectus!"
          }
        />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Veinte;
