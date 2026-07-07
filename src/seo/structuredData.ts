const SITE_NAME = "Baluma Bacalar";
const SITE_URL = "https://balumabacalar.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const getGeoCoordinates = (coordinates?: string) => {
  const [latitude, longitude] = (coordinates ?? "")
    .split(",")
    .map((value) => Number(value.trim()));

  if (
    Number.isFinite(latitude) &&
    Number.isFinite(longitude) &&
    latitude >= -90 &&
    latitude <= 90 &&
    longitude >= -180 &&
    longitude <= 180
  ) {
    return {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    };
  }

  return undefined;
};

type BaseStructuredData = {
  title: string;
  description: string;
  pathname: string;
  locale: string;
};

type HouseStructuredDataInput = BaseStructuredData & {
  bedrooms: number;
  bathrooms: number;
  guests: number;
  coordinates?: string;
};

export const buildHomeStructuredData = ({
  title,
  description,
  pathname,
  locale,
}: BaseStructuredData) => [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: `${SITE_URL}${pathname}`,
    inLanguage: locale,
    description,
  },
  {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_NAME,
    url: `${SITE_URL}${pathname}`,
    image: DEFAULT_IMAGE,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bacalar",
      addressRegion: "Quintana Roo",
      addressCountry: "MX",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: `${SITE_URL}${pathname}`,
    description,
    inLanguage: locale,
  },
];

export const buildWebPageStructuredData = ({
  title,
  description,
  pathname,
  locale,
}: BaseStructuredData) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  url: `${SITE_URL}${pathname}`,
  description,
  inLanguage: locale,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
});

export const buildBreadcrumbStructuredData = (
  items: Array<{ name: string; path: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const buildHouseStructuredData = ({
  title,
  description,
  pathname,
  locale,
  bedrooms,
  bathrooms,
  guests,
  coordinates,
}: HouseStructuredDataInput) => {
  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: title,
    description,
    url: `${SITE_URL}${pathname}`,
    image: DEFAULT_IMAGE,
    numberOfRooms: bedrooms,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: guests,
    },
    numberOfBathroomsTotal: bathrooms,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bacalar",
      addressRegion: "Quintana Roo",
      addressCountry: "MX",
    },
    geo: getGeoCoordinates(coordinates),
    inLanguage: locale,
    provider: {
      "@type": "LodgingBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
};
