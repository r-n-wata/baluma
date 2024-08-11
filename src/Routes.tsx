import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/organisms/Home/Home";
import House from "./components/molecules/House/House";
import Contact from "./components/molecules/Contact/Contact";
import {
  luciasPhotos,
  nievesHouse,
  mariasHouse,
  miniHouse,
  casaAzul,
  casaAzulCorazon,
  begosHouse,
  changosHouse,
} from "./utils/utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/casas/lucias-house",
    element: (
      <House
        title="Lucias House"
        photos={luciasPhotos}
        desc="Casa azul es una casa de dos pisos de estilo maya-balinés. Se encuentra en una excelente ubicación: a media cuadra del parque central y a una cuadra de la laguna. Cuenta con vistas panorámicas desde la habitación en planta alta. Tiene jacuzzi en la terraza. Casi siempre llega una brisa fresca de la laguna, ya que está muy cerca. Incluso en el calor se siente fresca ya que se encuentra rodeada de naturaleza y está construida con materiales naturales."
      />
    ),
  },
  {
    path: "/casas/nieves-house",
    element: <House title="Nieves House" photos={nievesHouse} desc="heeepp" />,
  },
  {
    path: "/casas/marias-house",
    element: <House title="Marias House" photos={mariasHouse} desc="heeepp" />,
  },

  {
    path: "/casas/casa-azul",
    element: <House title="Casa Azul" photos={casaAzul} desc="heeepp" />,
  },

  {
    path: "/casas/casa-azul-corazon",
    element: (
      <House title="Casa Azul Corazon" photos={casaAzulCorazon} desc="heeepp" />
    ),
  },

  {
    path: "/casas/begos-house",
    element: <House title="Begos House" photos={begosHouse} desc="heeepp" />,
  },

  {
    path: "/casas/changos-house",
    element: (
      <House title="Changos House" photos={changosHouse} desc="heeepp" />
    ),
  },

  {
    path: "/casas/mini-house",
    element: <House title="Mini House" photos={miniHouse} desc="heeepp" />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
