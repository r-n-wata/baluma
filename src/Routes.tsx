import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/organisms/Home/Home";
import House from "./components/molecules/House/House";
import { luciasPhotos, nievesHouse, mariasHouse } from "./utils/utils";

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
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
