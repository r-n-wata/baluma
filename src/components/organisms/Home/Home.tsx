import Navigation from "../../molecules/Navigation/Navigation";
import About from "../../molecules/About/About";
import Slide from "../../molecules/Slide/Slide";
import styles from "./Home.module.scss";
import Footer from "../../molecules/Footer/Footer";
import { useTranslation } from "react-i18next";
import Seo from "../../atoms/Seo/Seo";
import { buildHomeStructuredData } from "../../../seo/structuredData";
import { Link } from "react-router-dom";
import { getHouseInfo } from "../../../data/housesInfo";
import { houseRoutes } from "../../../seo/houseRoutes";

function Home() {
  const { t, i18n } = useTranslation();
  const highlights = t("home.highlights", { returnObjects: true }) as string[];
  const title = t("seo.homeTitle");
  const description = t("seo.homeDescription");
  const houseInfo = getHouseInfo(t);

  return (
    <main>
      <Seo
        title={title}
        description={description}
        structuredData={buildHomeStructuredData({
          title,
          description,
          pathname: "/",
          locale: i18n.resolvedLanguage === "es" ? "es-MX" : "en-US",
        })}
      />
      <Navigation />
      <div className={styles.home}>
        <section className={styles.homeSection}>
          <div className={styles.top}>
            <div className={styles.heroContent}>
              <h1>{t("home.title")}</h1>
              <p>{t("home.subtitle")}</p>
              <div className={styles.highlights}>
                {highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="about" className={styles.aboutSection}>
          <About />
        </section>
        <section id="gallery" className={styles.gallerySection}>
          <Slide />
        </section>
        <section className={styles.staysSection}>
          <div className={styles.staysHeader}>
            <span>{t("home.staysKicker")}</span>
            <h2>{t("home.staysTitle")}</h2>
            <p>{t("home.staysDescription")}</p>
          </div>
          <div className={styles.staysGrid}>
            {houseRoutes.map((house) => {
              const details = houseInfo[house.infoKey];
              const teaser = details.desc.trim() || t("seo.houseFallbackDescription", {
                name: details.name,
              });

              return (
                <article key={house.path} className={styles.stayCard}>
                  <span>{t("common.collection")}</span>
                  <h3>{details.name}</h3>
                  <p>{teaser}</p>
                  <Link to={house.path}>{t("home.staysCta")}</Link>
                </article>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
