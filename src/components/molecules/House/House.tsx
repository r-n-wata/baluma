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

function House({
  title,
  desc,
  photos,
  includes,
  overview,
  location,
}: {
  title: string;
  desc: string;
  photos: string[];
  includes: HouseSection[];
  overview: { bedrooms: number; bathrooms: number; people: number };
  location: HouseLocation;
}) {
  const { t } = useTranslation();
  const stats = [
    { icon: bedroom, label: t("common.stats.bedrooms"), value: overview.bedrooms },
    { icon: bathroom, label: t("common.stats.bathrooms"), value: overview.bathrooms },
    { icon: people, label: t("common.stats.guests"), value: overview.people },
  ];

  return (
    <div className={styles.houseCon}>
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
      </section>
      <Footer />
    </div>
  );
}

export default House;
