export type HouseRoute = {
  key:
    | "lucias"
    | "nieves"
    | "marias"
    | "begos"
    | "casaAzul"
    | "casaAzulCorazon"
    | "changos"
    | "tiliche";
  infoKey:
    | "LuciasHouse"
    | "NievesHouse"
    | "MariasHouse"
    | "BegosHouse"
    | "CasaAzul"
    | "CasaAzulCorazon"
    | "ChangosHouse"
    | "EstudioTiliche";
  path: string;
  label: string;
  ogImagePath: string;
};

export const houseRoutes: HouseRoute[] = [
  {
    key: "lucias",
    infoKey: "LuciasHouse",
    path: "/casas/lucias-house",
    label: "Lucia's House",
    ogImagePath: "/property-og/lucias-house.jpg",
  },
  {
    key: "nieves",
    infoKey: "NievesHouse",
    path: "/casas/nieves-house",
    label: "Nieve's House",
    ogImagePath: "/property-og/nieves-house.jpg",
  },
  {
    key: "marias",
    infoKey: "MariasHouse",
    path: "/casas/marias-house",
    label: "Maria's House",
    ogImagePath: "/property-og/marias-house.jpg",
  },
  {
    key: "begos",
    infoKey: "BegosHouse",
    path: "/casas/begos-house",
    label: "Bego's House",
    ogImagePath: "/property-og/begos-house.jpg",
  },
  {
    key: "casaAzul",
    infoKey: "CasaAzul",
    path: "/casas/casa-azul",
    label: "Casa Azul",
    ogImagePath: "/property-og/casa-azul.png",
  },
  {
    key: "casaAzulCorazon",
    infoKey: "CasaAzulCorazon",
    path: "/casas/casa-azul-corazon",
    label: "Casa Azul Corazon",
    ogImagePath: "/property-og/casa-azul-corazon.jpg",
  },
  {
    key: "changos",
    infoKey: "ChangosHouse",
    path: "/casas/changos-house",
    label: "Chango's House",
    ogImagePath: "/property-og/changos-house.png",
  },
  {
    key: "tiliche",
    infoKey: "EstudioTiliche",
    path: "/casas/mini-house",
    label: "Estudio Tiliche",
    ogImagePath: "/property-og/mini-house.jpg",
  },
];
