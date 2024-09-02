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
import { houseInfo } from "./utils/housesInfo";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/casas/lucias-house",
      element: (
        <House
          title={houseInfo.LuciasHouse.name}
          photos={luciasPhotos}
          desc={houseInfo.LuciasHouse.desc}
          includes={houseInfo.LuciasHouse.includes}
          overview={houseInfo.LuciasHouse.overview}
        />
      ),
    },
    {
      path: "/casas/nieves-house",
      element: (
        <House
          title={houseInfo.NievesHouse.name}
          photos={nievesHouse}
          desc={houseInfo.NievesHouse.desc}
          includes={houseInfo.NievesHouse.includes}
          overview={houseInfo.NievesHouse.overview}
        />
      ),
    },
    {
      path: "/casas/marias-house",
      element: (
        <House
          title={houseInfo.MariasHouse.name}
          photos={mariasHouse}
          desc={houseInfo.MariasHouse.desc}
          includes={houseInfo.MariasHouse.includes}
          overview={houseInfo.MariasHouse.overview}
        />
      ),
    },

    {
      path: "/casas/casa-azul",
      element: (
        <House
          title={houseInfo.CasaAzul.name}
          photos={casaAzul}
          desc={houseInfo.CasaAzul.desc}
          includes={houseInfo.CasaAzul.includes}
          overview={houseInfo.CasaAzul.overview}
        />
      ),
    },

    {
      path: "/casas/casa-azul-corazon",
      element: (
        <House
          title={houseInfo.CasaAzulCorazon.name}
          photos={casaAzulCorazon}
          desc={houseInfo.CasaAzulCorazon.desc}
          includes={houseInfo.CasaAzulCorazon.includes}
          overview={houseInfo.CasaAzulCorazon.overview}
        />
      ),
    },

    {
      path: "/casas/begos-house",
      element: (
        <House
          title={houseInfo.BegosHouse.name}
          photos={begosHouse}
          desc={houseInfo.BegosHouse.desc}
          includes={houseInfo.BegosHouse.includes}
          overview={houseInfo.BegosHouse.overview}
        />
      ),
    },

    {
      path: "/casas/changos-house",
      element: (
        <House
          title={houseInfo.ChangosHouse.name}
          photos={changosHouse}
          desc={houseInfo.ChangosHouse.desc}
          includes={houseInfo.ChangosHouse.includes}
          overview={houseInfo.ChangosHouse.overview}
        />
      ),
    },

    {
      path: "/casas/mini-house",
      element: (
        <House
          title={houseInfo.EstudioTiliche.name}
          photos={miniHouse}
          desc={houseInfo.EstudioTiliche.desc}
          includes={houseInfo.EstudioTiliche.includes}
          overview={houseInfo.EstudioTiliche.overview}
        />
      ),
    },

    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
