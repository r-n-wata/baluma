import Gallery from "../../molecules/Gallery/Gallery";
import LineSeparator from "../../atoms/Line/LineSeparator";
import Navigation from "../../molecules/Navigation/Navigation";
import Title from "../../atoms/Title/Title";
import styles from "./House.module.scss";
import checkMark from "../../../assets/checkMark.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
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
  return (
    <div className={styles.houseCon}>
      <Navigation />
      <LineSeparator />
      <div className={styles.titleCon}>
        <Title title={title.toUpperCase()} />
        <p>{desc}</p>
      </div>
      <div className={styles.icons}>
        <div>
          <img src={bedroom} alt="bedroom" />
          <span>{overview.bedrooms} Bedrooms</span>
        </div>
        <div>
          <img src={bathroom} alt="bathroom" />
          <span>{overview.bathrooms} Bathrooms</span>
        </div>
        <div>
          <img src={people} alt="people" />
          <span>{overview.people} Guests</span>
        </div>
      </div>
      <div className={styles.galleryCon}>
        <Gallery photos={photos} />
      </div>

      <LineSeparator />

      <section className={styles.includesCon}>
        {includes.map((include, index) => (
          <div className={styles.includes} key={index}>
            <h3>{include.title}</h3>
            <div className={styles.itemsCon}>
              {Array.isArray(include.items) &&
                include.items.map((item, index) => (
                  <p key={index} className={styles.item}>
                    <span>
                      {" "}
                      <img src={checkMark} alt="check-mark" />
                    </span>
                    {item}
                  </p>
                ))}
            </div>
          </div>
        ))}

        <div className={styles.buttonCon}>
          <Link className={styles.button} to="/contact">
            Book Now
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default House;
