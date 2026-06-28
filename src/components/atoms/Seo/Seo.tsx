import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SITE_NAME = "Baluma Bacalar";
const SITE_URL = "https://balumabacalar.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_IMAGE_ALT = "Baluma Bacalar logo on a shareable social preview image";

const setMetaTag = (
  selector: string,
  attribute: "name" | "property",
  value: string,
) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);

  if (element) {
    element.setAttribute("content", value);
    return;
  }

  const meta = document.createElement("meta");
  meta.setAttribute(attribute, selector.match(/"(.+)"/)?.[1] ?? "");
  meta.setAttribute("content", value);
  document.head.appendChild(meta);
};

const setLinkTag = (rel: string, href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

function Seo({
  title,
  description,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
}: {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${pathname}`;
    const fullTitle = `${title} | ${SITE_NAME}`;
    const locale = i18n.resolvedLanguage === "es" ? "es_MX" : "en_US";

    document.title = fullTitle;
    document.documentElement.lang = i18n.resolvedLanguage === "es" ? "es" : "en";

    setMetaTag('meta[name="description"]', "name", description);
    setMetaTag('meta[property="og:title"]', "property", fullTitle);
    setMetaTag('meta[property="og:description"]', "property", description);
    setMetaTag('meta[property="og:url"]', "property", canonicalUrl);
    setMetaTag('meta[property="og:image"]', "property", image);
    setMetaTag('meta[property="og:image:secure_url"]', "property", image);
    setMetaTag('meta[property="og:image:type"]', "property", "image/png");
    setMetaTag('meta[property="og:image:width"]', "property", "1200");
    setMetaTag('meta[property="og:image:height"]', "property", "1200");
    setMetaTag('meta[property="og:image:alt"]', "property", imageAlt);
    setMetaTag('meta[property="og:locale"]', "property", locale);
    setMetaTag('meta[property="og:locale:alternate"]', "property", locale === "es_MX" ? "en_US" : "es_MX");
    setMetaTag('meta[property="og:type"]', "property", "website");
    setMetaTag('meta[property="og:site_name"]', "property", SITE_NAME);
    setMetaTag('meta[name="twitter:card"]', "name", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", fullTitle);
    setMetaTag('meta[name="twitter:description"]', "name", description);
    setMetaTag('meta[name="twitter:image"]', "name", image);
    setMetaTag('meta[name="twitter:image:alt"]', "name", imageAlt);
    setLinkTag("canonical", canonicalUrl);
  }, [description, i18n.resolvedLanguage, image, imageAlt, pathname, title]);

  return null;
}

export default Seo;
