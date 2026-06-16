import { homeImgs } from "../../../data/homeImgs";
import styles from "./Slide.module.scss";

const Slide = () => {
  return (
    <div className={styles.slide}>
      <div className={styles.header}>
        <span>Explora Baluma</span>
        <h2>Una vista más cuidada de cada estancia</h2>
        <p>
          Recorre los espacios, materiales y rincones que hacen distinta cada
          propiedad antes de reservar.
        </p>
      </div>

      <div className={styles.rail} aria-label="Galería de propiedades">
        {homeImgs.map((img, index) => (
          <article key={img} className={styles.card}>
            <img src={img} alt={`Vista de propiedad ${index + 1}`} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Slide;
