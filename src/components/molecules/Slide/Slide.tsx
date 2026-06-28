import { homeImgs } from "../../../data/homeImgs";
import styles from "./Slide.module.scss";
import { useTranslation } from "react-i18next";

const Slide = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.slide}>
      <div className={styles.header}>
        <span>{t("slide.kicker")}</span>
        <h2>{t("slide.title")}</h2>
        <p>{t("slide.description")}</p>
      </div>

      <div className={styles.rail} aria-label={t("slide.ariaLabel")}>
        {homeImgs.map((img, index) => (
          <article key={img} className={styles.card}>
            <img src={img} alt={t("common.galleryPhotoAlt", { index: index + 1 })} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Slide;
