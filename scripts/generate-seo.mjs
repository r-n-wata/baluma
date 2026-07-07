import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import en from "../src/lang/en.json" with { type: "json" };
import es from "../src/lang/es.json" with { type: "json" };
import routes from "../src/seo/routes.json" with { type: "json" };

const SITE_NAME = "Baluma Bacalar";
const SITE_URL = "https://balumabacalar.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");

const getValue = (object, key) =>
  key.split(".").reduce((result, part) => result?.[part], object);

const interpolate = (template, values) =>
  template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? "");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const getGeoCoordinates = (coordinates = "") => {
  const [latitude, longitude] = coordinates
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

const getImageMimeType = (image) => {
  if (image.endsWith(".jpg") || image.endsWith(".jpeg")) {
    return "image/jpeg";
  }

  if (image.endsWith(".webp")) {
    return "image/webp";
  }

  return "image/png";
};

const getPageMetadata = (route, locale = "es") => {
  const dictionary = locale === "en" ? en : es;
  const localeCode = getValue(dictionary, "seo.localeCode");

  if (route.kind === "house") {
    const name = getValue(dictionary, `houses.${route.houseKey}.name`);
    const houseDescription = getValue(dictionary, `houses.${route.houseKey}.desc`)?.trim();
    const description =
      houseDescription ||
      interpolate(getValue(dictionary, "seo.houseFallbackDescription"), {
        name,
      });

    return {
      title: interpolate(getValue(dictionary, "seo.houseTitle"), { name }),
      description,
      localeCode,
      name,
    };
  }

  return {
    title: getValue(dictionary, route.titleKey),
    description: getValue(dictionary, route.descriptionKey),
    localeCode,
    name: getValue(dictionary, route.titleKey),
  };
};

const buildStructuredData = (route) => {
  const { title, description, localeCode, name } = getPageMetadata(route, "es");
  const url = `${SITE_URL}${route.path}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Casas",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: url,
      },
    ],
  };

  if (route.kind === "home") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url,
        inLanguage: localeCode,
        description,
      },
      {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        name: SITE_NAME,
        url,
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
        url,
        description,
        inLanguage: localeCode,
      },
    ];
  }

  if (route.kind === "house") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "VacationRental",
        name,
        description,
        url,
        image: `${SITE_URL}${route.ogImagePath ?? "/og-image.png"}`,
        numberOfRooms: route.bedrooms,
        occupancy: {
          "@type": "QuantitativeValue",
          maxValue: route.guests,
        },
        numberOfBathroomsTotal: route.bathrooms,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bacalar",
          addressRegion: "Quintana Roo",
          addressCountry: "MX",
        },
        geo: getGeoCoordinates(route.coordinates),
        inLanguage: localeCode,
        provider: {
          "@type": "LodgingBusiness",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
      breadcrumb,
    ];
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url,
    description,
    inLanguage: localeCode,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
};

const replaceMetaContent = (html, attribute, key, content) => {
  const escapedContent = escapeHtml(content);

  return html.replace(
    new RegExp(
      `(<meta(?=[^>]*\\b${attribute}="${key}")(?=[^>]*\\bcontent=")[^>]*\\bcontent=")([^"]*)("[^>]*>)`,
    ),
    `$1${escapedContent}$3`,
  );
};

const replaceLinkHref = (html, rel, href) =>
  html.replace(
    new RegExp(`(<link[^>]+rel="${rel}"[^>]+href=")([^"]*)("[^>]*>)`),
    `$1${href}$3`,
  );

const replaceTitle = (html, title) =>
  html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`);

const upsertStructuredData = (html, data) => {
  const scriptTag = `<script type="application/ld+json" data-seo="structured-data">${JSON.stringify(
    data,
  )}</script>`;

  if (html.includes('data-seo="structured-data"')) {
    return html.replace(
      /<script type="application\/ld\+json" data-seo="structured-data">.*?<\/script>/,
      scriptTag,
    );
  }

  return html.replace("</head>", `    ${scriptTag}\n  </head>`);
};

const buildRouteHtml = (template, route) => {
  const { title, description } = getPageMetadata(route, "es");
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${route.path}`;
  const pageImage = route.ogImagePath ? `${SITE_URL}${route.ogImagePath}` : DEFAULT_IMAGE;
  const imageMimeType = getImageMimeType(pageImage);

  let html = template;
  html = replaceTitle(html, fullTitle);
  html = replaceMetaContent(html, "name", "description", description);
  html = replaceMetaContent(html, "property", "og:title", fullTitle);
  html = replaceMetaContent(html, "property", "og:description", description);
  html = replaceMetaContent(html, "property", "og:url", canonicalUrl);
  html = replaceMetaContent(html, "property", "og:image", pageImage);
  html = replaceMetaContent(html, "property", "og:image:secure_url", pageImage);
  html = replaceMetaContent(html, "property", "og:image:type", imageMimeType);
  html = replaceMetaContent(html, "name", "twitter:title", fullTitle);
  html = replaceMetaContent(html, "name", "twitter:description", description);
  html = replaceMetaContent(html, "name", "twitter:image", pageImage);
  html = replaceLinkHref(html, "canonical", canonicalUrl);
  html = upsertStructuredData(html, buildStructuredData(route));

  return html;
};

const copyPropertyOgImages = async () => {
  const publicPropertyDir = path.join(publicDir, "property-og");
  const distPropertyDir = path.join(distDir, "property-og");

  await fs.mkdir(publicPropertyDir, { recursive: true });
  await fs.mkdir(distPropertyDir, { recursive: true });

  for (const route of routes) {
    if (!route.ogImageSource || !route.ogImagePath) {
      continue;
    }

    const sourcePath = path.join(rootDir, route.ogImageSource);
    const outputName = path.basename(route.ogImagePath);
    await fs.copyFile(sourcePath, path.join(publicPropertyDir, outputName));
    await fs.copyFile(sourcePath, path.join(distPropertyDir, outputName));
  }
};

const buildSitemapXml = () => {
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <changefreq>weekly</changefreq>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

const writeRouteHtmlFiles = async () => {
  const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");

  for (const route of routes) {
    const html = buildRouteHtml(template, route);
    const outputPath =
      route.path === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, route.path.slice(1), "index.html");

    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, html);
  }
};

const writeSitemapFiles = async () => {
  const sitemapXml = buildSitemapXml();
  await fs.writeFile(path.join(publicDir, "sitemap.xml"), sitemapXml);
  await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemapXml);
};

await writeRouteHtmlFiles();
await writeSitemapFiles();
await copyPropertyOgImages();
