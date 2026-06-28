import Navigation from "../../molecules/Navigation/Navigation";
import About from "../../molecules/About/About";
import Slide from "../../molecules/Slide/Slide";
import styles from "./Home.module.scss";
import Footer from "../../molecules/Footer/Footer";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const highlights = t("home.highlights", { returnObjects: true }) as string[];

  return (
    <main>
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
      </div>
      <Footer />
    </main>
  );
}

export default Home;
