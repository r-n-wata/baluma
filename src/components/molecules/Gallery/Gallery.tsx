import styles from "./Gallery.module.scss";

function Gallery({ photos }: { photos: string[] }) {
  console.log(photos);
  return (
    <div className={styles.gallery}>
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`${styles.photo} ${
            index % 2 === 0 ? styles.vertical : styles.horizontal
          }`}
        >
          <img src={photo} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
