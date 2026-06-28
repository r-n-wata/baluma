import styles from "./Gallery.module.scss";
import { useTranslation } from "react-i18next";

function Gallery({ photos }: { photos: string[] }) {
  const { t } = useTranslation();

  return (
    <div className={styles.gallery}>
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`${styles.photo} ${
            index % 2 === 0 ? styles.vertical : styles.horizontal
          }`}
        >
          <img src={photo} alt={t("common.galleryPhotoAlt", { index: index + 1 })} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
