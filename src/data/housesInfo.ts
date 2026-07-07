import { TFunction } from "i18next";

export interface HouseLocation {
  embedUrl: string;
  mapUrl: string;
  label: string;
  address?: string;
}

export interface HouseSection {
  title: string;
  items: string[];
}

export interface HouseInfo {
  name: string;
  desc: string;
  includes: HouseSection[];
  overview: {
    bedrooms: number;
    bathrooms: number;
    people: number;
  };
  location: HouseLocation;
}

const createLocation = (label: string, address: string): HouseLocation => {
  const query = encodeURIComponent(address);

  return {
    label,
    address,
    embedUrl: `https://www.google.com/maps?q=${query}&output=embed`,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${query}`,
  };
};

const getSections = (t: TFunction, key: string): HouseSection[] =>
  t(key, { returnObjects: true }) as unknown as HouseSection[];

export const getHouseInfo = (t: TFunction): Record<string, HouseInfo> => ({
  LuciasHouse: {
    name: t("houses.lucias.name"),
    desc: t("houses.lucias.desc"),
    includes: getSections(t, "houses.lucias.includes"),
    overview: {
      bedrooms: 1,
      bathrooms: 1,
      people: 2,
    },
    location: createLocation(t("houses.lucias.name"), "18.659586, -88.399475"),
  },
  NievesHouse: {
    name: t("houses.nieves.name"),
    desc: t("houses.nieves.desc"),
    includes: getSections(t, "houses.nieves.includes"),
    overview: {
      bedrooms: 1,
      bathrooms: 1,
      people: 2,
    },
    location: createLocation(t("houses.nieves.name"), "18.659586, -88.399475"),
  },
  MariasHouse: {
    name: t("houses.marias.name"),
    desc: t("houses.marias.desc"),
    includes: getSections(t, "houses.marias.includes"),
    overview: {
      bedrooms: 1,
      bathrooms: 1,
      people: 4,
    },
    location: createLocation(t("houses.marias.name"), "18.659586, -88.399475"),
  },
  CasaAzul: {
    name: t("houses.casaAzul.name"),
    desc: t("houses.casaAzul.desc"),
    includes: getSections(t, "houses.casaAzul.includes"),
    overview: {
      bedrooms: 3,
      bathrooms: 2,
      people: 7,
    },
    location: createLocation(t("houses.casaAzul.name"), "18.675610, -8.389626"),
  },
  CasaAzulCorazon: {
    name: t("houses.casaAzulCorazon.name"),
    desc: t("houses.casaAzulCorazon.desc"),
    includes: getSections(t, "houses.casaAzulCorazon.includes"),
    overview: {
      bedrooms: 2,
      bathrooms: 1,
      people: 7,
    },
    location: createLocation(
      t("houses.casaAzulCorazon.name"),
      "18.729696, -88.352608",
    ),
  },
  BegosHouse: {
    name: t("houses.begos.name"),
    desc: t("houses.begos.desc"),
    includes: getSections(t, "houses.begos.includes"),
    overview: {
      bedrooms: 2,
      bathrooms: 1,
      people: 4,
    },
    location: createLocation(t("houses.begos.name"), "18.659586, -88.399475"),
  },
  ChangosHouse: {
    name: t("houses.changos.name"),
    desc: t("houses.changos.desc"),
    includes: getSections(t, "houses.changos.includes"),
    overview: {
      bedrooms: 1,
      bathrooms: 1,
      people: 4,
    },
    location: createLocation(t("houses.changos.name"), "18.672401, -18.394440"),
  },
  EstudioTiliche: {
    name: t("houses.tiliche.name"),
    desc: t("houses.tiliche.desc"),
    includes: getSections(t, "houses.tiliche.includes"),
    overview: {
      bedrooms: 1,
      bathrooms: 1,
      people: 2,
    },
    location: createLocation(t("houses.tiliche.name"), "18.659409, -88400177"),
  },
});
