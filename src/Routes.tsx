import { useEffect } from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Home from "./components/organisms/Home/Home";
import House from "./components/molecules/House/House";
import Contact from "./components/molecules/Contact/Contact";
import Reviews from "./components/organisms/Reviews/Reviews";
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
import { getHouseInfo } from "./data/housesInfo";
import { useTranslation } from "react-i18next";
import { houseRoutes } from "./seo/houseRoutes";

function ScrollToTopLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return <Outlet />;
}

function Routes() {
  const { t } = useTranslation();
  const houseInfo = getHouseInfo(t);

  const router = createBrowserRouter([
    {
      element: <ScrollToTopLayout />,
      children: [
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
              location={houseInfo.LuciasHouse.location}
              slug={houseRoutes[0].path}
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
              location={houseInfo.NievesHouse.location}
              slug={houseRoutes[1].path}
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
              location={houseInfo.MariasHouse.location}
              slug={houseRoutes[2].path}
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
              location={houseInfo.CasaAzul.location}
              slug={houseRoutes[4].path}
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
              location={houseInfo.CasaAzulCorazon.location}
              slug={houseRoutes[5].path}
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
              location={houseInfo.BegosHouse.location}
              slug={houseRoutes[3].path}
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
              location={houseInfo.ChangosHouse.location}
              slug={houseRoutes[6].path}
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
              location={houseInfo.EstudioTiliche.location}
              slug={houseRoutes[7].path}
            />
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/reviews",
          element: <Reviews />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
