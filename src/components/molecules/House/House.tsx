import Gallery from "../../molecules/Gallery/Gallery";
import LineSeparator from "../../atoms/Line/LineSeparator";
import Navigation from "../../molecules/Navigation/Navigation";
import Title from "../../atoms/Title/Title";
import styles from "./House.module.scss";

function House({
  title,
  desc,
  photos,
}: {
  title: string;
  desc: string;
  photos: string[];
}) {
  return (
    <div className={styles.houseCon}>
      <Navigation />
      <LineSeparator />
      <div className={styles.titleCon}>
        <Title title={title} />
        <p>{desc}</p>
      </div>
      <div className={styles.galleryCon}>
        <Gallery photos={photos} />
      </div>
    </div>
  );
}

export default House;
