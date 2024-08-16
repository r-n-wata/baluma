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
    element: <House title="Lucias House" photos={luciasPhotos} desc="" />,
  },
  {
    path: "/casas/nieves-house",
    element: <House title="Nieves House" photos={nievesHouse} desc="" />,
  },
  {
    path: "/casas/marias-house",
    element: (
      <House
        title="Marias House"
        photos={mariasHouse}
        desc="Éste departamento cuenta con un balcón con vista  a la laguna y al jardín. Relájate con el jacuzzi que se encuentra en la terraza. Los muelles, el jardín, las bicicletas y los kayaks, se comparten con 3 departamentos más: Lucia's, Bego’s y Nieve's. Si vienes con tu grupo de amigos o familiares, no dudes en consultar por todos los espacios. Nuestro jardín te impresionará con plantas locales y aves de todo tipo. Contamos con columpios y hamacas en el agua.Te encantará. "
      />
    ),
  },

  {
    path: "/casas/casa-azul",
    element: (
      <House
        title="Casa Azul"
        photos={casaAzul}
        desc="Casa azul es una casa de dos pisos de estilo maya-balinés. Se encuentra en una excelente ubicación: a media cuadra del parque central y a una cuadra de la laguna. Cuenta con vistas panorámicas desde la habitación en planta alta. Tiene jacuzzi en la terraza. Casi siempre llega una brisa fresca de la laguna, ya que está muy cerca. Incluso en el calor se siente fresca ya que se encuentra rodeada de naturaleza y está construida con materiales naturales."
      />
    ),
  },

  {
    path: "/casas/casa-azul-corazon",
    element: (
      <House title="Casa Azul Corazon" photos={casaAzulCorazon} desc="" />
    ),
  },

  {
    path: "/casas/begos-house",
    element: (
      <House
        title="Begos House"
        photos={begosHouse}
        desc="Éste departamento cuenta con un balcón frente a la laguna con vista al jardín y jacuzzi en su terraza. Es perfecto para hospedar una pareja o familia de 4 o 5 personas. Los muelles, el jardín, las bicicletas y los kayaks, se comparten con 3 departamentos más: Lucia's, Maria's y Nieve's. Si vienes con tu grupo de amigos o familiares, no dudes en consultar por todos los espacios. Nuestro jardín te impresionará con plantas locales y aves de todo tipo. Contamos con columpios y hamacas en el agua.Te encantará. "
      />
    ),
  },

  {
    path: "/casas/changos-house",
    element: <House title="Changos House" photos={changosHouse} desc="" />,
  },

  {
    path: "/casas/mini-house",
    element: <House title="Mini House" photos={miniHouse} desc="" />,
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
