import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./paginas/Home";
import Veinte from "./paginas/2020";
import Veintiuno from "./paginas/2021";
import Veintidos from "./paginas/2022";
import Veintitres from "./paginas/2023";
import Academia from "./paginas/Academia";
import Alumnos from "./paginas/Alumnos";
import Destacados from "./paginas/Destacados";
import Docentes from "./paginas/Docentes";
import Dual from "./paginas/Dual";
import Fadev from "./paginas/Fadev";
import Investigacion from "./paginas/Investigacion";
import Preguntas from "./paginas/Preguntas";
import Proyectos from "./paginas/Proyectos";
import Residencia from "./paginas/Residencia";
import Servicio from "./paginas/Servicio";
import SitioOf from "./paginas/SitioOf";
import Titulacion from "./paginas/Titulacion";
import Error from "./paginas/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "2020",
    element: <Veinte />,
  },
  {
    path: "2021",
    element: <Veintiuno />,
  },
  {
    path: "2022",
    element: <Veintidos />,
  },
  {
    path: "2023",
    element: <Veintitres />,
  },
  {
    path: "Academia",
    element: <Academia />,
  },
  {
    path: "Alumnos",
    element: <Alumnos />,
  },
  {
    path: "Destacados",
    element: <Destacados />,
  },
  {
    path: "Docentes",
    element: <Docentes />,
  },
  {
    path: "Dual",
    element: <Dual />,
  },
  {
    path: "FADEV",
    element: <Fadev />,
  },
  {
    path: "Investigación",
    element: <Investigacion />,
  },
  {
    path: "Preguntas",
    element: <Preguntas />,
  },
  {
    path: "Proyectos",
    element: <Proyectos />,
  },
  {
    path: "Residencia",
    element: <Residencia />,
  },
  {
    path: "Servicio",
    element: <Servicio />,
  },
  {
    path: "Sitio Oficial",
    element: <SitioOf />,
  },
  {
    path: "Titulación",
    element: <Titulacion />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
