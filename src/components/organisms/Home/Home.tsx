import Navigation from "../../molecules/Navigation/Navigation";
import About from "../../molecules/About/About";
import Slide from "../../molecules/Slide/Slide";
import styles from "./Home.module.scss";
import Footer from "../../molecules/Footer/Footer";

function Home() {
  const highlights = [
    "Hospedajes junto a la laguna",
    "Opciones para parejas y familias",
    "Ubicaciones céntricas y tranquilas",
  ];

  return (
    <main>
      <Navigation />
      <div className={styles.home}>
        <section className={styles.homeSection}>
          <div className={styles.top}>
            <div className={styles.heroContent}>
              <h1>Estancias serenas para descubrir Bacalar con calma.</h1>
              <p>
                Casas con carácter, vistas memorables y una experiencia más
                simple para encontrar el espacio ideal cerca de la laguna.
              </p>
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
