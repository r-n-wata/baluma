import { Link } from "react-router-dom";
import Gallery from "../../molecules/Gallery/Gallery";
import LineSeparator from "../../atoms/Line/LineSeparator";
import Navigation from "../../molecules/Navigation/Navigation";
import Title from "../../atoms/Title/Title";
import styles from "./House.module.scss";
import checkMark from "../../../assets/checkMark.png";
import Footer from "../Footer/Footer";
import bathroom from "../../../assets/bathroom.png";
import bedroom from "../../../assets/bedroom.png";
import people from "../../../assets/poeple.png";
import { useTranslation } from "react-i18next";
import { HouseLocation, HouseSection } from "../../../data/housesInfo";
import Seo from "../../atoms/Seo/Seo";
import {
  buildBreadcrumbStructuredData,
  buildHouseStructuredData,
} from "../../../seo/structuredData";
import { houseRoutes } from "../../../seo/houseRoutes";

function House({
  title,
  desc,
  photos,
  includes,
  overview,
  location,
  slug,
}: {
  title: string;
  desc: string;
  photos: string[];
  includes: HouseSection[];
  overview: { bedrooms: number; bathrooms: number; people: number };
  location: HouseLocation;
  slug: string;
}) {
  const { t, i18n } = useTranslation();
  const description =
    desc.trim() || t("seo.houseFallbackDescription", { name: title });
  const pageTitle = t("seo.houseTitle", { name: title });
  const pageImage =
    houseRoutes.find((house) => house.path === slug)?.ogImagePath ?? "/og-image.png";
  const relatedHouses = houseRoutes.filter((house) => house.path !== slug).slice(0, 3);
  const breadcrumbItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.houses"), path: "/" },
    { name: title, path: slug },
  ];
  const stats = [
    { icon: bedroom, label: t("common.stats.bedrooms"), value: overview.bedrooms },
    { icon: bathroom, label: t("common.stats.bathrooms"), value: overview.bathrooms },
    { icon: people, label: t("common.stats.guests"), value: overview.people },
  ];

  return (
    <div className={styles.houseCon}>
      <Seo
        title={pageTitle}
        description={description}
        image={`https://balumabacalar.com${pageImage}`}
        structuredData={[
          buildHouseStructuredData({
            title,
            description,
            pathname: typeof window !== "undefined" ? window.location.pathname : "/",
            locale: i18n.resolvedLanguage === "es" ? "es-MX" : "en-US",
            bedrooms: overview.bedrooms,
            bathrooms: overview.bathrooms,
            guests: overview.people,
            coordinates: location.address,
          }),
          buildBreadcrumbStructuredData(breadcrumbItems),
        ]}
      />
      <Navigation />
      <section className={styles.hero}>
        <span className={styles.kicker}>{t("common.collection")}</span>
        <Title title={title} />
        {desc.trim().length > 0 && <p>{desc}</p>}
      </section>

      <section className={styles.icons}>
        {stats.map((stat) => (
          <article key={stat.label} className={styles.statCard}>
            <img src={stat.icon} alt={stat.label} />
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <div className={styles.galleryCon}>
        <Gallery photos={photos} />
      </div>

      <LineSeparator />

      <section className={styles.includesCon}>
        {includes.map((include, index) => (
          <article className={styles.includes} key={index}>
            <h3>{include.title}</h3>
            <div className={styles.itemsCon}>
              {Array.isArray(include.items) &&
                include.items.map((item, itemIndex) => (
                  <p key={itemIndex} className={styles.item}>
                    <span>
                      <img src={checkMark} alt="" />
                    </span>
                    {item}
                  </p>
                ))}
            </div>
          </article>
        ))}

        <article className={styles.mapCard}>
          <div className={styles.mapContent}>
            <span className={styles.mapEyebrow}>{t("common.location")}</span>
            <h2>{location.label}</h2>
            {location.address && <p>{location.address}</p>}
            <a
              className={styles.mapLink}
              href={location.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("common.openInGoogleMaps")}
            </a>
          </div>

          <div className={styles.mapFrame}>
            <iframe
              src={location.embedUrl}
              title={t("common.mapTitle", { name: title })}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </article>

        <div className={styles.buttonCon}>
          <Link className={styles.button} to="/contact">
            {t("common.reserveNow")}
          </Link>
        </div>

        <section className={styles.relatedSection}>
          <div className={styles.relatedGrid}>
            {relatedHouses.map((house) => (
              <Link key={house.path} className={styles.relatedCard} to={house.path}>
                <strong>{house.label}</strong>
                <span>{t("houses.relatedCta")}</span>
              </Link>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default House;
