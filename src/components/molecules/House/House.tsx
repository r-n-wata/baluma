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

function House({
  title,
  desc,
  photos,
  includes,
  overview,
}: {
  title: string;
  desc: string;
  photos: string[];
  includes: Record<string, string | string[]>[];
  overview: Record<string, string | number>;
}) {
  const stats = [
    { icon: bedroom, label: "Habitaciones", value: overview.bedrooms },
    { icon: bathroom, label: "Baños", value: overview.bathrooms },
    { icon: people, label: "Huéspedes", value: overview.people },
  ];

  return (
    <div className={styles.houseCon}>
      <Navigation />
      <section className={styles.hero}>
        <span className={styles.kicker}>Colección Baluma</span>
        <Title title={title} />
        <p>{desc}</p>
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

        <div className={styles.buttonCon}>
          <Link className={styles.button} to="/contact">
            Reservar ahora
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default House;
